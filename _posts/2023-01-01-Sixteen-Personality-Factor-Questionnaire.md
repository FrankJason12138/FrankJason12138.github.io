---
layout: post
title: '卡特尔16PF'
subtitle: '测试开始'
date: 2023-01-01
categories: 心理量表
cover: '/assets/img/MBTI.jpg'
tags: 心理咨询 心理量表 心理测试 卡特尔 人格测试 MBTI 16PF 交互网站 人格因素
---
<html lang="zh-CN">
<head>
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
            <div class="text-center text-white text-4xl mb-10">卡特尔16PF</div>
            <div class="flex justify-center space-x-10">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <img src="/assets/img/闪电.jpg" alt="Placeholder image of a 3D model of blue twisted shapes" class="mb-4">
                    <div class="text-gray-700 text-base mb-4">极速测试</div>
                    <div class="text-gray-500 text-sm">依托自己并拥护回答，以了解你的性格类型。</div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <img src="/assets/img/记录.jpg" alt="Placeholder image of a gold molecular structure" class="mb-4">
                    <div class="text-gray-700 text-base mb-4">查看详细结果</div>
                    <div class="text-gray-500 text-sm">了解您的性格类型如何影响您生活的所有领域。</div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <img src="/assets/img/人脑.jpg" alt="Placeholder image of purple cards with analytical graphs" class="mb-4">
                    <div class="text-gray-700 text-base mb-4">获取你的潜力</div>
                    <div class="text-gray-500 text-sm">通过可选的高级反馈，成长为您想成为的人。</div>
                </div>
            </div>
        </div>
    </div>
    <h2 class="text-center mt-8">本测验共有187道题目, 都是有关个人的兴趣和态度等问题.每个人对这些问题是会有不同看法的,回答也是不同的因而对问题如何回答，并没有对与不对之分,只是表明你对这些问题的态度.请你要尽量表达个人的意见,不要有顾虑。应当记住的是： 
1.	每一测题只能选择一个答案； 
2.	不可漏掉任何测题； 
3.	尽量不选择第B个答案； 
4.	本测验不计时间，但应凭自己的直觉反应进行作答，不要迟疑不决，拖延时间。一定要在一个小时以内完成整个测验。 
5.	有些题目你可能从未思考过，或者感到不太容易回答。对于这样的题目，同样要求你做出一种倾向性的选择。</h2>
<form id="psychologyTest" class="max-w-6xl mx-auto px-4 py-8">
    <!-- 问题1 -->
    <div class="question-group">
        <div class="question-label">1. 我很明了本测试的说明：</div>
        <!-- 添加这个换行标签 -->
        <label class="custom-radio">(A)是的 
            <input type="radio" id="q1a1" name="question1" value="1">
            <span class="checkmark"></span>
        </label>
        <label class="custom-radio">(B)不一定
            <input type="radio" id="q1a2" name="question1" value="2">
            <span class="checkmark"></span>
        </label>
        <label class="custom-radio">(C)不是的 
            <input type="radio" id="q1a1" name="question1" value="3">
            <span class="checkmark"></span>
        </label>
    </div>
    <!-- 问题2 -->
    <div class="question-group">
        <div class="question-label">2. 我对本测试的每一个问题，都能做到诚实地回答：</div> <!-- 添加这个换行标签 -->
        <label class="custom-radio">(A)是的 
            <input type="radio" id="q1a1" name="question2" value="1">
            <span class="checkmark"></span>
        </label>
        <label class="custom-radio">(B)不一定
            <input type="radio" id="q1a2" name="question2" value="2">
            <span class="checkmark"></span>
        </label>
        <label class="custom-radio">(C)不同意 
            <input type="radio" id="q1a1" name="question2" value="3">
            <span class="checkmark"></span>
        </label>
    </div>
    <!-- 更多问题可以按照这个格式添加 -->
    <div class="question-group">
        <input type="submit" value="提交" class="submit-button">
    </div>
</form>
    <p id="result" class="text-center mt-4"></p>
    <script src="../assets/js/script.js"></script>
</body>
</html>



