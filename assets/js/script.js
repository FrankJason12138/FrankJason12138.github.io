document.getElementById("psychologyTest").onsubmit = function(event) {
    event.preventDefault();

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
};
