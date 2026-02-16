---
layout: post
title: '焦虑自评量表（SAS）'
subtitle: '测试开始'
date: 2023-01-02
categories: 心理量表
cover: 'https://s3.bmp.ovh/imgs/2025/04/01/4984939e6b243a97.jpg'
tags: 心理咨询 心理量表 心理测试 SAS 焦虑症 焦虑测评  交互网站 人格因素
---
<html lang="zh-CN">
<head>
<script 
  src="https://www.paypal.com/sdk/js?client-id=BAARHNfmKzHLXfr68uX0--8arP3l0m-JLplAUepTZZsoSZXXIkhyC4uWP8XjQfCfduITf_zf1cOcrKkwdk&components=hosted-buttons&disable-funding=venmo&currency=USD">
</script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-annotation/1.0.2/chartjs-plugin-annotation.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/docx/7.8.2/docx.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Page</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+SC:400,500,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <style>
        body {
            font-family: 'Noto Sans SC', sans-serif;
        }
        .custom-radio {
            display: inline-block;
            position: relative;
            padding: 10px;
            margin: 5px;
            cursor: pointer;
            font-size: 18px;
            -webkit-user-select: none;
            user-select: none;
            align-items: center;
            text-align: center;
        }
        .custom-radio input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
        }
        .checkmark {
            height: 25px;
            width: 25px;
            background-color: #98FB98;
            border-radius: 50%;
            display: inline-block;
            margin-right: 5px;
        }
        .custom-radio input:checked ~ .checkmark {
            background-color: #006400;
        }
        .submit-button {
            background-color: #98FB98; /* Light green */
            color: black;
            font-size: 20px;
            padding: 10px 20px;
            border: 2px solid #98FB98; /* Light green border */
            border-radius: 5px;
            cursor: pointer;
            display: block;
            margin: 20px auto;
            transition: background-color 0.3s, color 0.3s;
        }
        .submit-button:hover {
            background-color: #006400; /* Dark green */
            color: white;
        }
        .question-group {
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
        }
        .question-label {
            margin-right: 10px;
            font-size: 22px;
        }
    </style>
</head>

<body>
    <div class="bg-green-400 py-20">
        <div class="max-w-6xl mx-auto px-4">
            <div class="text-center text-white text-4xl mb-10">SAS</div>
            <div class="flex justify-center space-x-10">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <img src="/assets/img/闪电.webp" loading="lazy" alt="Placeholder image of a 3D model of blue twisted shapes" class="mb-4">
                    <div class="text-gray-700 text-base mb-4">极速测试</div>
                    <div class="text-gray-500 text-sm">依托自己并拥护回答，以了解你的焦虑程度</div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <img src="/assets/img/记录.webp" loading="lazy" alt="Placeholder image of a gold molecular structure" class="mb-4">
                    <div class="text-gray-700 text-base mb-4">查看详细结果</div>
                    <div class="text-gray-500 text-sm">了解您的情绪状况如何影响您生活的所有领域。</div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <img src="/assets/img/人脑.webp" loading="lazy" alt="Placeholder image of purple cards with analytical graphs" class="mb-4">
                    <div class="text-gray-700 text-base mb-4">获取你的潜力</div>
                    <div class="text-gray-500 text-sm">通过可选的高级反馈，成长为您想成为的人。</div>
                </div>
            </div>
        </div>
    </div>
    <div id="resultDisplay">
    <h4 class="text-center mt-8">下面有20条文字，请仔细阅读每一条,把意思弄明白，然后根据您最近“一周”的实际感觉,在程度中选择与你的情况相符的分数。每道题不要花费太久思考，凭第一印象回答。<br> 
1.	目前主要的情绪和躯体症状的自评请根据自觉症状的程度选择。；<br> 
2.	评定时间为过去一周内或现在；<br></h4>
<form id="psychologyTest" class="max-w-6xl mx-auto px-4 py-8">
    <!-- 问题1 -->
    <div class="question-group">
        <div class="question-label">1. 我感到比往常更加神经过敏和焦虑：</div>
        <label class="custom-radio">(A)没有或很少有 
            <input type="radio" id="q1a1" name="question1" value="1">
            <span class="checkmark"></span>
        </label>
        <label class="custom-radio">(B)有时有
            <input type="radio" id="q1a2" name="question1" value="2">
            <span class="checkmark"></span>
        </label>
        <label class="custom-radio">(C)大部分时间有（经常有） 
            <input type="radio" id="q1a3" name="question1" value="3">
            <span class="checkmark"></span>
        </label>
        <label class="custom-radio">(D)绝大多数时间有 
            <input type="radio" id="q1a4" name="question1" value="4">
            <span class="checkmark"></span>
        </label>
    </div>
    <!-- 问题2 -->
    <div class="question-group">
        <div class="question-label">2. 我无缘无故感到担心：</div> 
        <label class="custom-radio">(A)没有或很少有 
            <input type="radio" id="q2a1" name="question2" value="1">
            <span class="checkmark"></span>
        </label>
        <label class="custom-radio">(B)有时有
            <input type="radio" id="q2a2" name="question2" value="2">
            <span class="checkmark"></span>
        </label>
        <label class="custom-radio">(C)大部分时间有（经常有） 
            <input type="radio" id="q2a3" name="question2" value="3">
            <span class="checkmark"></span>
        </label>
        <label class="custom-radio">(D)绝大多数时间有 
            <input type="radio" id="q2a4" name="question2" value="4">
            <span class="checkmark"></span>
        </label>
    </div>
    <!-- 问题3 -->
<div class="question-group">
    <div class="question-label">3. 我容易心烦意乱或感到恐慌：</div>
    <label class="custom-radio">(A)没有或很少有 
            <input type="radio" id="q3a1" name="question3" value="1">
            <span class="checkmark"></span>
        </label>
        <label class="custom-radio">(B)有时有
            <input type="radio" id="q3a2" name="question3" value="2">
            <span class="checkmark"></span>
        </label>
        <label class="custom-radio">(C)大部分时间有（经常有） 
            <input type="radio" id="q3a3" name="question3" value="3">
            <span class="checkmark"></span>
        </label>
        <label class="custom-radio">(D)绝大多数时间有 
            <input type="radio" id="q3a4" name="question3" value="4">
            <span class="checkmark"></span>
        </label>
</div>
<!-- 问题4 -->
<!-- 问题4 -->
<div class="question-group">
    <div class="question-label">4. 我感到我的身体好像被分成几块，支离破碎：</div>
    <label class="custom-radio">(A)没有或很少有 
        <input type="radio" id="q4a1" name="question4" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)有时有
        <input type="radio" id="q4a2" name="question4" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)大部分时间有（经常有） 
        <input type="radio" id="q4a3" name="question4" value="3">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(D)绝大多数时间有 
        <input type="radio" id="q4a4" name="question4" value="4">
        <span class="checkmark"></span>
    </label>
</div>

<!-- 问题5 -->
<div class="question-group">
    <div class="question-label">5. 我感到事事都很顺利，不会有倒霉的事情发生：</div> 
    <label class="custom-radio">(A)没有或很少有 
        <input type="radio" id="q5a1" name="question5" value="4">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)有时有
        <input type="radio" id="q5a2" name="question5" value="3">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)大部分时间有（经常有） 
        <input type="radio" id="q5a3" name="question5" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(D)绝大多数时间有 
        <input type="radio" id="q5a4" name="question5" value="1">
        <span class="checkmark"></span>
    </label>
</div>

<!-- 问题6 -->
<div class="question-group">
    <div class="question-label">6. 我的四肢抖动和震颤：</div> 
    <label class="custom-radio">(A)没有或很少有 
        <input type="radio" id="q6a1" name="question6" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)有时有
        <input type="radio" id="q6a2" name="question6" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)大部分时间有（经常有） 
        <input type="radio" id="q6a3" name="question6" value="3">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(D)绝大多数时间有 
        <input type="radio" id="q6a4" name="question6" value="4">
        <span class="checkmark"></span>
    </label>
</div>

<!-- 问题7 -->
<div class="question-group">
    <div class="question-label">7. 我因头痛、颈痛、背痛而烦恼：</div> 
    <label class="custom-radio">(A)没有或很少有 
        <input type="radio" id="q7a1" name="question7" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)有时有
        <input type="radio" id="q7a2" name="question7" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)大部分时间有（经常有） 
        <input type="radio" id="q7a3" name="question7" value="3">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(D)绝大多数时间有 
        <input type="radio" id="q7a4" name="question7" value="4">
        <span class="checkmark"></span>
    </label>
</div>

<!-- 问题8 -->
<div class="question-group">
    <div class="question-label">8. 我感到无力且容易疲劳：</div> 
    <label class="custom-radio">(A)没有或很少有 
        <input type="radio" id="q8a1" name="question8" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)有时有
        <input type="radio" id="q8a2" name="question8" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)大部分时间有（经常有） 
        <input type="radio" id="q8a3" name="question8" value="3">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(D)绝大多数时间有 
        <input type="radio" id="q8a4" name="question8" value="4">
        <span class="checkmark"></span>
    </label>
</div>

<!-- 问题9 -->
<div class="question-group">
    <div class="question-label">9. 我感到很平静，能安静坐下来：</div> 
    <label class="custom-radio">(A)没有或很少有 
        <input type="radio" id="q9a1" name="question9" value="4">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)有时有
        <input type="radio" id="q9a2" name="question9" value="3">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)大部分时间有（经常有） 
        <input type="radio" id="q9a3" name="question9" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(D)绝大多数时间有 
        <input type="radio" id="q9a4" name="question9" value="1">
        <span class="checkmark"></span>
    </label>
</div>

<!-- 问题10 -->
<div class="question-group">
    <div class="question-label">10. 我感到我的心跳较快：</div> 
    <label class="custom-radio">(A)没有或很少有 
        <input type="radio" id="q10a1" name="question10" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)有时有
        <input type="radio" id="q10a2" name="question10" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)大部分时间有（经常有） 
        <input type="radio" id="q10a3" name="question10" value="3">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(D)绝大多数时间有 
        <input type="radio" id="q10a4" name="question10" value="4">
        <span class="checkmark"></span>
    </label>
</div>

<!-- 问题11 -->
<div class="question-group">
    <div class="question-label">11. 我因阵阵的眩晕而不舒服：</div> 
    <label class="custom-radio">(A)没有或很少有 
        <input type="radio" id="q11a1" name="question11" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)有时有
        <input type="radio" id="q11a2" name="question11" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)大部分时间有（经常有） 
        <input type="radio" id="q11a3" name="question11" value="3">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(D)绝大多数时间有 
        <input type="radio" id="q11a4" name="question11" value="4">
        <span class="checkmark"></span>
    </label>
</div>

<!-- 问题12 -->
<div class="question-group">
    <div class="question-label">12. 我有阵阵要昏倒的感觉：</div> 
    <label class="custom-radio">(A)没有或很少有 
        <input type="radio" id="q12a1" name="question12" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)有时有
        <input type="radio" id="q12a2" name="question12" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)大部分时间有（经常有） 
        <input type="radio" id="q12a3" name="question12" value="3">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(D)绝大多数时间有 
        <input type="radio" id="q12a4" name="question12" value="4">
        <span class="checkmark"></span>
    </label>
</div>

<!-- 问题13 -->
<div class="question-group">
    <div class="question-label">13. 我呼吸时进气和出气都不费力：</div> 
    <label class="custom-radio">(A)没有或很少有 
        <input type="radio" id="q13a1" name="question13" value="4">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)有时有
        <input type="radio" id="q13a2" name="question13" value="3">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)大部分时间有（经常有） 
        <input type="radio" id="q13a3" name="question13" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(D)绝大多数时间有 
        <input type="radio" id="q13a4" name="question13" value="1">
        <span class="checkmark"></span>
    </label>
</div>

<!-- 问题14 -->
<div class="question-group">
    <div class="question-label">14. 我的手指和脚趾感到麻木和刺痛：</div> 
    <label class="custom-radio">(A)没有或很少有 
        <input type="radio" id="q14a1" name="question14" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)有时有
        <input type="radio" id="q14a2" name="question14" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)大部分时间有（经常有） 
        <input type="radio" id="q14a3" name="question14" value="3">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(D)绝大多数时间有 
        <input type="radio" id="q14a4" name="question14" value="4">
        <span class="checkmark"></span>
    </label>
</div>

<!-- 问题15 -->
<div class="question-group">
    <div class="question-label">15. 我因胃痛和消化不良而苦恼：</div> 
    <label class="custom-radio">(A)没有或很少有 
        <input type="radio" id="q15a1" name="question15" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)有时有
        <input type="radio" id="q15a2" name="question15" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)大部分时间有（经常有） 
        <input type="radio" id="q15a3" name="question15" value="3">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(D)绝大多数时间有 
        <input type="radio" id="q15a4" name="question15" value="4">
        <span class="checkmark"></span>
    </label>
</div>

<!-- 问题16 -->
<div class="question-group">
    <div class="question-label">16. 我必须时常排尿：</div> 
    <label class="custom-radio">(A)没有或很少有 
        <input type="radio" id="q16a1" name="question16" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)有时有
        <input type="radio" id="q16a2" name="question16" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)大部分时间有（经常有） 
        <input type="radio" id="q16a3" name="question16" value="3">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(D)绝大多数时间有 
        <input type="radio" id="q16a4" name="question16" value="4">
        <span class="checkmark"></span>
    </label>
</div>

<!-- 问题17 -->
<div class="question-group">
    <div class="question-label">17. 我的手总是很温暖而干燥：</div> 
    <label class="custom-radio">(A)没有或很少有 
        <input type="radio" id="q17a1" name="question17" value="4">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)有时有
        <input type="radio" id="q17a2" name="question17" value="3">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)大部分时间有（经常有） 
        <input type="radio" id="q17a3" name="question17" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(D)绝大多数时间有 
        <input type="radio" id="q17a4" name="question17" value="1">
        <span class="checkmark"></span>
    </label>
</div>

<!-- 问题18 -->
<div class="question-group">
    <div class="question-label">18. 我觉得脸发烧发红：</div> 
    <label class="custom-radio">(A)没有或很少有 
        <input type="radio" id="q18a1" name="question18" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)有时有
        <input type="radio" id="q18a2" name="question18" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)大部分时间有（经常有） 
        <input type="radio" id="q18a3" name="question18" value="3">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(D)绝大多数时间有 
        <input type="radio" id="q18a4" name="question18" value="4">
        <span class="checkmark"></span>
    </label>
</div>

<!-- 问题19 -->
<div class="question-group">
    <div class="question-label">19. 我容易入睡，晚上休息很好：</div> 
    <label class="custom-radio">(A)没有或很少有 
        <input type="radio" id="q19a1" name="question19" value="4">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)有时有
        <input type="radio" id="q19a2" name="question19" value="3">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)大部分时间有（经常有） 
        <input type="radio" id="q19a3" name="question19" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(D)绝大多数时间有 
        <input type="radio" id="q19a4" name="question19" value="1">
        <span class="checkmark"></span>
    </label>
</div>

<!-- 问题20 -->
<div class="question-group">
    <div class="question-label">20. 我做恶梦：</div> 
    <label class="custom-radio">(A)没有或很少有 
        <input type="radio" id="q20a1" name="question20" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)有时有
        <input type="radio" id="q20a2" name="question20" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)大部分时间有（经常有） 
        <input type="radio" id="q20a3" name="question20" value="3">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(D)绝大多数时间有 
        <input type="radio" id="q20a4" name="question20" value="4">
        <span class="checkmark"></span>
    </label>
</div>
        <input type="submit" value="提交" class="submit-button"> 
</form></div>

<div id="canvasContainer" style="display: none; justify-content: center; align-items: center; height: 100%; opacity: 0; transition: opacity 0.5s ease-in-out;">
    <canvas id="myRadarChart" width="600" height="150"></canvas>
</div>
<p id="result" class="text-center mt-4 text-lg"></p>
    <script src="../../../assets/js/scriptSAS.js"></script>
    <div id="paypal-container-ETWQHQDM7ZDHJ"></div>
<script>
  paypal.HostedButtons({
    hostedButtonId: "ETWQHQDM7ZDHJ",
  }).render("#paypal-container-ETWQHQDM7ZDHJ")
</script>
</body>
</html>
## 支付宝扫码购买
<a href="https://shop.dittopsych.xyz/#/2/detail" target="_blank">
    <img src="/assets/icons/alipay-logo.svg" alt="支付宝" style="width: 150px;">
</a>