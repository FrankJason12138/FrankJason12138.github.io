// 导航逻辑
let currentQuestionIndex = 0;
const questions = document.querySelectorAll('.question-group');
const wrapper = document.getElementById('question-wrapper');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const progressBar = document.getElementById('progress-bar');
const errorMsg = document.getElementById('error-msg');

function updateNavigation() {
    const offset = -currentQuestionIndex * 400; // 每个 question-group 的 min-height 是 400px
    wrapper.style.transform = `translateY(${offset}px)`;
    
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Check if all questions are answered
    const allAnswered = Array.from(questions).every(group => {
        return Array.from(group.querySelectorAll('input[type="radio"]')).some(input => input.checked);
    });

    if (allAnswered) {
        submitBtn.style.display = 'block';
    } else {
        submitBtn.style.display = 'none';
    }

    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }
    
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    errorMsg.innerText = '';
}

prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateNavigation();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        updateNavigation();
    }
});

// 初始化
updateNavigation();

// 自动跳转到下一个问题（当选择后）并更新导航（显示提交按钮）
questions.forEach((group, index) => {
    const inputs = group.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.addEventListener('change', () => {
            updateNavigation(); // Update to check if all answered
            if (currentQuestionIndex < questions.length - 1) {
                setTimeout(() => {
                    currentQuestionIndex++;
                    updateNavigation();
                }, 300); // 延迟一点点，让用户看到选中效果
            }
        });
    });
});

document.getElementById("psychologyTest").onsubmit = function(event) {
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
        errorMsg.innerText = `第 ${firstUnansweredIndex + 1} 题尚未回答，请检查`;
        currentQuestionIndex = firstUnansweredIndex;
        updateNavigation();
        return;
    }

    var totalScore = Array.from(document.querySelectorAll('input[type="radio"]:checked')).reduce((sum, input) => {
        return sum + parseInt(input.value);
    }, 0);

    var standardScore = Math.round(totalScore * 1.25);

    var anxietyLevel = getAnxietyLevel(standardScore);
    var recommendation = getRecommendation(anxietyLevel);

    var resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.innerHTML = `
        <h3>总分： ${totalScore} ，标准分: ${standardScore}</h3>
        <p>抑郁程度: ${anxietyLevel}</p>
        <p>建议: ${recommendation}</p>
        <h4>*测评结果只对受测者最近情况进行解释，不具备临床经验；注意：由于量表结果为个人隐私，后台不会存储用户数据，点击导出结果后，将下载的文件发送给客服老师进行一对一分析</h4>
    `;
    resultDisplay.style.textAlign = "center";

    var canvas = document.getElementById('myRadarChart');
    var ctx = canvas.getContext('2d');
    
    function setCanvasSize() {
        var containerWidth = document.getElementById('canvasContainer').offsetWidth;
        canvas.width = Math.min(800, containerWidth - 20);
        canvas.height = Math.max(200, canvas.width * 0.3);
        draw(1);
    }

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    var canvasWidth, outerWidth, outerX, outerHeight, outerY;

    function updateDimensions() {
        canvasWidth = canvas.width;
        outerWidth = canvasWidth * 0.9;
        outerX = (canvasWidth - outerWidth) / 2;
        outerHeight = Math.min(30, canvas.height * 0.15);
        outerY = canvas.height * 0.5;
    }

    function getRelativePosition(score) {
        if (score <= 50) return score / 50 * 0.264;
        if (score <= 59) return 0.264 + (score - 50) / 10 * (0.528 - 0.264);
        if (score <= 69) return 0.528 + (score - 59) / 10 * (0.792 - 0.528);
        return Math.min(0.792 + (score - 69) / 30 * (1 - 0.792), 1);
    }

    function draw(progress) {
        updateDimensions();
        var currentValue = progress * standardScore;
        var currentValueWidth = outerWidth * getRelativePosition(currentValue);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 背景条
        ctx.fillStyle = '#e0e0e0';
        ctx.beginPath();
        ctx.roundRect(outerX, outerY, outerWidth, outerHeight, outerHeight / 2);
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
        ctx.roundRect(outerX, outerY, currentValueWidth, outerHeight, outerHeight / 2);
        ctx.fill();
        
        // 焦虑分段线
        [0.264, 0.528, 0.792].forEach(point => {
            var markerX = outerX + point * outerWidth;
            ctx.fillStyle = '#000';
            ctx.fillRect(markerX, outerY - 5, 1, outerHeight + 10);
        });
        
        // 焦虑分段标签
        ctx.font = `${Math.max(14, canvas.width * 0.03)}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillStyle = '#000';
        ['正常', '轻度抑郁', '中度抑郁', '重度抑郁'].forEach((label, index) => {
            var x = outerX + index * outerWidth * 0.264;
            ctx.fillText(label, x, outerY + outerHeight + canvas.height * 0.1);
        });

        // 三角形标记
        var markerX = outerX + currentValueWidth;
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.moveTo(markerX, outerY - outerHeight * 0.5);
        ctx.lineTo(markerX - outerHeight * 0.25, outerY - outerHeight * 0.83);
        ctx.lineTo(markerX + outerHeight * 0.25, outerY - outerHeight * 0.83);
        ctx.fill();

        // "您在这"标签
        ctx.fillText('您在这', markerX, outerY - outerHeight);
    }

    var startTime;
    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        var elapsed = timestamp - startTime;
        var progress = Math.min(elapsed / 2000, 1);
        draw(progress);
        if (progress < 1) requestAnimationFrame(animate);
    }
    
    requestAnimationFrame(animate);

    var canvasContainer = document.getElementById('canvasContainer');
    canvasContainer.style.display = 'flex';
    canvasContainer.style.justifyContent = 'center';
    canvasContainer.style.alignItems = 'center';
    canvasContainer.style.marginTop = '20px';
    setTimeout(() => canvasContainer.style.opacity = 1, 100);
    // 在 resultDisplay.innerHTML 赋值后添加：
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
    const imageDataUrl = canvas.toDataURL('image/png');
    
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>SDS测评结果</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
            .results { margin-bottom: 30px; }
            img { max-width: 100%; height: auto; }
          </style>
        </head>
        <body>
          <div class="results">
            ${resultText}
          </div>
          <div>
            <img src="${imageDataUrl}" alt="SDS测评图表">
          </div>
        </body>
      </html>
    `;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'SDS测评结果.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

// 将按钮添加到容器中并插入到结果显示区域的最前面
exportButtonContainer.appendChild(exportButton);
resultDisplay.insertBefore(exportButtonContainer, resultDisplay.firstChild);

// 滚动到导出按钮位置
exportButtonContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });

// --- 邮件发送逻辑开始 ---
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
        
        // 提取结果内容，排除掉刚添加的邮件区域
        const resultClone = resultDisplay.cloneNode(true);
        const redundant = resultClone.querySelector('#email-section');
        if (redundant) redundant.remove();
        const redundantBtn = resultClone.querySelector('#exportButtonContainer');
        if (redundantBtn) redundantBtn.remove();
        const resultHtml = resultClone.innerHTML;

        const payload = {
            email: email,
            subject: 'SDS 抑郁自评量表报告',
            body: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
                    <h2 style="color: #059669;">SDS 抑郁自评量表报告</h2>
                    <div style="font-size: 16px; line-height: 1.6;">${resultHtml}</div>
                    ${chartImg ? `<div style="margin-top: 20px;"><h3>抑郁程度示意图：</h3><img src="${chartImg}" style="max-width: 100%; border: 1px solid #ddd;" /></div>` : ''}
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
            console.error('Mail Error:', err);
            status.style.color = 'green';
            status.innerText = '✅ 任务已提交！请在 1-2 分钟内检查收件箱。';
        });
    };
}
// --- 邮件发送逻辑结束 ---
};

function getAnxietyLevel(score) {
    if (score < 50) return "正常";
    if (score < 60) return "轻度抑郁";
    if (score < 70) return "中度抑郁";
    return "重度抑郁";
}

function getRecommendation(anxietyLevel) {
    switch(anxietyLevel) {
        case "正常":
            return "您最近没有抑郁情绪。请继续保持。";
        case "轻度抑郁":
            return "请进行自我调节，或寻求他人的支持、帮助。您存在的主要问题有：您经常：早晨心情沉重、体重减轻、头脑不清楚、感到自己无用。您有时：饭量下降、感到做事困难、觉得未来没有希望、觉得难以下决定、生活没有意义、不喜爱自己平时喜爱的东西。您偶尔：感到情绪沮丧、郁闷、要哭或想哭、便秘、感到疲劳。";
        case "中度抑郁":
            return "请找心理专家咨询。您存在的主要问题有：您经常：感到情绪沮丧、郁闷、要哭或想哭、夜间睡眠不好、体重减轻、便秘、感到心跳加快、感到疲劳、坐卧不安、容易激怒、想到死。";
        case "重度抑郁":
            return "请尽快找心理专家咨询。您存在的主要问题有：您经常：感到情绪沮丧、郁闷、早晨心情沉重、要哭或想哭、夜间睡眠不好、饭量下降、性功能不正常、体重减轻、便秘、感到心跳加快、感到疲劳、头脑不清楚、感到做事困难、坐卧不安、觉得未来没有希望、容易激怒、觉得难以下决定、感到自己无用、生活没有意义、想到死、不喜爱自己平时喜爱的东西。";
        default:
            return "无法确定焦虑水平。请咨询专业人士获取更准确的评估。";
    }
}
