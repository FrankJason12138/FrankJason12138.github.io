document.getElementById("psychologyTest").onsubmit = function(event) {
    event.preventDefault();  // 阻止表单默认提交

    // 检查所有问题是否已回答
    var isAllAnswered = Array.from(document.querySelectorAll('.question-group')).every(group => {
        return Array.from(group.querySelectorAll('input[type="radio"]')).some(input => input.checked);
    });

    // 如果有未回答的问题，以弹窗形式显示警告
    if (!isAllAnswered) {
        alert("对不起，请检查漏掉的问题");
        return;  // 退出函数
    }



    // 因素A的得分计算
var selectedScoreForFactorA = 0;
var selectedQuestionIndicesForFactorA = [3, 26, 27, 51, 52, 76, 101, 126, 151, 176]; // 因素A的题目编号

selectedQuestionIndicesForFactorA.forEach(index => {
    var element = document.querySelector(`input[name="question${index}"]:checked`);
    if (element) {
        selectedScoreForFactorA += parseInt(element.value, 10);  // 如果选中了一个选项，加上它的分数
    } else {
        selectedScoreForFactorA += 0;  // 如果没有选中任何选项，加0分
    }
});

console.log("Score for Factor A:", selectedScoreForFactorA);  // 打印因素A的得分


    // 因素B的得分计算
var selectedScoreForFactorB = 0;
var selectedQuestionIndicesForFactorB = [28, 53, 54, 77, 78, 102, 103, 127, 128, 152, 153, 177, 178]; // 因素B的题目编号

selectedQuestionIndicesForFactorB.forEach(index => {
    var element = document.querySelector(`input[name="question${index}"]:checked`);
    if (element) {
        selectedScoreForFactorB += parseInt(element.value, 10);  // 如果选中了一个选项，加上它的分数
    } else {
        selectedScoreForFactorB += 0;  // 如果没有选中任何选项，加0分
    }
});

console.log("Score for Factor B:", selectedScoreForFactorB);  // 打印因素B的得分


    // 因素C的得分计算
    var selectedScoreForFactorC = 0;
    var selectedQuestionIndicesForFactorC = [4, 5, 29, 30, 55, 79, 80, 104, 105, 129, 130, 154, 179]; // 因素C的题目
    selectedQuestionIndicesForFactorC.forEach(index => {
        var element = document.querySelector(`input[name="question${index}"]:checked`);
        if (element) {
            selectedScoreForFactorC += parseInt(element.value, 10);
        } else {
            selectedScoreForFactorC += 0;  // 如果没有选中任何选项，加0分
        }
    });
    console.log("Score for Factor C: " + selectedScoreForFactorC); // 添加的调试语句

    // 因素E的得分计算
    var selectedScoreForFactorE = 0;
    var selectedQuestionIndicesForFactorE = [6, 7, 31, 32, 56, 57, 81, 106, 131, 155, 156, 180, 181]; // 因素E的题目
    selectedQuestionIndicesForFactorE.forEach(index => {
        var element = document.querySelector(`input[name="question${index}"]:checked`);
        if (element) {
            selectedScoreForFactorE += parseInt(element.value, 10);
        } else {
            selectedScoreForFactorE += 0;  // 如果没有选中任何选项，加0分
        }
    });
    console.log("Score for Factor E: " + selectedScoreForFactorE); // 添加的调试语句

    // 因素F的得分计算
    var selectedScoreForFactorF = 0;
    var selectedQuestionIndicesForFactorF = [8, 33, 58, 82, 83, 107, 108, 132, 133, 157, 158, 182, 183]; // 因素F的题目
    selectedQuestionIndicesForFactorF.forEach(index => {
        var element = document.querySelector(`input[name="question${index}"]:checked`);
        if (element) {
            selectedScoreForFactorF += parseInt(element.value, 10);
        } else {
            selectedScoreForFactorF += 0;  // 如果没有选中任何选项，加0分
        }
    });
    console.log("Score for Factor F: " + selectedScoreForFactorF); // 添加的调试语句

    // 因素G的得分计算
    var selectedScoreForFactorG = 0;
    var selectedQuestionIndicesForFactorG = [9, 34, 59, 84, 109, 134, 159, 160, 184, 185]; // 因素G的题目
    selectedQuestionIndicesForFactorG.forEach(index => {
        var element = document.querySelector(`input[name="question${index}"]:checked`);
        if (element) {
            selectedScoreForFactorG += parseInt(element.value, 10);
        } else {
            selectedScoreForFactorG += 0;  // 如果没有选中任何选项，加0分
        }
    });
    console.log("Score for Factor G: " + selectedScoreForFactorG); // 添加的调试语句

    // 因素H的得分计算
    var selectedScoreForFactorH = 0;
    var selectedQuestionIndicesForFactorH = [10, 35, 36, 60, 61, 85, 86, 110, 111, 135, 136, 161, 186]; // 因素H的题目
    selectedQuestionIndicesForFactorH.forEach(index => {
        var element = document.querySelector(`input[name="question${index}"]:checked`);
        if (element) {
            selectedScoreForFactorH += parseInt(element.value, 10);
        } else {
            selectedScoreForFactorH += 0;  // 如果没有选中任何选项，加0分
        }
    });
    console.log("Score for Factor H: " + selectedScoreForFactorH); // 添加的调试语句

    // 因素I的得分计算
    var selectedScoreForFactorI = 0;
    var selectedQuestionIndicesForFactorI = [11, 12, 37, 62, 87, 112, 137, 138, 162, 163]; // 因素I的题目
    selectedQuestionIndicesForFactorI.forEach(index => {
        var element = document.querySelector(`input[name="question${index}"]:checked`);
        if (element) {
            selectedScoreForFactorI += parseInt(element.value, 10);
        } else {
            selectedScoreForFactorI += 0;  // 如果没有选中任何选项，加0分
        }
    });
    console.log("Score for Factor I: " + selectedScoreForFactorI); // 添加的调试语句

    // 因素L的得分计算
    var selectedScoreForFactorL = 0;
    var selectedQuestionIndicesForFactorL = [13, 38, 63, 64, 88, 89, 113, 114, 139, 164]; // 因素L的题目
    selectedQuestionIndicesForFactorL.forEach(index => {
        var element = document.querySelector(`input[name="question${index}"]:checked`);
        if (element) {
            selectedScoreForFactorL += parseInt(element.value, 10);
        } else {
            selectedScoreForFactorL += 0;  // 如果没有选中任何选项，加0分
        }
    });
    console.log("Score for Factor L: " + selectedScoreForFactorL); // 添加的调试语句

    // 因素M的得分计算
    var selectedScoreForFactorM = 0;
    var selectedQuestionIndicesForFactorM = [14, 15, 39, 40, 65, 90, 91, 115, 116, 140, 141, 165, 166]; // 因素M的题目
    selectedQuestionIndicesForFactorM.forEach(index => {
        var element = document.querySelector(`input[name="question${index}"]:checked`);
        if (element) {
            selectedScoreForFactorM += parseInt(element.value, 10);
        } else {
            selectedScoreForFactorM += 0;  // 如果没有选中任何选项，加0分
        }
    });
    console.log("Score for Factor M: " + selectedScoreForFactorM); // 添加的调试语句

    // 因素N的得分计算
    var selectedScoreForFactorN = 0;
    var selectedQuestionIndicesForFactorN = [16, 17, 41, 42, 66, 67, 92, 117, 142, 167]; // 因素N的题目
    selectedQuestionIndicesForFactorN.forEach(index => {
        var element = document.querySelector(`input[name="question${index}"]:checked`);
        if (element) {
            selectedScoreForFactorN += parseInt(element.value, 10);
        } else {
            selectedScoreForFactorN += 0;  // 如果没有选中任何选项，加0分
        }
    });
    console.log("Score for Factor N: " + selectedScoreForFactorN); // 添加的调试语句

    // 因素O的得分计算
    var selectedScoreForFactorO = 0;
    var selectedQuestionIndicesForFactorO = [18, 19, 43, 44, 68, 69, 93, 94, 118, 119, 143, 144, 168]; // 因素O的题目
    selectedQuestionIndicesForFactorO.forEach(index => {
        var element = document.querySelector(`input[name="question${index}"]:checked`);
        if (element) {
            selectedScoreForFactorO+= parseInt(element.value, 10);
        } else {
            selectedScoreForFactorO += 0;  // 如果没有选中任何选项，加0分
        }
    });
    console.log("Score for Factor O: " + selectedScoreForFactorO); // 添加的调试语句

    // 因素Q1的得分计算
    var selectedScoreForFactorQ1 = 0;
    var selectedQuestionIndicesForFactoQ1 = [20, 21, 45, 46, 70, 95, 120, 145, 169, 170]; // 因素Q1的题目
    selectedQuestionIndicesForFactoQ1.forEach(index => {
        var element = document.querySelector(`input[name="question${index}"]:checked`);
        if (element) {
            selectedScoreForFactorQ1+= parseInt(element.value, 10);
        } else {
            selectedScoreForFactorQ1 += 0;  // 如果没有选中任何选项，加0分
        }
    });
    console.log("Score for Factor Q1: " + selectedScoreForFactorQ1); // 添加的调试语句

    // 因素Q2的得分计算
    var selectedScoreForFactorQ2 = 0;
    var selectedQuestionIndicesForFactoQ2 = [22, 47, 71, 72, 96, 97, 121, 122, 146, 171]; // 因素Q2的题目
    selectedQuestionIndicesForFactoQ2.forEach(index => {
        var element = document.querySelector(`input[name="question${index}"]:checked`);
        if (element) {
            selectedScoreForFactorQ2+= parseInt(element.value, 10);
        } else {
            selectedScoreForFactorQ2 += 0;  // 如果没有选中任何选项，加0分
        }
    });
    console.log("Score for Factor Q2: " + selectedScoreForFactorQ2); // 添加的调试语句

    // 因素Q3的得分计算
    var selectedScoreForFactorQ3 = 0;
    var selectedQuestionIndicesForFactoQ3 = [23, 24, 48, 73, 98, 123, 147, 148, 172, 173]; // 因素Q3的题目
    selectedQuestionIndicesForFactoQ3.forEach(index => {
        var element = document.querySelector(`input[name="question${index}"]:checked`);
        if (element) {
            selectedScoreForFactorQ3+= parseInt(element.value, 10);
        } else {
            selectedScoreForFactorQ3 += 0;  // 如果没有选中任何选项，加0分
        }
    });
    console.log("Score for Factor Q3: " + selectedScoreForFactorQ3); // 添加的调试语句

    // 因素Q4的得分计算
    var selectedScoreForFactorQ4 = 0;
    var selectedQuestionIndicesForFactoQ4 = [25, 49, 50, 74, 75, 99, 100, 124, 125, 149, 150, 174, 175]; // 因素Q4的题目
    selectedQuestionIndicesForFactoQ4.forEach(index => {
        var element = document.querySelector(`input[name="question${index}"]:checked`);
        if (element) {
            selectedScoreForFactorQ4+= parseInt(element.value, 10);
        } else {
            selectedScoreForFactorQ4 += 0;  // 如果没有选中任何选项，加0分
        }
    });
    console.log("Score for Factor Q4: " + selectedScoreForFactorQ4); // 添加的调试语句

   

    // 映射原始分数到对应得分
    function mapScoreForFactorA(score) {
        if (score <= 1) return 1;
        if (score <= 3) return 2;
        if (score <= 5) return 3;
        if (score === 6) return 4;
        if (score <= 8) return 5;
        if (score <= 11) return 6;
        if (score <= 13) return 7;
        if (score === 14) return 8;
        if (score <= 16) return 9;
        if (score >= 17) return 10;
    }
    function mapScoreForFactorB(score) {
        if (score <= 3) return 1;
        if (score === 4) return 2;
        if (score === 5) return 3;
        if (score === 6) return 4;
        if (score === 7) return 5;
        if (score === 8) return 6;
        if (score === 9) return 7;
        if (score === 10) return 8;
        if (score === 11) return 9;
        if (score >= 12) return 10;
    }
    function mapScoreForFactorC(score) {
        if (score <= 5) return 1;
        if (score <= 7) return 2;
        if (score <= 9) return 3;
        if (score <= 11) return 4;
        if (score <= 13) return 5;
        if (score <= 16) return 6;
        if (score <= 18) return 7;
        if (score <= 20) return 8;
        if (score <= 22) return 9;
        if (score >= 23) return 10;
    }
    function mapScoreForFactorE(score) {
        if (score <= 2) return 1;
        if (score <= 4) return 2;
        if (score === 5) return 3;
        if (score <= 7) return 4;
        if (score <= 9) return 5;
        if (score <= 12) return 6;
        if (score <= 14) return 7;
        if (score <= 16) return 8;
        if (score <= 18) return 9;
        if (score >= 19) return 10;
    }
    function mapScoreForFactorF(score) {
        if (score <= 3) return 1;
        if (score === 4) return 2;
        if (score <= 6) return 3;
        if (score === 7) return 4;
        if (score <= 9) return 5;
        if (score <= 12) return 6;
        if (score <= 14) return 7;
        if (score <= 16) return 8;
        if (score <= 18) return 9;
        if (score >= 19) return 10;
    }
    function mapScoreForFactorG(score) {
        if (score <= 5) return 1;
        if (score <= 7) return 2;
        if (score <= 9) return 3;
        if (score === 10) return 4;
        if (score <= 12) return 5;
        if (score <= 14) return 6;
        if (score <= 16) return 7;
        if (score === 17) return 8;
        if (score === 18) return 9;
        if (score >= 19) return 10;
    }
    function mapScoreForFactorH(score) {
        if (score <= 1) return 1;
        if (score === 2) return 2;
        if (score === 3) return 3;
        if (score <= 6) return 4;
        if (score <= 8) return 5;
        if (score <= 11) return 6;
        if (score <= 14) return 7;
        if (score <= 16) return 8;
        if (score <= 19) return 9;
        if (score >= 20) return 10;
    }
    function mapScoreForFactorI(score) {
        if (score <= 5) return 1;
        if (score === 6) return 2;
        if (score <= 8) return 3;
        if (score === 9) return 4;
        if (score <= 11) return 5;
        if (score <= 13) return 6;
        if (score === 14) return 7;
        if (score <= 16) return 8;
        if (score === 17) return 9;
        if (score >= 18) return 10;
    }
    function mapScoreForFactorL(score) {
        if (score <= 3) return 1;
        if (score <= 5) return 2;
        if (score === 6) return 3;
        if (score <= 8) return 4;
        if (score <= 10) return 5;
        if (score <= 12) return 6;
        if (score === 13) return 7;
        if (score <= 15) return 8;
        if (score === 16) return 9;
        if (score >= 17) return 10;
    }
    function mapScoreForFactorM(score) {
        if (score <= 5) return 1;
        if (score <= 7) return 2;
        if (score <= 9) return 3;
        if (score <= 11) return 4;
        if (score <= 13) return 5;
        if (score <= 15) return 6;
        if (score <= 17) return 7;
        if (score <= 19) return 8;
        if (score === 20) return 9;
        if (score >= 21) return 10;
    }
    function mapScoreForFactorN(score) {
        if (score <= 2) return 1;
        if (score === 3) return 2;
        if (score === 4) return 3;
        if (score <= 6) return 4;
        if (score <= 8) return 5;
        if (score <= 10) return 6;
        if (score === 11) return 7;
        if (score <= 13) return 8;
        if (score === 14) return 9;
        if (score >= 15) return 10;
    }
    function mapScoreForFactorO(score) {
        if (score <= 2) return 1;
        if (score <= 4) return 2;
        if (score <= 6) return 3;
        if (score <= 8) return 4;
        if (score <= 10) return 5;
        if (score <= 12) return 6;
        if (score <= 14) return 7;
        if (score <= 16) return 8;
        if (score === 18) return 9;
        if (score >= 19) return 10;
    }
    function mapScoreForFactorQ1(score) {
        if (score <= 4) return 1;
        if (score === 5) return 2;
        if (score <= 7) return 3;
        if (score === 8) return 4;
        if (score <= 10) return 5;
        if (score <= 12) return 6;
        if (score === 13) return 7;
        if (score === 14) return 8;
        if (score === 15) return 9;
        if (score >= 16) return 10;
    }
    function mapScoreForFactorQ2(score) {
        if (score <= 5) return 1;
        if (score <= 7) return 2;
        if (score === 8) return 3;
        if (score <= 10) return 4;
        if (score <= 12) return 5;
        if (score <= 14) return 6;
        if (score === 15) return 7;
        if (score <= 17) return 8;
        if (score === 18) return 9;
        if (score >= 19) return 10;
    }
    function mapScoreForFactorQ3(score) {
        if (score <= 4) return 1;
        if (score <= 6) return 2;
        if (score <= 8) return 3;
        if (score <= 10) return 4;
        if (score <= 12) return 5;
        if (score <= 14) return 6;
        if (score === 15) return 7;
        if (score <= 17) return 8;
        if (score === 18) return 9;
        if (score >= 19) return 10;
    }
    function mapScoreForFactorQ4(score) {
        if (score <= 2) return 1;
        if (score <= 4) return 2;
        if (score <= 6) return 3;
        if (score <= 8) return 4;
        if (score <= 11) return 5;
        if (score <= 14) return 6;
        if (score <= 16) return 7;
        if (score <= 19) return 8;
        if (score <= 21) return 9;
        if (score >= 22) return 10;
    }
    

    // 计算对应得分
    var scoreA = mapScoreForFactorA(selectedScoreForFactorA);
    var scoreB = mapScoreForFactorB(selectedScoreForFactorB);
    var scoreC = mapScoreForFactorC(selectedScoreForFactorC);
    var scoreE = mapScoreForFactorE(selectedScoreForFactorE);
    var scoreF = mapScoreForFactorF(selectedScoreForFactorF);
    var scoreG = mapScoreForFactorG(selectedScoreForFactorG);
    var scoreH = mapScoreForFactorH(selectedScoreForFactorH);
    var scoreI = mapScoreForFactorI(selectedScoreForFactorI);
    var scoreL = mapScoreForFactorL(selectedScoreForFactorL);
    var scoreM = mapScoreForFactorM(selectedScoreForFactorM);
    var scoreN = mapScoreForFactorN(selectedScoreForFactorN);
    var scoreO = mapScoreForFactorO(selectedScoreForFactorO);
    var scoreQ1 = mapScoreForFactorQ1(selectedScoreForFactorQ1);
    var scoreQ2 = mapScoreForFactorQ2(selectedScoreForFactorQ2);
    var scoreQ3 = mapScoreForFactorQ3(selectedScoreForFactorQ3);
    var scoreQ4 = mapScoreForFactorQ4(selectedScoreForFactorQ4);
    var scoreX1 = ((38 + 2 * scoreL + 3 * scoreO + 4 * scoreQ4) - (2 * scoreC + 2 * scoreH + 2 * scoreQ2)) / 10;
    var scoreX2 = ((2 * scoreA + 3 * scoreE + 4 * scoreF + 5 * scoreH) - (2 * scoreQ2 + 11)) / 10;
    var scoreX3 = ((77 + 2 * scoreC + 2 * scoreE + 2 * scoreF + 2 * scoreN) - (4 * scoreA + 6 * scoreI + 2 * scoreM)) / 10;
    var scoreX4 = ((4 * scoreE + 3 * scoreM + 4 * scoreQ1 + 4 * scoreQ2) - (3 * scoreA + 2 * scoreG)) / 10;
    var scoreY1 = scoreC + scoreF + (11 - scoreO) + (11 - scoreQ4);
    var scoreY2 = scoreQ3 * 2 + scoreG * 2 + scoreC * 2 + scoreE + scoreN + scoreQ2 + scoreQ1;
    var scoreY3 = (11 - scoreA) * 2 + scoreB * 2 + scoreE + (11 - scoreF) * 2 + scoreH + scoreI * 2 + scoreM + (11 - scoreN) + scoreQ1 + scoreQ2 * 2;
    
    function mapScoreForFactorY3(score) {
        if (score <= 62) return 1;
        if (score <= 67) return 2;
        if (score <= 72) return 3;
        if (score <= 77) return 4;
        if (score <= 82) return 5;
        if (score <= 87) return 6;
        if (score <= 92) return 7;
        if (score <= 97) return 8;
        if (score <= 102) return 9;
        if (score >= 103) return 10;
    }
    var scoreY3 = mapScoreForFactorY3(scoreY3);
    var scoreY4 = scoreB + scoreG + scoreQ3 + (11 - scoreF);


    var score = Array.from(document.getElementById("psychologyTest").elements).reduce((total, element) => {
        if (element.checked && element.type === "radio") {
            total += parseInt(element.value, 10);
        }
        return total;
    }, 0);
    var resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.innerHTML = ""; 

    
    // 计算常模分数
    var averageA = 9.06; // 常模平均分数
    var standardDeviationA = 3.4; // 常模标准差

    // 判断得分与常模的关系
    var resultTextA = "";
    var differenceA = selectedScoreForFactorA - averageA;

    if (differenceA < -1.5 * standardDeviationA) {
        resultTextA = "您在此项上得分较低，一般表现为：缄默、冷漠、苛求、孤独，生活和学习中，您一般会表现为执拗、对人冷漠、落落寡合，吹毛求疵，宁愿独自工作，对事不对人，不轻易放弃已见，为人工作的标准常很高，严谨而不苟且。";
    } else if (differenceA >  1.5 * standardDeviationA) {
        resultTextA = "您在此项上得分较高，一般表现为：开朗、热情、随和、乐群，您在生活和学习中通常和蔼可亲，待人热情，容易与人相处，合作与适应能力特别强；喜欢和别人共同工作，愿意参加或组织各种社团活动，不斤斤计较，容易接受别人的批评；萍水相逢时也可以一见如故。";
    } else {
        resultTextA = "您的得分在正常范围内，在此项上和普通人一样。";
    }
    // 显示得分结果和常模关系
    var resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.innerHTML += "<h3>因素A——热情性  因素解释:描述待人是否热情、是否有愿意与人打交道的倾向性。得分: " + selectedScoreForFactorA + " ，标准分: " + scoreA +""+"标准分范围(1~10)</h3>"+
        "<p>得分解释：" + resultTextA + "</p>";
    resultDisplay.style.textAlign = "center";  // 添加居中样式

    // 计算常模分数
    var averageB = 7.65; // 常模平均分数
    var standardDeviationB = 1.6; // 常模标准差

    // 判断得分与常模的关系
    var resultTextB = "";
    var differenceB = selectedScoreForFactorB - averageB;

    if (differenceB <  -1.5 * standardDeviationB) {
        resultTextB = "您在此项上得分较低，一般表现为：思想迟钝、常识浅薄、抽象思维能力弱，您可能更倾向于在学习和领悟中缓慢、迟钝，对事物多采用具体的和刻板的理解；在决策之前会进行非常仔细的思考。";
    } else if (differenceB >  1.5 * standardDeviationB) {
        resultTextB = "您在此项上得分较高，一般表现为：聪明、富有才能、善于抽象思维，您在生活和学习中，能迅速领悟各种观念，学习能力强，思维敏捷并且正确，言行前，不总是深思熟虑。";
    } else {
        resultTextB = "您的得分在正常范围内，在此项上和普通人一样。";
    }
    // 显示得分结果和常模关系
    var resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.innerHTML += "<h3>因素B——聪慧性  因素解释:描述抽象思维能力及聪明程度。得分: " + selectedScoreForFactorB + " ，标准分: " + scoreB +""+"标准分范围(1~10)</h3>"+
        "<p>得分解释：" + resultTextB + "</p>";
    resultDisplay.style.textAlign = "center";  // 添加居中样式
    // 计算常模分数
    var averageC = 14.08; // 常模平均分数
    var standardDeviationC = 4.11; // 常模标准差

    // 判断得分与常模的关系
var resultTextC = "";
var differenceC = selectedScoreForFactorC - averageC;

if (differenceC <  -1.5 * standardDeviationC) {
    resultTextC = "您在此项上得分较低，可能表现为情绪激动，易生烦恼、心神动摇不定，您可能不容易应付生活上所遇到的阻挠和挫折，容易受环境支配而心神动摇不定，不能面对现实，常常会急躁不安，身心疲乏，甚至出现失眠、恶梦较多、容易恐惧等。";
} else if (differenceC >  1.5 * standardDeviationC) {
    resultTextC = "您在此项上得分较高，有这些词来描述你：情绪稳定而成熟，能面对现实，你通常能以沉着的态度应付现实中各种问题，自己感到能够控制生活中的现实需要；行动充满魄力；能有不断振作的勇气，有维护团结的精神；有时也可能由于不能彻底解决许多生活难题而不得不强行自我宽解。";
} else {
    resultTextC = "您的得分在正常范围内，在此项上和普通人一样。";
}

// 显示得分结果和常模关系
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>因素C——稳定性  因素解释:描述在外界环境变化时情绪和情感稳定与否，能否面对现实，并应对日常困难。得分: " + selectedScoreForFactorC + " ，标准分: " + scoreC +""+"标准分范围(1~10)</h3>" + "<p>得分解释：" + resultTextC + "</p>";
resultDisplay.style.textAlign = "center";
// 计算常模分数
var averageE = 9.82; // 常模平均分数
var standardDeviationE = 3.5; // 常模标准差

// 判断得分与常模的关系
var resultTextE = "";
var differenceE = selectedScoreForFactorE - averageE;

if (differenceE <  -1.5 * standardDeviationE) {
    resultTextE = "您在此项上得分较低，您为人一般谦虚、顺从、通融、恭顺，您与人相处时通常行为温顺，迎合别人的意图；不经常表达自己对事物的看法和观点，并倾向于让他人处于领导地位。";
} else if (differenceE >  1.5 * standardDeviationE) {
    resultTextE = "您在此项上得分较高，一般表现为好强固执，独立积极，您通常自高自大，自以为是，可能非常武断，时常喜欢影响或驾驭其他的人，对抗有权势者。";
} else {
    resultTextE = "您的得分在正常范围内，在此项上和普通人一样。";
}

// 显示得分结果和常模关系
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>因素E——恃强性  因素解释:描述是否愿意支配和影响他人，是否愿意领导他人。得分: " + selectedScoreForFactorE + " ，标准分: " + scoreE +""+"标准分范围(1~10)</h3>" + "<p>得分解释：" + resultTextE + "</p>";
resultDisplay.style.textAlign = "center";
// 计算常模分数
var averageF = 10.69; // 常模平均分数
var standardDeviationF = 3.84; // 常模标准差

// 判断得分与常模的关系
var resultTextF = "";
var differenceF = selectedScoreForFactorF - averageF;

if (differenceF <  -1.5 * standardDeviationF) {
    resultTextF = "您在此项上得分较低，严肃、谨慎、冷静、寡言更能描述你，你通常行动拘谨，内省而不轻易发言，较消极、阴郁；喜欢全面地思考问题，有时可能过分深思熟虑；在工作上，常常是一位认真而可靠的工作人员；爱独处，甚至自我压抑 。";
} else if (differenceF >  1.5 * standardDeviationF) {
    resultTextF = "您在此项上得分较高，冲动、活跃、轻松、随遇而安是你的座右铭，活泼、愉快、健谈、生气勃勃，你对人对事热心而富有感情，经常被选为领导，但有时也可能过分冲动，以致行为变化莫测。";
} else {
    resultTextF = "您的得分在正常范围内，在此项上和普通人一样。";
}

// 显示得分结果和常模关系
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>因素F——兴奋性  因素解释:描述情绪的兴奋和活跃程度，寻找娱乐的倾向以及愿意表达的自动自发性水平。得分: " + selectedScoreForFactorF + " 标准分: " + scoreF +""+"标准分范围(1~10)</h3>" + "<p>得分表述：" + resultTextF + "</p>";
resultDisplay.style.textAlign = "center";
// 计算常模分数
var averageG = 8.20; // 常模平均分数
var standardDeviationG = 2.3; // 常模标准差

// 判断得分与常模的关系
var resultTextG = "";
var differenceG = selectedScoreForFactorG - averageG;

if (differenceG <  -1.5 * standardDeviationG) {
    resultTextG = "您在此项上得分较低，从心理学上来说你不审慎，缺乏责任感，轻浮，苟且敷衍，缺乏奉公守法的精神（超我力弱）你在做事时意志容易动摇，缺乏奉公守法的精神。由于不受集体约束，故有可能发生反社会行为。但有时这却使你更健康，因为拒绝受规律约束使你在应激中发生较少躯体不适感。通常缺乏远大的目标和理想，缺乏责任感甚至有时会不择手段地达到某一目的。";
} else if (differenceG >  1.5 * standardDeviationG) {
    resultTextG = "您在此项上得分较高，一般表现为有良心、有恒心、稳重、守法，做事尽职（心理学上认为你超我力强）你性格严峻，有强烈责任心，有计划，善宽容。喜欢勤奋聪明、努力苦干的人，不十分喜欢诙谐有趣的场合，有道德，细心周到善始善终，是非善恶是你的行为指南。这些特点是出自于内心而迫切需求的，并非在表面上体现追求。";
} else {
    resultTextG = "您的得分在正常范围内，在此项上和普通人一样。";
}

// 显示得分结果和常模关系
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>因素G——规范性  因素解释:描述对社会道德规范和准则的接纳与自觉履行程度。得分: " + selectedScoreForFactorG + " ，标准分: " + scoreG +""+"标准分范围(1~10)</h3>" + "<p>得分解释：" + resultTextG + "</p>";
resultDisplay.style.textAlign = "center";
// 计算常模分数
var averageH = 8.76; // 常模平均分数
var standardDeviationH = 4.95; // 常模标准差

// 判断得分与常模的关系
var resultTextH = "";
var differenceH = selectedScoreForFactorH - averageH;

if (differenceH <  -1.5 * standardDeviationH) {
    resultTextH = "您在此项上得分较低，可能表现为胆小、克制、羞怯、怯懦（畏怯）性格上胆小退缩，小心谨慎，喜欢安静，常有自卑感。说话缓慢而口吃，缺乏自信心。拙于发言，更不愿和陌生人交谈；特别对异性的反应出胆小，甚至不感兴趣；凡事采取观望态度；有时由于过份的自我意识而忽视了对社会环境中的重要事物的认识。";
} else if (differenceH >  1.5 * standardDeviationH) {
    resultTextH = "您在此项上得分较高，你好冒险、勇于社交，放任主动（鲁莽）你有很好的社交能力，喜欢探求新事物，主动并敢于情绪反应；不掩饰，不畏缩，有敢作敢为的精神，能经历艰辛而保持毅力；在与异性接触中会给人“脸皮较厚”的印象， 喜欢向异性献殷勤。常粗心大意，忽视细节 。";
} else {
    resultTextH = "您的得分在正常范围内，在此项上和普通人一样。";
}

// 显示得分结果和常模关系
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>因素H——敢为性  因素解释:描述在社会情境中感受轻松的程度。得分: " + selectedScoreForFactorH + " ，标准分: " + scoreH + ""+"标准分范围(1~10)</h3>" + "<p>得分解释：" + resultTextH + "</p>";
resultDisplay.style.textAlign = "center";
// 计算常模分数
var averageI = 11.42; // 常模平均分数
var standardDeviationI = 2.87; // 常模标准差

// 判断得分与常模的关系
var resultTextI = "";
var differenceI = selectedScoreForFactorI - averageI;

if (differenceI <  -1.5 * standardDeviationI) {
    resultTextI = "您在此项上得分较低，可能表现为硬心肠、自持，现实（狠心）你可能更倾于固执任性，注重实际，有时显得冷酷。办事有逻辑性，安于自足，自持其力。常多以客观、坚强、独立的态度处理当前的问题；并不重视文化修养，以及一些主观和感情之事；可能过于骄傲，冷酷无情。";
} else if (differenceI >  1.5 * standardDeviationI) {
    resultTextI = "您在此项上得分较高，软心肠、敏感、过爱（慈爱）这些词能够来描述你再好不过了，敏感善良，易受感动；通常心肠软，较女性化，这样的才是你；但有时过分不讲实际，易感情用事，缺乏耐心与恒心。爱好艺术，富于幻想，有时过于不务实际；不喜欢接近粗鲁的人和做笨重的工作；在团队活动中，由于常常有不着实际的看法和行为而降低团体的工作效率。";
} else {
    resultTextI = "您的得分在正常范围内，在此项上和普通人一样。";
}

// 显示得分结果和常模关系
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>因素I——敏感性  因素解释:描述敏感程度，即判断和决定是否容易受到感情的影响。得分: " + selectedScoreForFactorI + " ，标准分: " + scoreI +""+"标准分范围(1~10)</h3>" + "<p>得分解释：" + resultTextI + "</p>";
resultDisplay.style.textAlign = "center";
// 计算常模分数
var averageL = 10.25; // 常模平均分数
var standardDeviationL = 3.05; // 常模标准差

// 判断得分与常模的关系
var resultTextL = "";
var differenceL = selectedScoreForFactorL - averageL;

if (differenceL <  -1.5 * standardDeviationL) {
    resultTextL = "您在此项上得分较低，你很容易信任别人，易接受意见，易相处（但有可能松懈）随和，安全感强，无嫉妒心，能迎合别人的意见，易相处，这就是你。通常无猜忌，不与人竞争；顺应合作，善于体贴人，但容易受人欺骗而上当。";
} else if (differenceL >  1.5 * standardDeviationL) {
    resultTextL = "您在此项上得分较高，你表现为多疑、不相信、不容易被欺骗（但有时过于警惕）多疑心，刚愎自用，固执己见，对人不信任，与人交往常斤斤计较，不考虑别人的利益，但是警惕是你的代名词。";
} else {
    resultTextL = "您的得分在正常范围内，在此项上和普通人一样。";
}

// 显示得分结果和常模关系
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>因素L——怀疑性 因素解释:描述是否倾向于探究他人言行举止之后的动机。得分: " + selectedScoreForFactorL + " ，标准分: " + scoreL +""+"标准分范围(1~10)</h3>" + "<p>得分解释：" + resultTextL + "</p>";
resultDisplay.style.textAlign = "center";
// 计算常模分数
var averageM = 13.27; // 常模平均分数
var standardDeviationM = 3.39; // 常模标准差

// 判断得分与常模的关系
var resultTextM = "";
var differenceM = selectedScoreForFactorM - averageM;

if (differenceM <  -1.5 * standardDeviationM) {
    resultTextM = "您在此项上得分较低，现实，合乎成规，踏实（实干）的你表现为注重现实，办事力求稳妥，合乎成规。对生活细节较重视，能考虑自己的行为活动是否合乎社会规范，不鲁莽从事，在关健时刻，也能保持镇静，有时可能过于重视现实，为人索然寡趣。";
} else if (differenceM >  1.5 * standardDeviationM) {
    resultTextM = "您在此项上得分较高，你生活中容易幻想、狂放不羁、心不在焉（容易幻想）天马行空的你倾向于幻想，狂放任性富于想象，往往自得其乐，自我陶醉。通常忽视生活细节和现状，常从自己的动机兴趣出发，可能富有创造力，有时也过于不务实际，近乎冲动，因而容易被人误解 。";
} else {
    resultTextM = "您的得分在正常范围内，在此项上和普通人一样。";
}

// 显示得分结果和常模关系
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>因素M——幻想性  因素解释:描述关注外在环境和内在思维的平衡水平。得分: " + selectedScoreForFactorM + " ，标准分: " + scoreM +""+"标准分范围(1~10)</h3>" + "<p>得分解释：" + resultTextM + "</p>";
resultDisplay.style.textAlign = "center";
// 计算常模分数
var averageN = 8.21; // 常模平均分数
var standardDeviationN = 2.67; // 常模标准差

// 判断得分与常模的关系
var resultTextN = "";
var differenceN = selectedScoreForFactorN - averageN;

if (differenceN <  -1.5 * standardDeviationN) {
    resultTextN = "您在此项上得分较低，坦白、直率、天真，这样可爱的你会表现出思想很单纯，能够做到与人无争。正因为如此，常常显得十分幼稚、粗鲁、笨拙，给人一种缺乏教养的感觉。易相信人，但有时处于被动状态 。";
} else if (differenceN >  1.5 * standardDeviationN) {
    resultTextN = "您在此项上得分较高，你忠于精明、能干、世故，为人机灵，处事老练，行为很是得体，正因为此，常常显得很自信，很乐观。能够冷静的分析一切，对于事物的看法是极为理智、客观的，凡事都从利己的角度出发考虑。";
} else {
    resultTextN = "您的得分在正常范围内，在此项上和普通人一样。";
}

// 显示得分结果和常模关系
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>因素N——世故性  因素解释:描述是否能处事老练、灵活地处理事物。得分: " + selectedScoreForFactorN + " ，标准分: " + scoreN +""+"标准分范围(1~10)</h3>" + "<p>得分解释：" + resultTextN + "</p>";
resultDisplay.style.textAlign = "center";
// 计算常模分数
var averageO = 10.42; // 常模平均分数
var standardDeviationO = 3.79; // 常模标准差

// 判断得分与常模的关系
var resultTextO = "";
var differenceO = selectedScoreForFactorO - averageO;

if (differenceO <  -1.5 * standardDeviationO) {
    resultTextO = "您在此项上得分较低，安详、沉着、自信是你的代名词，和大多数人相比，很少自我怀疑。自信、心平气和、坦然、宁静，有时自负、自命不凡、自鸣得意，容易适应环境，知足常乐。";
} else if (differenceO >  1.5 *standardDeviationO) {
    resultTextO = "您在此项上得分较高，一般表现为烦恼、忧虑、抑郁，觉得自己有很大的困惑，或者觉得自己比别人活得更艰难。自我批判意识较强，对现实中的失误倾向于承担太多的个人责任。忧郁、自责、缺乏安全感、焦虑、不安、自扰、杞人忧天。朋友较少。在集体中既无领袖欲望，也不会被推选为领袖。常对环境进行抱怨，牢骚满腹。害羞、不善言词、爱哭。";
} else {
    resultTextO = "您的得分在正常范围内，在此项上和普通人一样。";
}

// 显示得分结果和常模关系
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>因素O——忧虑性  因素解释:描述自我怀疑以及由自我怀疑体现到烦恼和忧虑的程度。得分: " + selectedScoreForFactorO + " ，标准分: " + scoreO +""+"标准分范围(1~10)</h3>" + "<p>得分解释：" + resultTextO + "</p>";
resultDisplay.style.textAlign = "center";
// 计算常模分数
var averageQ1 = 10.15; // 常模平均分数
var standardDeviationQ1 = 2.15; // 常模标准差

// 判断得分与常模的关系
var resultTextQ1 = "";
var differenceQ1 = selectedScoreForFactorQ1 - averageQ1;

if (differenceQ1 <  -1.5 * standardDeviationQ1) {
    resultTextQ1 = "您在此项上得分较低，您可能表现为自由、激进，对新观念与经验有强烈的兴趣，似乎对变革有很高的开放性。好奇、喜欢尝试各种可能性、思想自由、开放、激进。喜欢接近进步的政治党派。对宗教活动不够积极；身体较健康 。";
} else if (differenceQ1 >  1.5 * standardDeviationQ1) {
    resultTextQ1 = "您在此项上得分较高，一般表现为保守、传统，您十分保守，非常尊重传统观念与行为标准。他们经常无条件的接受社会中许多传承已久的有权威性的见解，不愿尝试探求新的境界。往往激烈地反对新思潮以及一切变动。在政治与宗教信仰上，十分墨守成规，被别人称为老顽固或时代的落伍者 。";
} else {
    resultTextQ1 = "您的得分在正常范围内，在此项上和普通人一样。";
}

// 显示得分结果和常模关系
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>因素Q1——变革性  因素解释:描述对新鲜事物的接受和适应程度。得分: " + selectedScoreForFactorQ1 + " ，标准分: " + scoreQ1 +""+"标准分范围(1~10)</h3>" + "<p>得分解释：" + resultTextQ1 + "</p>";
resultDisplay.style.textAlign = "center";
// 计算常模分数
var averageQ2 = 12.26; // 常模平均分数
var standardDeviationQ2 = 2.88; // 常模标准差

// 判断得分与常模的关系
var resultTextQ2 = "";
var differenceQ2 = selectedScoreForFactorQ2 - averageQ2;

if (differenceQ2 <  -1.5 * standardDeviationQ2) {
    resultTextQ2 = "您在此项上得分较低，您容易产生依赖、融合、附和，喜欢与别人一起工作和决定问题，喜欢寻求社会鼓励。缺乏个人决断，需要集体支持，并非真正意义上的乐群者 。";
} else if (differenceQ2 >  1.5 * standardDeviationQ2) {
    resultTextQ2 = "您在此项上得分较高，独立、我行我素、当机立断，这样有主见的你通常会倾向于独立解决问题和做出自己的选择和决定。自信、有主见、足智多谋、遇事勇于自己做主，不依赖他人，不推诿责任。性格上独立，不讨厌别人，也不需他人对自己有好感 。";
} else {
    resultTextQ2 = "您的得分在正常范围内，在此项上和普通人一样。";
}

// 显示得分结果和常模关系
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>因素Q2——独立性  因素解释:描述与周围群体的融合与依赖程度。得分: " + selectedScoreForFactorQ2 + " ，标准分: " + scoreQ2 +""+"标准分范围(1~10)</h3>" + "<p>得分解释：" + resultTextQ2 + "</p>";
resultDisplay.style.textAlign = "center";
// 计算常模分数
var averageQ3 = 12.21; // 常模平均分数
var standardDeviationQ3 = 3.41; // 常模标准差

// 判断得分与常模的关系
var resultTextQ3 = "";
var differenceQ3 = selectedScoreForFactorQ3 - averageQ3;

if (differenceQ3 <  -1.5 * standardDeviationQ3) {
    resultTextQ3 = "您在此项上得分较低，很容易出现散漫、松懈、不顾大体，不像大多数人一样去对事情进行控制和进行事先的计划和组织。更乐于任由事情变化，并可以容忍某种程度上的无组织性。往往不能克制自己，很难尊重礼俗，更加不愿意考虑到别人的需要。在矛盾冲突时难顾大体，很少考虑社会要求，常感不能适应环境。";
} else if (differenceQ3 >  1.5 * standardDeviationQ3) {
    resultTextQ3 = "您在此项上得分较高，一般表现为自律、谨慎，你会通过对事情的事先计划和准备来对事情进行控制。有十分清晰的个人标准，并以此来规划自己的行为，这对你来说很重要。知已知彼，自律严谨，他们言行一致，能够非常合理地支配自己的感情和行为。有社会认识且谨慎，自尊心强，受到别人的尊重，但常常固执已见。";
} else {
    resultTextQ3 = "您的得分在正常范围内，在此项上和普通人一样。";
}

// 显示得分结果和常模关系
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>因素Q3——自律性  因素解释:描述以个人标准及外在纪律对自己的行为进行控制和激励的程度。得分: " + selectedScoreForFactorQ3 + " ，标准分: " + scoreQ3 +""+"标准分范围(1~10)</h3>" + "<p>得分解释：" + resultTextQ3 + "</p>";
resultDisplay.style.textAlign = "center";
// 计算常模分数
var averageQ4 = 11.46; // 常模平均分数
var standardDeviationQ4 = 4.79; // 常模标准差

// 判断得分与常模的关系
var resultTextQ4 = "";
var differenceQ4 = selectedScoreForFactorQ4 - averageQ4;

if (differenceQ4 <  -1.5 * standardDeviationQ4) {
    resultTextQ4 = "您在此项上得分较低，你喜欢心平气和、闲散宁静，您在为人处事中能够心平气和，宁静安详，知足常乐，能够保持内心的平衡和健康的心理状态，但是，有时可能因此而过于懒散，缺乏上进心和主动精神。";
} else if (differenceQ4 >  1.5 * standardDeviationQ4) {
    resultTextQ4 = "您在此项上得分较高，您常常会感到紧张困扰、激动挣扎，遇事容易紧张，兴奋、激动，缺乏耐心，心神不安，并因此经常导致身心疲惫，长期为此困扰，缺少安全感，心理素质也可能因此而受到影响。";
} else {
    resultTextQ4 = "您的得分在正常范围内，在此项上和普通人一样。";
}

// 显示得分结果和常模关系
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>因素Q4——紧张性  因素解释: 描述在和他人的交往中的不稳定性、不耐心以及由此所表现的躯体紧张水平。得分: " + selectedScoreForFactorQ4 + " ，标准分: " + scoreQ4 +""+"标准分范围(1~10)</h3>" + "<p>得分解释：" + resultTextQ4 + "</p>";
resultDisplay.style.textAlign = "center";

var resultTextX1 = "";
if (scoreX1 <= 4) {
    resultTextX1 = " 您在此项上的得分较低，表明您在生活中容易适应，通常感到心满意足，能做到所期望的及自认为重要的事情。也可能对困难的工作缺乏毅力，有事事知难而退，不肯奋斗努力的倾向。";
} else if (scoreX1 > 4 && scoreX1 < 8) {
    resultTextX1 = " 您的得分显示您在此项上的表现为中等水平，和大部分人一样";
} else if (scoreX1 >= 8) {
    resultTextX1 = " 您在此项上的得分较高，这意味着您不一定有神经症，因为它可能是情境性的，但也可能有一些调节不良的情况，即对生活上所要求的和自己意欲达成的事情常感到不满意。高度的焦虑可能会使工作受到破坏和影响身体健康。";
}

// Displaying the result for Factor X1
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>适应与焦虑性X1——描述对现在环境的适应程度, 是否感到焦虑不满。得分: " + scoreX1 + "</h3>" + "<p>得分解释：" + resultTextX1 + "</p>";
resultDisplay.style.textAlign = "center";

var resultTextX2 = "";
if (scoreX2 < 4) {
    resultTextX2 = " 您在此项上的得分较低，表明您在生活中内倾，趋于胆小，自足，在与别人接触中采取克制态度，有利于从事精细工作。这种类型无所谓利弊，主要取决于在哪种情况下采取这种态度。";
} else if (scoreX2 >= 4 && scoreX2 <= 7) {
    resultTextX1 = " 您的得分显示您在此项上的表现为中等水平，和大部分人一样,有时内向有时外向。";
} else if (scoreX2 > 7) {
    resultTextX2 = " 您在此项上的得分较高，这意味着您外倾，开朗，善于交际，不受拘束，有利于从事贸易工作。";
}

// Displaying the result for Factor X2
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>内向与外向型X2——描述性格特征的内向或者外向的程度。得分: " + scoreX2 + "</h3>" + "<p>得分解释：" + resultTextX2 + "</p>";
resultDisplay.style.textAlign = "center";

var resultTextX3 = "";
if (scoreX3 <= 4) {
    resultTextX3 = " 您在此项上的得分较低，表明您在生活中内倾，趋于胆小，自足，在与别人接触中采取克制态度，有利于从事精细工作。这种类型无所谓利弊，主要取决于在哪种情况下采取这种态度。";
} else if (scoreX3 > 4 && scoreX3 < 8) {
    resultTextX3 = " 您的得分显示您在此项上的表现为中等水平，和大部分人一样";
} else if (scoreX3 >= 8) {
    resultTextX3 = " 您在此项上的得分较高，这意味着您外倾，开朗，善于交际，不受拘束，有利于从事贸易工作。";
}

// Displaying the result for Factor X3
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>感情用事与安详机警型X3——描述个体的情绪困扰程度，以及进取精神。得分: " + scoreX3 + "</h3>" + "<p>得分解释：" + resultTextX3 + "</p>";
resultDisplay.style.textAlign = "center";

var resultTextX4 = "";
if (scoreX4 <= 4) {
    resultTextX4 = " 您在此项上的得分较低，表明您在生活中怯懦，顺从，依赖别人，纯洁，个性被动，受人驱使而不能独立，对支持他的人在行动上常适应其需求，为获取别人的欢心会事事迁就 。";
} else if (scoreX4 > 4 && scoreX4 < 8) {
    resultTextX4 = " 您的得分显示您在此项上的表现为中等水平，和大部分人一样。";
} else if (scoreX4 >= 8) {
    resultTextX4 = " 您在此项上的得分较高，这意味着您果断，独立，露锋芒，有气魄，有攻击性的倾向，通常会主动地寻找可以施展这种行为的环境或机会，以充分表现自己的独创能力，并从中取得利益 。";
}

// Displaying the result for Factor X4
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>怯懦与果断型X4——描述做事情时的犹豫或者果断程度。得分: " + scoreX4 + "</h3>" + "<p>得分解释：" + resultTextX4 + "</p>";
resultDisplay.style.textAlign = "center";

var resultTextY1 = "";
if (scoreY1 <= 4) {
    resultTextY1 = " 您在此项上的得分较低，低于12分者仅占人数的10%，情绪不稳定的程度颇为显著。";
} else if (scoreY1 > 4 && scoreY1 < 40) {
    resultTextY1 = " 您的得分显示您在此项上的表现为中等水平，心理健康标准可介于4-40 之间，均值为22 分";
} else if (scoreY1 >= 40) {
    resultTextY1 = " 您在此项上的得分较高，心理健康标准可介于4-40 之间，均值为22 分。";
}

// Displaying the result for Factor Y1
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>心理健康因素Y1——描述人格层次的心理健康水平,心理健康状况几乎是一切职业及事业成功的基础。心理不健康者，其学习和工作效率都会因之减低。得分: " + scoreY1 + "</h3>" + "<p>得分解释：" + resultTextY1 + "</p>";
resultDisplay.style.textAlign = "center";

var resultTextY2 = "";
if (scoreY2 <= 50) {
    resultTextY2 = " 您在此项上的得分较低，其总分可介于10-100 之间，平均分为55。";
} else if (scoreY2 > 50 && scoreY2 < 67) {
    resultTextY2 = " 您的得分显示您在此项上的表现为中等水平，平均分为55。";
} else if (scoreY2 >= 67) {
    resultTextY2 = " 您在此项上的得分较高，平均分为55，67 以上者其成功的机会更大。";
}

// Displaying the result for Factor Y2
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>专业有成就者的人格因素Y2——人格中的某些因素可能对将来的专业成就所具有的影响，它并不代表将来专业成就所达到的水平。得分: " + scoreY2 + "</h3>" + "<p>得分解释：" + resultTextY2 + "</p>";
resultDisplay.style.textAlign = "center";

var resultTextY3 = "";
if (scoreY3 <= 4) {
    resultTextY3 = " 您在此项上的得分较低。";
} else if (scoreY3 > 4 && scoreY3 < 7) {
    resultTextY3 = " 您的得分显示您在此项上的表现为中等水平。";
} else if (scoreY3 >= 7) {
    resultTextY3 = " 您在此项上的得分较高，标准分高于7分者属于创造力强者的范围，应有其成就。";
}

// Displaying the result for Factor Y3
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>创造力强者的人格因素Y3——描述创造力水平。得分: " + scoreY3 + "，范围(1~10)</h3>" + "<p>得分解释：" + resultTextY3 + "</p>";
resultDisplay.style.textAlign = "center";

var resultTextY4 = "";
if (scoreY4 <= 4) {
    resultTextY4 = " 您在此项上的得分较低，平均值为22分，不足17分者仅占分配人数的10%左右，从事专业或训练成功的可能性极小 。";
} else if (scoreY4 >= 4 && scoreY4 < 25) {
    resultTextY4 = " 您的得分显示您在此项上的表现为中等水平，和大部分人一样，此项平均值为22分。";
} else if (scoreY4 >= 25) {
    resultTextY4 = " 您在此项上的得分较高，平均值为22分，25分以上者，则有成功的希望。";
}

// Displaying the result for Factor Y4
var resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML += "<h3>在新环境中有成长能力的人格因素Y4——对新环境的适应水平。得分: " + scoreY4 + "</h3>" + "<p>得分解释：" + resultTextY4 + "</p>";
resultDisplay.style.textAlign = "center";








};


