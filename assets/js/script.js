document.getElementById("psychologyTest").onsubmit = function(event) {
    event.preventDefault();  // 阻止表单默认提交

    // 检查所有问题是否已回答
    var isAllAnswered = Array.from(document.querySelectorAll('.question-group')).every(group => {
        return Array.from(group.querySelectorAll('input[type="radio"]')).some(input => input.checked);
    });

    // 如果有未回答的问题，以弹窗形式显示警告
    if (!isAllAnswered) {
        alert("请回答所有问题");
        return;  // 退出函数
    }

    // 计算分数
    var score = Array.from(document.getElementById("psychologyTest").elements).reduce((total, element) => {
        if (element.checked && element.type === "radio") {
            total += parseInt(element.value, 10);
        }
        return total;
    }, 0);

    // 显示得分结果
    var resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.innerHTML = "<h1>您的得分是: " + score + "</h1>";
    resultDisplay.style.textAlign = "center";  // 添加居中样式
};
