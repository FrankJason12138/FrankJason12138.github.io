document.getElementById("psychologyTest").onsubmit = function(event) {
    // 首先检查是否所有问题都已回答
    var questions = document.querySelectorAll('.question-group');
    var isAllAnswered = true;

    questions.forEach(function(question) {
        var inputs = question.querySelectorAll('input[type="radio"]');
        var isChecked = Array.from(inputs).some(input => input.checked);

        if (!isChecked) {
            isAllAnswered = false;
        }
    });

    // 如果有问题未回答，显示警告并阻止表单提交
    if (!isAllAnswered) {
        event.preventDefault();
        alert('对不起，请检查漏掉的题目');
        return; // 阻止继续执行后面的代码
    }

    // 如果所有问题都已回答，计算分数
    var score = 0;
    var form = document.getElementById("psychologyTest");
    var answers = form.elements;

    for(var i = 0; i < answers.length; i++) {
        if(answers[i].checked) {
            score += parseInt(answers[i].value, 10);
        }
    }

    var result = "您的得分是: " + score;
    document.getElementById("result").innerText = result;

    // 阻止表单的默认提交行为
    event.preventDefault();
};

