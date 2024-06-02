document.getElementById("psychologyTest").onsubmit = function(event) {
    event.preventDefault();  // 阻止表单默认提交

    // 检查所有问题是否已回答
    var isAllAnswered = Array.from(document.querySelectorAll('.question-group')).every(group => {
        return Array.from(group.querySelectorAll('input[type="radio"]')).some(input => input.checked);
    });

    // 如果有未回答的问题,以弹窗形式显示警告
    if (!isAllAnswered) {
        alert("对不起,请检查漏掉的问题");
        return;  // 退出函数
    }

    // 计算量表总分
    var totalScore = Array.from(document.querySelectorAll('input[type="radio"]:checked')).reduce((sum, input) => {
        return sum + parseInt(input.value);
    }, 0);

    // 计算标准分
    var standardScore = Math.round(totalScore * 1.25);

    // 显示总分和标准分
    var resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.innerHTML = "<h3>总分： " + totalScore + " ，标准分: " + standardScore + "</h3>";
    resultDisplay.style.textAlign = "center";  // 添加居中样式

 
// 绘制滑动条
var canvas = document.getElementById('myRadarChart');
var ctx = canvas.getContext('2d');
var animationDuration = 2000;  // 动画持续时间 
var startTime;

// 外框属性
var outerRadius = 30;
var outerHeight = 50;
var outerWidth = canvas.width - outerRadius * 2;

// 内部滑块属性 
var innerRadius = 20;
var innerHeight = 30;

function draw(progress) {
    var value = progress * standardScore;
    var valueWidth = outerWidth * (value / 100);

    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制外框
    ctx.fillStyle = '#e0e0e0';
    ctx.fillRect(outerRadius, outerHeight, outerWidth, innerHeight);
    
    // 绘制刻度线
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    for (var i = 1; i < 10; i++) {
        var x = outerRadius + outerWidth * (i / 10);
        ctx.beginPath();
        ctx.moveTo(x, outerHeight);
        ctx.lineTo(x, outerHeight + 10);
        ctx.stroke();
    }

    // 绘制内部滑块
    ctx.fillStyle = 'green';
    if (value >= 50 && value < 60) ctx.fillStyle = 'yellow'; // 轻度焦虑
    if (value >= 60 && value < 70) ctx.fillStyle = 'orange'; // 中度焦虑
    if (value >= 70) ctx.fillStyle = 'red'; // 重度焦虑
    ctx.fillRect(outerRadius, outerHeight, valueWidth, innerHeight);

    // 绘制倒三角标记
    var markerX = outerRadius + valueWidth;
    var markerY = outerHeight - 15;
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(markerX, markerY);
    ctx.lineTo(markerX - 7, markerY - 7);
    ctx.lineTo(markerX + 7, markerY - 7);
    ctx.fill();
    ctx.fillText('您在这', markerX - 20, markerY - 15);

    // 绘制焦虑程度标签  
    ctx.fillStyle = 'black';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('轻度焦虑', outerRadius + outerWidth * 0.15, outerHeight + 40);
    ctx.fillText('中度焦虑', outerRadius + outerWidth * 0.50, outerHeight + 40);     
    ctx.fillText('重度焦虑', outerRadius + outerWidth * 0.85, outerHeight + 40);
}




    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        var elapsed = timestamp - startTime;
        var progress = Math.min(elapsed / animationDuration, 1);
        draw(progress);
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    // 开始动画 
    requestAnimationFrame(animate);

    // 显示图表容器
    var canvasContainer = document.getElementById('canvasContainer');
    canvasContainer.style.display = 'flex';
    
    // 使用滑动效果显示图表
    setTimeout(function() {
        canvasContainer.style.opacity = 1;  
    }, 100);

    window.scrollTo(0, 0);
};