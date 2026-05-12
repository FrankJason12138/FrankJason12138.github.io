// 导航逻辑
// 兼容性处理：如果全局 currentQuestionIndex 已经由其他脚本定义，则使用它
if (typeof window.currentQuestionIndex === 'undefined') {
    window.currentQuestionIndex = 0;
}

const questions = document.querySelectorAll('.question-group');
const wrapper = document.getElementById('question-wrapper');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const progressBar = document.getElementById('progress-bar');
const errorMsg = document.getElementById('error-msg');

function updateNavigation() {
    // 如果没有 wrapper，说明可能使用的是 display: block/none 的简单切换模式
    if (wrapper) {
        const containerHeight = document.getElementById('quiz-container').offsetHeight;
        const itemHeight = 400; // matching .question-group min-height
        const offset = -window.currentQuestionIndex * itemHeight + (containerHeight - itemHeight) / 2;
        wrapper.style.transform = `translateY(${offset}px)`;
    }
    
    questions.forEach((group, index) => {
        group.classList.remove('active', 'prev', 'next');
        group.style.opacity = '0';
        
        if (index === window.currentQuestionIndex) {
            group.classList.add('active');
            group.style.opacity = '1';
        } else if (index === window.currentQuestionIndex - 1) {
            group.classList.add('prev');
            group.style.opacity = '0.3';
        } else if (index === window.currentQuestionIndex + 1) {
            group.classList.add('next');
            group.style.opacity = '0.3';
        }
    });
    
    if (prevBtn) prevBtn.disabled = window.currentQuestionIndex === 0;
    
    // Check if all questions are answered
    const allAnswered = Array.from(questions).every(group => {
        return Array.from(group.querySelectorAll('input[type="radio"]')).some(input => input.checked);
    });

    if (submitBtn) {
        if (allAnswered) {
            submitBtn.style.display = 'block';
        } else {
            submitBtn.style.display = 'none';
        }
    }

    if (nextBtn) {
        if (window.currentQuestionIndex === questions.length - 1) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'block';
        }
    }
    
    if (progressBar) {
        const progress = ((window.currentQuestionIndex + 1) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }
    
    if (errorMsg) errorMsg.innerText = '';
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        if (window.currentQuestionIndex > 0) {
            window.currentQuestionIndex--;
            updateNavigation();
        }
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        if (window.currentQuestionIndex < questions.length - 1) {
            window.currentQuestionIndex++;
            updateNavigation();
        }
    });
}

// 初始化
try {
    updateNavigation();
} catch (e) {
    console.warn("SAS Navigation init failed:", e);
}

// 自动跳转到下一个问题（当选择后）并更新导航（显示提交按钮）
questions.forEach((group, index) => {
    const inputs = group.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.addEventListener('change', () => {
            updateNavigation(); // Update to check if all answered
            if (window.currentQuestionIndex < questions.length - 1) {
                setTimeout(() => {
                    window.currentQuestionIndex++;
                    updateNavigation();
                }, 300); // 延迟一点点，让用户看到选中效果
            }
        });
    });
});

const testForm = document.getElementById("psychologyTest");
if (testForm) {
    testForm.onsubmit = function(event) {
        event.preventDefault();

        // 检查所有问题是否已回答，并找到第一个未回答的问题
        let firstUnansweredIndex = -1;
        const isAllAnswered = Array.from(questions).every((group, index) => {
            const answered = Array.from(group.querySelectorAll('input[type="radio"]')).some(input => input.checked);
            if (!answered && firstUnansweredIndex === -1) {
                firstUnansweredIndex = index;
            }
            return answered;
        });

        if (!isAllAnswered) {
            if (errorMsg) errorMsg.innerText = `第 ${firstUnansweredIndex + 1} 题尚未回答，请检查`;
            window.currentQuestionIndex = firstUnansweredIndex;
            updateNavigation();
            return;
        }

        // 计算分数
        var totalScore = 0;
        questions.forEach(group => {
            const checked = group.querySelector('input[type="radio"]:checked');
            if (checked) {
                totalScore += parseInt(checked.value);
            }
        });

        var standardScore = Math.round(totalScore * 1.25);
        var anxietyLevel = getAnxietyLevel(standardScore);
        var recommendation = getRecommendation(anxietyLevel);

        var resultDisplay = document.getElementById("resultDisplay");
        if (!resultDisplay) return;

        resultDisplay.innerHTML = `
            <div id="sas-result-card" style="background: #f9f9f9; padding: 20px; border-radius: 10px; border: 1px solid #ddd; margin-top: 20px;">
                <h3 style="color: #006400;">测评结果</h3>
                <p style="font-size: 24px; font-weight: bold;">总分： ${totalScore} ，标准分: ${standardScore}</p>
                <p style="font-size: 20px;">焦虑程度: <span style="color: ${anxietyLevel === '正常' ? 'green' : 'red'};">${anxietyLevel}</span></p>
                <div style="text-align: left; background: white; padding: 15px; border-radius: 5px; margin: 10px 0;">
                    <p><strong>建议:</strong> ${recommendation}</p>
                </div>
                <p style="font-size: 12px; color: #666; margin-top: 15px;">*测评结果只对受测者最近情况进行解释，不具备临床诊断意义；由于量表结果为个人隐私，后台不会存储用户数据。</p>
            </div>
        `;
        resultDisplay.style.textAlign = "center";

        // 绘制图表逻辑
        var canvas = document.getElementById('myRadarChart');
        if (canvas) {
            var ctx = canvas.getContext('2d');
            
            function setCanvasSize() {
                var containerWidth = document.getElementById('canvasContainer').offsetWidth;
                canvas.width = Math.min(800, containerWidth - 20);
                canvas.height = Math.max(200, canvas.width * 0.3);
                drawChart(1);
            }

            function getRelativePosition(score) {
                if (score <= 50) return score / 50 * 0.264;
                if (score <= 59) return 0.264 + (score - 50) / 10 * (0.528 - 0.264);
                if (score <= 69) return 0.528 + (score - 59) / 10 * (0.792 - 0.528);
                return Math.min(0.792 + (score - 69) / 30 * (1 - 0.792), 1);
            }

            function drawChart(progress) {
                var canvasWidth = canvas.width;
                var outerWidth = canvasWidth * 0.9;
                var outerX = (canvasWidth - outerWidth) / 2;
                var outerHeight = Math.min(30, canvas.height * 0.15);
                var outerY = canvas.height * 0.5;

                var currentValue = progress * standardScore;
                var currentValueWidth = outerWidth * getRelativePosition(currentValue);
                
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // 背景条
                ctx.fillStyle = '#e0e0e0';
                ctx.beginPath();
                if (ctx.roundRect) {
                    ctx.roundRect(outerX, outerY, outerWidth, outerHeight, outerHeight / 2);
                } else {
                    ctx.rect(outerX, outerY, outerWidth, outerHeight);
                }
                ctx.fill();
                
                // 带渐变的内部条
                var gradient = ctx.createLinearGradient(outerX, 0, outerX + outerWidth, 0);
                gradient.addColorStop(0, 'green');
                gradient.addColorStop(0.264, 'yellow');
                gradient.addColorStop(0.528, 'orange');
                gradient.addColorStop(0.792, 'red');
                gradient.addColorStop(1, 'darkred');
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                if (ctx.roundRect) {
                    ctx.roundRect(outerX, outerY, currentValueWidth, outerHeight, outerHeight / 2);
                } else {
                    ctx.rect(outerX, outerY, currentValueWidth, outerHeight);
                }
                ctx.fill();
                
                // 焦虑分段线
                [0.264, 0.528, 0.792].forEach(point => {
                    var markerX = outerX + point * outerWidth;
                    ctx.fillStyle = '#000';
                    ctx.fillRect(markerX, outerY - 5, 1, outerHeight + 10);
                });
                
                // 焦虑分段标签
                ctx.font = `${Math.max(12, canvas.width * 0.025)}px Arial`;
                ctx.textAlign = 'center';
                ctx.fillStyle = '#000';
                ['正常', '轻度焦虑', '中度焦虑', '重度焦虑'].forEach((label, index) => {
                    var x = outerX + index * outerWidth * 0.264;
                    ctx.fillText(label, x, outerY + outerHeight + 25);
                });

                // 三角形标记
                var markerX = outerX + currentValueWidth;
                ctx.fillStyle = 'black';
                ctx.beginPath();
                ctx.moveTo(markerX, outerY - 5);
                ctx.lineTo(markerX - 5, outerY - 15);
                ctx.lineTo(markerX + 5, outerY - 15);
                ctx.fill();
                ctx.fillText('您在这', markerX, outerY - 20);
            }

            setCanvasSize();
            window.addEventListener('resize', setCanvasSize);

            var startTime;
            function animate(timestamp) {
                if (!startTime) startTime = timestamp;
                var elapsed = timestamp - startTime;
                var progress = Math.min(elapsed / 1500, 1);
                drawChart(progress);
                if (progress < 1) requestAnimationFrame(animate);
            }
            requestAnimationFrame(animate);

            var canvasContainer = document.getElementById('canvasContainer');
            if (canvasContainer) {
                canvasContainer.style.display = 'flex';
                setTimeout(() => canvasContainer.style.opacity = 1, 100);
            }
        }

        // 导出按钮
        var exportButtonContainer = document.createElement('div');
        exportButtonContainer.id = 'exportButtonContainer';
        exportButtonContainer.style.textAlign = 'center';
        exportButtonContainer.style.marginTop = '20px';

        var exportButton = document.createElement('button');
        exportButton.innerHTML = '导出测评结果';
        exportButton.className = 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 mb-4';
        exportButton.onclick = function() {
            const resultText = resultDisplay.innerText;
            const canvas = document.getElementById('myRadarChart');
            const imageDataUrl = canvas ? canvas.toDataURL('image/png') : '';
            
            const htmlContent = `
              <!DOCTYPE html>
              <html>
                <head>
                  <meta charset="utf-8">
                  <title>SAS测评结果</title>
                  <style>
                    body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
                    .results { margin-bottom: 30px; }
                    img { max-width: 100%; height: auto; border: 1px solid #ddd; }
                  </style>
                </head>
                <body>
                  <div class="results">${resultDisplay.innerHTML}</div>
                  ${imageDataUrl ? `<div><img src="${imageDataUrl}" alt="SAS测评图表"></div>` : ''}
                </body>
              </html>
            `;
            
            const blob = new Blob([htmlContent], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'SAS测评结果.html';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        };

        exportButtonContainer.appendChild(exportButton);
        resultDisplay.insertBefore(exportButtonContainer, resultDisplay.firstChild);

        // 邮件发送逻辑
        if (!document.getElementById('email-section')) {
            const emailSection = document.createElement('div');
            emailSection.id = 'email-section';
            emailSection.style.marginTop = '40px';
            emailSection.style.padding = '20px';
            emailSection.style.backgroundColor = '#f3f4f6';
            emailSection.style.borderRadius = '8px';
            emailSection.innerHTML = `
                <h3 style="font-size: 20px; margin-bottom: 15px;">📧 将详细报告发送到邮箱</h3>
                <div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">
                    <input type="email" id="user-email" placeholder="请输入您的邮箱地址" 
                           style="padding: 10px; border: 1px solid #ccc; border-radius: 4px; width: 80%; max-width: 300px;">
                    <button id="send-email-btn" style="background-color: #3b82f6; color: white; font-weight: bold; padding: 10px 20px; border-radius: 4px; cursor: pointer; border: none;">
                        发送报告
                    </button>
                    <p id="email-status" style="margin-top: 10px; font-weight: bold;"></p>
                </div>
            `;
            resultDisplay.appendChild(emailSection);

            document.getElementById('send-email-btn').onclick = function() {
                const email = document.getElementById('user-email').value;
                const status = document.getElementById('email-status');
                
                if (!email || !email.includes('@')) {
                    alert('请输入有效的邮箱地址');
                    return;
                }

                status.style.color = 'blue';
                status.innerText = '正在发送中，请稍候...';
                this.disabled = true;

                const canvas = document.getElementById('myRadarChart');
                const chartImg = canvas ? canvas.toDataURL('image/png') : '';
                
                // 提取结果内容
                const resultClone = resultDisplay.cloneNode(true);
                ['#email-section', '#exportButtonContainer'].forEach(selector => {
                    const el = resultClone.querySelector(selector);
                    if (el) el.remove();
                });
                const resultHtml = resultClone.innerHTML;

                const payload = {
                    email: email,
                    subject: 'SAS 焦虑自评量表报告',
                    body: `
                        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
                            <h2 style="color: #059669;">SAS 焦虑自评量表报告</h2>
                            <div style="font-size: 16px; line-height: 1.6;">${resultHtml}</div>
                            ${chartImg ? `<div style="margin-top: 20px;"><h3>焦虑程度示意图：</h3><img src="${chartImg}" style="max-width: 100%; border: 1px solid #ddd;" /></div>` : ''}
                            <p style="margin-top: 30px; font-size: 12px; color: #666;">*此报告由 Dittoo 的小窝自动发送。</p>
                        </div>
                    `
                };

                const gasUrl = 'https://script.google.com/macros/s/AKfycbwWe9Pld6ZXPIZhSxgtLYpBJ7Qlc-1ljD7pwOMe7dL-Cw4NwV_W6q0XZP7paupeCWoK3g/exec';

                fetch(gasUrl, {
                    method: 'POST',
                    body: JSON.stringify(payload)
                }).then(() => {
                    status.style.color = 'green';
                    status.innerText = '✅ 发送成功！请检查您的收件箱。';
                }).catch(err => {
                    status.style.color = 'green';
                    status.innerText = '✅ 任务已提交！请在 1-2 分钟内检查收件箱。';
                });
            };
        }

        // 滚动到结果区域
        document.getElementById('sas-result-card').scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
}

function getAnxietyLevel(score) {
    if (score < 50) return "正常";
    if (score < 60) return "轻度焦虑";
    if (score < 70) return "中度焦虑";
    return "重度焦虑";
}

function getRecommendation(anxietyLevel) {
    switch(anxietyLevel) {
        case "正常":
            return "您的焦虑水平在正常范围内。继续保持健康的生活方式和积极的心态。";
        case "轻度焦虑":
            return "您可能处在轻微焦虑。尝试一些放松技巧，如深呼吸或冥想，可能会有所帮助。";
        case "中度焦虑":
            return "您的焦虑水平较高。建议寻求专业咨询，学习更多应对焦虑的策略。";
        case "重度焦虑":
            return "您的焦虑水平较严重。强烈建议您咨询心理健康专业人士，获得适当的治疗和支持。";
        default:
            return "无法确定焦虑水平。请咨询专业人士获取更准确的评估。";
    }
}
