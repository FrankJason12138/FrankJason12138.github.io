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
        <p>焦虑程度: ${anxietyLevel}</p>
        <p>建议: ${recommendation}</p>
        <h4>*测评结果只对受测者最近情况进行解释，不具备临床经验；由于量表结果为个人隐私，后台不会存储用户数据，点击导出结果后，将下载的文件重命名为姓名+性别+年龄+班级（例如：张三男12初一二班）</h4>
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
        ['正常', '轻度焦虑', '中度焦虑', '重度焦虑'].forEach((label, index) => {
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
          <title>SAS测评结果</title>
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
            <img src="${imageDataUrl}" alt="SAS测评图表">
          </div>
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

// 将按钮添加到容器中并插入到结果显示区域的最前面
exportButtonContainer.appendChild(exportButton);
resultDisplay.insertBefore(exportButtonContainer, resultDisplay.firstChild);

// 滚动到导出按钮位置
exportButtonContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

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