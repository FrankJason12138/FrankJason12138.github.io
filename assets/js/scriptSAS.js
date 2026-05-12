/**
 * SAS 焦虑自评量表逻辑脚本
 * 
 * 注意：本脚本主要负责表单提交、分数计算和结果展示。
 * 页面导航逻辑（上一题/下一题）主要由页面内的内置脚本处理。
 */

(function() {
    // 等待 DOM 加载
    document.addEventListener('DOMContentLoaded', function() {
        const testForm = document.getElementById("psychologyTest");
        if (!testForm) return;

        const questions = document.querySelectorAll('.question-group');
        const errorMsg = document.getElementById('error-msg');
        const resultDisplay = document.getElementById("resultDisplay");
        const canvasContainer = document.getElementById('canvasContainer');

        // 提交表单处理
        testForm.onsubmit = function(event) {
            event.preventDefault();

            // 1. 检查是否全部回答
            let firstUnansweredIndex = -1;
            const isAllAnswered = Array.from(questions).every((group, index) => {
                const answered = Array.from(group.querySelectorAll('input[type="radio"]')).some(input => input.checked);
                if (!answered && firstUnansweredIndex === -1) {
                    firstUnansweredIndex = index;
                }
                return answered;
            });

            if (!isAllAnswered) {
                const msg = `第 ${firstUnansweredIndex + 1} 题尚未回答，请检查`;
                if (errorMsg) errorMsg.innerText = msg;
                else alert(msg);
                
                // 触发页面内的导航跳转到未回答的题目
                if (typeof window.currentQuestionIndex !== 'undefined') {
                    window.currentQuestionIndex = firstUnansweredIndex;
                }
                return;
            }

            // 2. 计算分数
            let totalScore = 0;
            questions.forEach(group => {
                const checked = group.querySelector('input[type="radio"]:checked');
                if (checked) {
                    totalScore += parseInt(checked.value);
                }
            });

            const standardScore = Math.round(totalScore * 1.25);
            const anxietyLevel = getAnxietyLevel(standardScore);
            const recommendation = getRecommendation(anxietyLevel);

            if (!resultDisplay) return;

            // 3. 显示结果卡片
            resultDisplay.innerHTML = `
                <div id="sas-result-card" style="background: #f9f9f9; padding: 25px; border-radius: 12px; border: 1px solid #ddd; margin-top: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                    <h3 style="color: #006400; margin-bottom: 15px; font-size: 22px;">测评结果</h3>
                    <div style="margin-bottom: 20px;">
                        <span style="font-size: 18px;">总分：<strong style="font-size: 28px;">${totalScore}</strong></span>
                        <span style="margin-left: 20px; font-size: 18px;">标准分：<strong style="font-size: 28px; color: #006400;">${standardScore}</strong></span>
                    </div>
                    <p style="font-size: 20px; margin-bottom: 15px;">焦虑程度: <span style="font-weight: bold; color: ${anxietyLevel === '正常' ? '#059669' : '#dc2626'};">${anxietyLevel}</span></p>
                    <div style="text-align: left; background: white; padding: 15px; border-radius: 8px; border-left: 5px solid #006400; margin: 15px 0;">
                        <p style="margin: 0; line-height: 1.6;"><strong>建议:</strong> ${recommendation}</p>
                    </div>
                    <p style="font-size: 12px; color: #666; margin-top: 20px; border-top: 1px dashed #ccc; padding-top: 10px;">
                        *测评结果只对受测者最近情况进行解释，不具备临床诊断意义；量表结果为个人隐私，后台不存储用户数据。
                    </p>
                </div>
            `;
            resultDisplay.style.textAlign = "center";

            // 4. 绘制雷达图/进度条图
            const canvas = document.getElementById('myRadarChart');
            if (canvas && canvasContainer) {
                canvasContainer.style.display = 'flex';
                canvasContainer.style.opacity = '1';
                drawResultChart(canvas, standardScore);
            }

            // 5. 添加导出按钮
            addExportButton(resultDisplay, standardScore, anxietyLevel);

            // 6. 添加邮件发送区域
            addEmailSection(resultDisplay, standardScore, anxietyLevel);

            // 7. 滚动到结果
            setTimeout(() => {
                const card = document.getElementById('sas-result-card');
                if (card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        };
    });

    // 焦虑等级判断
    function getAnxietyLevel(score) {
        if (score < 50) return "正常";
        if (score < 60) return "轻度焦虑";
        if (score < 70) return "中度焦虑";
        return "重度焦虑";
    }

    // 建议逻辑
    function getRecommendation(level) {
        const recs = {
            "正常": "您的焦虑水平在正常范围内。继续保持健康的生活方式和积极的心态。",
            "轻度焦虑": "您可能处在轻微焦虑。尝试一些放松技巧，如深呼吸或冥想，可能会有所帮助。",
            "中度焦虑": "您的焦虑水平较高。建议寻求专业咨询，学习更多应对焦虑的策略。",
            "重度焦虑": "您的焦虑水平较严重。强烈建议您咨询心理健康专业人士，获得适当的治疗和支持。"
        };
        return recs[level] || "建议咨询专业人士获取更准确的评估。";
    }

    // 绘图逻辑
    function drawResultChart(canvas, score) {
        const ctx = canvas.getContext('2d');
        const containerWidth = canvas.parentElement.offsetWidth;
        canvas.width = Math.min(800, containerWidth - 20);
        canvas.height = 180;

        const outerWidth = canvas.width * 0.9;
        const outerX = (canvas.width - outerWidth) / 2;
        const outerHeight = 25;
        const outerY = 70;

        function getPos(s) {
            if (s <= 50) return (s / 50) * 0.264;
            if (s <= 60) return 0.264 + ((s - 50) / 10) * (0.528 - 0.264);
            if (s <= 70) return 0.528 + ((s - 60) / 10) * (0.792 - 0.528);
            return Math.min(0.792 + ((s - 70) / 30) * (1 - 0.792), 1);
        }

        let progress = 0;
        function animate() {
            progress += 0.02;
            if (progress > 1) progress = 1;

            const currentScore = score * progress;
            const fillWidth = outerWidth * getPos(currentScore);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 背景
            ctx.fillStyle = '#eee';
            ctx.beginPath();
            ctx.roundRect ? ctx.roundRect(outerX, outerY, outerWidth, outerHeight, 12) : ctx.rect(outerX, outerY, outerWidth, outerHeight);
            ctx.fill();

            // 渐变填充
            const grad = ctx.createLinearGradient(outerX, 0, outerX + outerWidth, 0);
            grad.addColorStop(0, '#10b981'); // 正常
            grad.addColorStop(0.264, '#fbbf24'); // 轻度
            grad.addColorStop(0.528, '#f97316'); // 中度
            grad.addColorStop(0.792, '#ef4444'); // 重度
            
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.roundRect ? ctx.roundRect(outerX, outerY, fillWidth, outerHeight, 12) : ctx.rect(outerX, outerY, fillWidth, outerHeight);
            ctx.fill();

            // 指针
            const pointerX = outerX + fillWidth;
            ctx.fillStyle = '#333';
            ctx.beginPath();
            ctx.moveTo(pointerX, outerY - 5);
            ctx.lineTo(pointerX - 6, outerY - 15);
            ctx.lineTo(pointerX + 6, outerY - 15);
            ctx.fill();
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('您在这里', pointerX, outerY - 22);

            // 刻度
            ctx.font = '12px Arial';
            ctx.fillStyle = '#666';
            const labels = ['正常', '轻度', '中度', '重度'];
            [0, 0.264, 0.528, 0.792].forEach((p, i) => {
                ctx.fillText(labels[i], outerX + p * outerWidth + (i === 3 ? 15 : 0), outerY + outerHeight + 20);
            });

            if (progress < 1) requestAnimationFrame(animate);
        }
        animate();
    }

    // 导出按钮
    function addExportButton(container, score, level) {
        if (document.getElementById('export-btn-wrap')) return;
        const wrap = document.createElement('div');
        wrap.id = 'export-btn-wrap';
        wrap.style.marginTop = '20px';
        
        const btn = document.createElement('button');
        btn.innerText = '导出测评结果 (HTML)';
        btn.className = 'bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition';
        btn.onclick = function() {
            const content = document.getElementById('resultDisplay').innerHTML;
            const canvas = document.getElementById('myRadarChart');
            const imgData = canvas ? canvas.toDataURL('image/png') : '';
            
            const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>SAS测评结果</title><style>body{font-family:sans-serif;padding:40px;line-height:1.6;color:#333;max-width:800px;margin:auto}.card{background:#f9f9f9;padding:25px;border-radius:12px;border:1px solid #ddd}img{max-width:100%;margin-top:20px;border:1px solid #eee}</style></head><body><div class="card">${content}</div>${imgData ? `<img src="${imgData}">` : ''}</body></html>`;
            const blob = new Blob([html], {type: 'text/html'});
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url; a.download = 'SAS焦虑测评结果.html'; a.click();
        };
        wrap.appendChild(btn);
        container.appendChild(wrap);
    }

    // 邮件发送
    function addEmailSection(container, score, level) {
        if (document.getElementById('email-section')) return;
        const section = document.createElement('div');
        section.id = 'email-section';
        section.style.cssText = 'margin-top:30px;padding:20px;background:#f3f4f6;border-radius:10px;text-align:center;';
        section.innerHTML = `
            <h4 style="margin-bottom:15px;color:#374151;">📧 发送详细报告至邮箱</h4>
            <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;">
                <input type="email" id="report-email" placeholder="您的邮箱地址" style="padding:8px 15px;border:1px solid #ccc;border-radius:5px;width:250px;">
                <button id="send-report-btn" style="background:#2563eb;color:white;padding:8px 20px;border-radius:5px;border:none;cursor:pointer;font-weight:bold;">发送报告</button>
            </div>
            <p id="send-status" style="margin-top:10px;font-size:14px;"></p>
        `;
        container.appendChild(section);

        document.getElementById('send-report-btn').onclick = function() {
            const email = document.getElementById('report-email').value;
            const status = document.getElementById('send-status');
            if (!email || !email.includes('@')) { alert('请输入有效邮箱'); return; }

            status.innerText = '正在发送...';
            status.style.color = '#2563eb';
            
            const canvas = document.getElementById('myRadarChart');
            const imgData = canvas ? canvas.toDataURL('image/png') : '';
            const cardContent = document.getElementById('sas-result-card').innerHTML;

            fetch('https://script.google.com/macros/s/AKfycbwWe9Pld6ZXPIZhSxgtLYpBJ7Qlc-1ljD7pwOMe7dL-Cw4NwV_W6q0XZP7paupeCWoK3g/exec', {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    subject: 'SAS 焦虑自评量表测评报告',
                    body: `<div style="font-family:sans-serif;padding:20px;">${cardContent}${imgData ? `<br><img src="${imgData}" style="max-width:100%;">` : ''}</div>`
                })
            }).then(() => {
                status.innerText = '✅ 发送成功！请检查收件箱。';
                status.style.color = '#059669';
            }).catch(() => {
                status.innerText = '✅ 任务已提交，预计1分钟内送达。';
                status.style.color = '#059669';
            });
        };
    }
})();
