/**
 * 卡特尔 16PF 逻辑脚本
 * 
 * 处理复杂的 16 种人格因素分数计算、雷达图绘制和结果展示。
 */

console.log("=== 16PF SCRIPT INITIALIZING ===");

(function() {
    function init() {
        const testForm = document.getElementById("psychologyTest");
        if (!testForm) return;

        const questions = document.querySelectorAll('.question-group');
        const errorMsg = document.getElementById('error-msg');
        const resultDisplay = document.getElementById("resultDisplay");

        testForm.onsubmit = function(event) {
            event.preventDefault();

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
                if (typeof window.currentQuestionIndex !== 'undefined') {
                    window.currentQuestionIndex = firstUnansweredIndex;
                }
                return;
            }

            // 因素分数计算逻辑 (保持原样)
            const getScore = (indices) => {
                let s = 0;
                indices.forEach(idx => {
                    const el = document.querySelector(`input[name="question${idx}"]:checked`);
                    if (el) s += parseInt(el.value, 10);
                });
                return s;
            };

            var rawA = getScore([3, 26, 27, 51, 52, 76, 101, 126, 151, 176]);
            var rawB = getScore([28, 53, 54, 77, 78, 102, 103, 127, 128, 152, 153, 177, 178]);
            var rawC = getScore([4, 5, 29, 30, 55, 79, 80, 104, 105, 129, 130, 154, 179]);
            var rawE = getScore([6, 7, 31, 32, 56, 57, 81, 106, 131, 155, 156, 180, 181]);
            var rawF = getScore([8, 33, 58, 82, 83, 107, 108, 132, 133, 157, 158, 182, 183]);
            var rawG = getScore([9, 34, 59, 84, 109, 134, 159, 160, 184, 185]);
            var rawH = getScore([10, 35, 36, 60, 61, 85, 86, 110, 111, 135, 136, 161, 186]);
            var rawI = getScore([11, 12, 37, 62, 87, 112, 137, 138, 162, 163]);
            var rawL = getScore([13, 38, 63, 64, 88, 89, 113, 114, 139, 164]);
            var rawM = getScore([14, 15, 39, 40, 65, 90, 91, 115, 116, 140, 141, 165, 166]);
            var rawN = getScore([16, 17, 41, 42, 66, 67, 92, 117, 142, 167]);
            var rawO = getScore([18, 19, 43, 44, 68, 69, 93, 94, 118, 119, 143, 144, 168]);
            var rawQ1 = getScore([20, 21, 45, 46, 70, 95, 120, 145, 169, 170]);
            var rawQ2 = getScore([22, 47, 71, 72, 96, 97, 121, 122, 146, 171]);
            var rawQ3 = getScore([23, 24, 48, 73, 98, 123, 147, 148, 172, 173]);
            var rawQ4 = getScore([25, 49, 50, 74, 75, 99, 100, 124, 125, 149, 150, 174, 175]);

            // 原始分到标准分映射 (1-10)
            const mapA = (s) => (s<=1?1:s<=3?2:s<=5?3:s==6?4:s<=8?5:s<=11?6:s<=13?7:s==14?8:s<=16?9:10);
            const mapB = (s) => (s<=3?1:s==4?2:s==5?3:s==6?4:s==7?5:s==8?6:s==9?7:s==10?8:s==11?9:10);
            const mapC = (s) => (s<=5?1:s<=7?2:s<=9?3:s<=11?4:s<=13?5:s<=16?6:s<=18?7:s<=20?8:s<=22?9:10);
            const mapE = (s) => (s<=2?1:s<=4?2:s==5?3:s<=7?4:s<=9?5:s<=12?6:s<=14?7:s<=16?8:s<=18?9:10);
            const mapF = (s) => (s<=3?1:s==4?2:s<=6?3:s==7?4:s<=9?5:s<=12?6:s<=14?7:s<=16?8:s<=18?9:10);
            const mapG = (s) => (s<=5?1:s<=7?2:s<=9?3:s==10?4:s<=12?5:s<=14?6:s<=16?7:s==17?8:s==18?9:10);
            const mapH = (s) => (s<=1?1:s==2?2:s==3?3:s<=6?4:s<=8?5:s<=11?6:s<=14?7:s<=16?8:s<=19?9:10);
            const mapI = (s) => (s<=5?1:s==6?2:s<=8?3:s==9?4:s<=11?5:s<=13?6:s==14?7:s<=16?8:s==17?9:10);
            const mapL = (s) => (s<=3?1:s<=5?2:s==6?3:s<=8?4:s<=10?5:s<=12?6:s==13?7:s<=15?8:s==16?9:10);
            const mapM = (s) => (s<=5?1:s<=7?2:s<=9?3:s<=11?4:s<=13?5:s<=15?6:s<=17?7:s<=19?8:s==20?9:10);
            const mapN = (s) => (s<=2?1:s==3?2:s==4?3:s<=6?4:s<=8?5:s<=10?6:s==11?7:s<=13?8:s==14?9:10);
            const mapO = (s) => (s<=2?1:s<=4?2:s<=6?3:s<=8?4:s<=10?5:s<=12?6:s<=14?7:s<=16?8:s<=18?9:10);
            const mapQ1 = (s) => (s<=4?1:s==5?2:s<=7?3:s==8?4:s<=10?5:s<=12?6:s==13?7:s==14?8:s==15?9:10);
            const mapQ2 = (s) => (s<=5?1:s<=7?2:s==8?3:s<=10?4:s<=12?5:s<=14?6:s==15?7:s<=17?8:s==18?9:10);
            const mapQ3 = (s) => (s<=4?1:s<=6?2:s<=8?3:s<=10?4:s<=12?5:s<=14?6:s==15?7:s<=17?8:s==18?9:10);
            const mapQ4 = (s) => (s<=2?1:s<=4?2:s<=6?3:s<=8?4:s<=11?5:s<=14?6:s<=16?7:s<=19?8:s<=21?9:10);

            var sA=mapA(rawA), sB=mapB(rawB), sC=mapC(rawC), sE=mapE(rawE), sF=mapF(rawF), sG=mapG(rawG), sH=mapH(rawH), sI=mapI(rawI), sL=mapL(rawL), sM=mapM(rawM), sN=mapN(rawN), sO=mapO(rawO), sQ1=mapQ1(rawQ1), sQ2=mapQ2(rawQ2), sQ3=mapQ3(rawQ3), sQ4=mapQ4(rawQ4);

            // 次级因素计算
            var sX1 = ((38 + 2*sL + 3*sO + 4*sQ4) - (2*sC + 2*sH + 2*sQ2)) / 10;
            var sX2 = ((2*sA + 3*sE + 4*sF + 5*sH) - (2*sQ2 + 11)) / 10;
            var sX3 = ((77 + 2*sC + 2*sE + 2*sF + 2*sN) - (4*sA + 6*sI + 2*sM)) / 10;
            var sX4 = ((4*sE + 3*sM + 4*sQ1 + 4*sQ2) - (3*sA + 2*sG)) / 10;
            var sY1 = sC + sF + (11-sO) + (11-sQ4);
            var sY2 = sQ3*2 + sG*2 + sC*2 + sE + sN + sQ2 + sQ1;
            var rawY3 = (11-sA)*2 + sB*2 + sE + (11-sF)*2 + sH + sI*2 + sM + (11-sN) + sQ1 + sQ2*2;
            const mapY3 = (s) => (s<=62?1:s<=67?2:s<=72?3:s<=77?4:s<=82?5:s<=87?6:s<=92?7:s<=97?8:s<=102?9:10);
            var sY3 = mapY3(rawY3);
            var sY4 = sB + sG + sQ3 + (11-sF);

            if (!resultDisplay) return;
            resultDisplay.innerHTML = `<div id="pf-result-container" style="text-align:left; background:#fff; padding:20px; border-radius:12px; border:1px solid #ddd; margin-top:30px; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
                <h2 style="color:#006400; text-align:center; margin-bottom:20px;">16PF 测评结果</h2>
                <div id="pf-factors-list"></div>
                <hr style="margin:20px 0;">
                <div id="pf-secondary-list"></div>
                <p style="font-size:12px; color:#666; margin-top:20px; text-align:center;">*测评结果仅供参考，不作为临床诊断依据。</p>
            </div>`;
            
            const factorsList = document.getElementById('pf-factors-list');
            const addF = (f, name, desc, raw, std, avg, sd, lowT, highT) => {
                let res = (raw - avg) < -1.5*sd ? lowT : (raw - avg) > 1.5*sd ? highT : "您的得分在正常范围内。";
                factorsList.innerHTML += `<div style="margin-bottom:15px;"><strong>因素 ${f} (${name}):</strong> ${desc}<br>原始分: ${raw}, 标准分: ${std} (1-10)<br><span style="color:#555; font-size:14px;">解释: ${res}</span></div>`;
            };

            addF("A", "热情性", "待人是否热情", rawA, sA, 9.06, 3.4, "缄默、冷漠、孤独。", "开朗、热情、乐群。");
            addF("B", "聪慧性", "抽象思维能力", rawB, sB, 7.65, 1.6, "思想迟钝、抽象思维弱。", "聪明、思维敏捷。");
            addF("C", "稳定性", "情绪稳定性", rawC, sC, 14.08, 4.11, "情绪激动、易生烦恼。", "情绪稳定而成熟。");
            addF("E", "恃强性", "支配与影响他人", rawE, sE, 9.82, 3.5, "谦虚、顺从、通融。", "好强固执、独立积极。");
            addF("F", "兴奋性", "情绪活跃程度", rawF, sF, 10.69, 3.84, "严肃、谨慎、冷静。", "活跃、轻松、随遇而安。");
            addF("G", "规范性", "社会道德接纳度", rawG, sG, 8.20, 2.3, "缺乏责任感、苟且敷衍。", "有良心、守法、做事尽职。");
            addF("H", "敢为性", "社会情境轻松感", rawH, sH, 8.76, 4.95, "胆小、退缩、羞怯。", "冒险、勇于社交。");
            addF("I", "敏感性", "判断决定易受感情影响", rawI, sI, 11.42, 2.87, "现实、固执、自持。", "敏感、善良、多情。");
            addF("L", "怀疑性", "探究他人动机倾向", rawL, sL, 10.25, 3.05, "信赖别人、易相处。", "多疑、警惕、固执。");
            addF("M", "幻想性", "关注外在与内在平衡", rawM, sM, 13.27, 3.39, "现实、合乎成规、踏实。", "富于幻想、狂放不羁。");
            addF("N", "世故性", "处事老练程度", rawN, sN, 8.21, 2.67, "坦白、直率、天真。", "精明、能干、世故。");
            addF("O", "忧虑性", "自我怀疑程度", rawO, sO, 10.42, 3.79, "安详、沉着、自信。", "烦恼、忧虑、抑郁。");
            addF("Q1", "变革性", "对新事物的接受度", rawQ1, sQ1, 10.15, 2.15, "自由、激进、好奇。", "保守、传统、守旧。");
            addF("Q2", "独立性", "与群体融合度", rawQ2, sQ2, 12.26, 2.88, "依赖、融合、附和。", "独立、有主见。");
            addF("Q3", "自律性", "自我行为控制", rawQ3, sQ3, 12.21, 3.41, "散漫、松懈、不顾大体。", "自律、谨慎、负责。");
            addF("Q4", "紧张性", "躯体紧张水平", rawQ4, sQ4, 11.46, 4.79, "心平气和、闲散宁静。", "紧张困扰、激动挣扎。");

            const secondaryList = document.getElementById('pf-secondary-list');
            const addS = (t, s, l, m, h) => {
                let res = s<=4 ? l : s>=8 ? h : m;
                secondaryList.innerHTML += `<div style="margin-top:10px;"><strong>${t}:</strong> 得分 ${s}<br><span style="color:#555; font-size:14px;">${res}</span></div>`;
            };
            addS("适应与焦虑性 (X1)", sX1, "容易适应，心满意足。", "中等水平。", "感到不满意，高度焦虑。");
            addS("内向与外向性 (X2)", sX2, "内倾、自足、克制。", "中等水平。", "外倾、开朗、善于交际。");
            addS("感情用事与安详机警性 (X3)", sX3, "情感丰富，易困扰。", "中等水平。", "富有事业心，果断。");
            addS("怯懦与果断性 (X4)", sX4, "怯懦、顺从、被动。", "中等水平。", "果断、独立、有气魄。");

            createRadarChart([sA, sB, sC, sE, sF, sG, sH, sI, sL, sM, sN, sO, sQ1, sQ2, sQ3, sQ4]);

            addPfButtons(resultDisplay);
            resultDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
    }

    function createRadarChart(scores) {
        var ctx = document.getElementById('myRadarChart').getContext('2d');
        if (window.myRadarChartInstance) window.myRadarChartInstance.destroy();
        window.myRadarChartInstance = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['热情', '聪慧', '稳定', '恃强', '兴奋', '规范', '敢为', '敏感', '怀疑', '幻想', '世故', '忧虑', '变革', '独立', '自律', '紧张'],
                datasets: [{ label: '16种人格因素形状', data: scores, backgroundColor: 'rgba(0, 100, 0, 0.2)', borderColor: 'rgba(0, 100, 0, 1)', borderWidth: 2 }]
            },
            options: { scales: { r: { min: 0, max: 10, stepSize: 1 } } }
        });
    }

    function addPfButtons(container) {
        if (document.getElementById('pf-btns')) return;
        const div = document.createElement('div');
        div.id = 'pf-btns';
        div.style.textAlign = 'center';
        div.style.marginTop = '20px';
        const btn = document.createElement('button');
        btn.innerText = '导出测评结果 (HTML)';
        btn.className = 'bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-md';
        btn.onclick = () => {
            const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>16PF结果</title></head><body>${container.innerHTML}</body></html>`;
            const blob = new Blob([html], {type: 'text/html'});
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a'); a.href = url; a.download = '16PF测评结果.html'; a.click();
        };
        div.appendChild(btn);
        container.appendChild(div);
        
        // Email section
        const emailDiv = document.createElement('div');
        emailDiv.style.marginTop = '30px';
        emailDiv.style.padding = '20px';
        emailDiv.style.background = '#f3f4f6';
        emailDiv.style.borderRadius = '10px';
        emailDiv.innerHTML = `<h4>📧 发送结果到邮箱</h4><input type="email" id="pf-email" placeholder="邮箱" style="padding:5px; border-radius:5px;"><button id="pf-email-btn" style="margin-left:10px; background:#2563eb; color:white; padding:5px 15px; border-radius:5px; border:none;">发送</button><p id="pf-status"></p>`;
        container.appendChild(emailDiv);
        document.getElementById('pf-email-btn').onclick = () => {
            const email = document.getElementById('pf-email').value;
            const status = document.getElementById('pf-status');
            if (!email.includes('@')) { alert('无效邮箱'); return; }
            status.innerText = '正在发送...';
            const canvas = document.getElementById('myRadarChart');
            const imgData = canvas ? canvas.toDataURL('image/png') : '';
            fetch('https://script.google.com/macros/s/AKfycbwWe9Pld6ZXPIZhSxgtLYpBJ7Qlc-1ljD7pwOMe7dL-Cw4NwV_W6q0XZP7paupeCWoK3g/exec', {
                method: 'POST',
                body: JSON.stringify({ email: email, subject: '16PF 人格测评报告', body: `<div>${container.innerHTML}${imgData ? `<br><img src="${imgData}">` : ''}</div>` })
            }).then(() => { status.innerText = '✅ 已提交任务，请检查邮箱。'; });
        };
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
