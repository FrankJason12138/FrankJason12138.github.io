document.getElementById("psychologyTest").onsubmit = function(event) {
    event.preventDefault();

    var isAllAnswered = Array.from(document.querySelectorAll('.question-group')).every(group => {
        return Array.from(group.querySelectorAll('input[type="radio"]')).some(input => input.checked);
    });

    if (!isAllAnswered) {
        alert("对不起，请检查漏掉的问题");
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
        <h4>*测评结果只对受测者最近情况进行解释，不具备临床经验；注意：由于量表结果为个人隐私，后台不会存储用户数据，点击导出结果后，将下载的文件重命名为姓名+性别+年龄+班级（例如：张三男12初一二班）</h4>
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

    //window.scrollTo({
    //    top: 0,
    //    behavior: 'smooth'
    //});
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
