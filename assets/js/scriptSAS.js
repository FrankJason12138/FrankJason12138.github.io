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
    var outerCornerRadius = 15;  // 外框圆角半径

    // 内部滑块属性 
    var innerRadius = 20;
    var innerHeight = 30;
    var innerCornerRadius = 15;  // 内框圆角半径

    function draw(progress) {
        var value = progress * standardScore;
        var valueWidth = outerWidth * (value / 100);

        // 清空画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 绘制外框
        ctx.fillStyle = '#e0e0e0';
        ctx.beginPath();
        ctx.roundRect(outerRadius, outerHeight, outerWidth, innerHeight, outerCornerRadius);
        ctx.fill();

        

        // 绘制内部滑块
        ctx.fillStyle = 'green';
        if (value >= 50 && value < 60) ctx.fillStyle = 'yellow'; // 轻度焦虑
        if (value >= 60 && value < 70) ctx.fillStyle = 'orange'; // 中度焦虑
        if (value >= 70) ctx.fillStyle = 'red'; // 重度焦虑
        ctx.beginPath();
        ctx.roundRect(outerRadius, outerHeight, valueWidth, innerHeight, innerCornerRadius);
        ctx.fill();

        // 绘制倒三角标记
        var markerX = outerRadius + valueWidth;
        var markerY = outerHeight - 15;
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.moveTo(markerX, markerY);
        ctx.lineTo(markerX - 7, markerY - 7);
        ctx.lineTo(markerX + 7, markerY - 7);
        ctx.fill();
        
        // 设置较小的字体大小，并精确定位文字
        ctx.font = "13px Arial";
        ctx.textAlign = 'center';
        ctx.fillText('您在这', markerX, markerY - 10);

        // 绘制焦虑程度标签  
        ctx.font = "13px Arial";  // 设置字体大小
        ctx.fillText('轻度焦虑', outerRadius + 50 * outerWidth / 100, outerHeight + 40);
        ctx.fillText('中度焦虑', outerRadius + 60 * outerWidth / 100, outerHeight + 40);     
        ctx.fillText('重度焦虑', outerRadius + 70 * outerWidth / 100, outerHeight + 40);
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
    resultDisplay.innerHTML += "<h4>*测评结果只对受测者最近情况进行解释，不具备临床经验；如需获得测评报告请<br><a href='https://www.xiaohongshu.com/goods-detail/665d476135bf780001f7eb82?xhsshare=CopyLink&appuid=643b847b000000000e01d766&apptime=1717395265&share_id=cb84ff1179ed44d894049001de2065fa' target='_blank' style='color: blue;'>[将结果截图后点击跳转]</a><br>海外用户请点击下方的PayPal支付按钮<br>注意：由于量表结果为个人隐私，后台不会存储用户数据，截图保存结果后跳转，心理咨询师会与您沟通后生成心理测评报告并给予你咨询建议哦^_^</h4>";
    resultDisplay.style.textAlign = "center";


};

// 添加 roundRect 方法到 CanvasRenderingContext2D 原型
CanvasRenderingContext2D.prototype.roundRect = function (x, y, width, height, radius) {
    this.beginPath();
    this.moveTo(x + radius, y);
    this.arcTo(x + width, y, x + width, y + height, radius);
    this.arcTo(x + width, y + height, x, y + height, radius);
    this.arcTo(x, y + height, x, y, radius);
    this.arcTo(x, y, x + width, y, radius);
    this.closePath();
    return this;
};
   