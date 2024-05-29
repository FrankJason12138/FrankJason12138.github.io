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
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5096773500981125"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-5096773500981125"
     data-ad-slot="2008881668"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
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
    <div id="resultDisplay">
    <h4 class="text-center mt-8">本测验共有187道题目, 都是有关个人的兴趣和态度等问题.每个人对这些问题是会有不同看法的,回答也是不同的因而对问题如何回答，并没有对与不对之分,只是表明你对这些问题的态度.请你要尽量表达个人的意见,不要有顾虑。应当记住的是：<br> 
1.	每一测题只能选择一个答案；<br> 
2.	不可漏掉任何测题；<br> 
3.	尽量不选择(B)这个答案；<br> 
4.	本测验不计时间，但应凭自己的直觉反应进行作答，不要迟疑不决，拖延时间。一定要在一个小时以内完成整个测验。<br> 
5.	有些题目你可能从未思考过，或者感到不太容易回答。对于这样的题目，同样要求你做出一种倾向性的选择。</h4>
<form id="psychologyTest" class="max-w-6xl mx-auto px-4 py-8">
    <!-- 问题1 -->
    <div class="question-group">
        <div class="question-label">1. 我很明了本测试的说明：</div>
        <label class="custom-radio">(A)是的 
            <input type="radio" id="q1a1" name="question1" value="1">
            <span class="checkmark"></span>
        </label>
        <label class="custom-radio">(B)不一定
            <input type="radio" id="q1a2" name="question1" value="2">
            <span class="checkmark"></span>
        </label>
        <label class="custom-radio">(C)不是的 
            <input type="radio" id="q1a3" name="question1" value="3">
            <span class="checkmark"></span>
        </label>
    </div>
    <!-- 问题2 -->
    <div class="question-group">
        <div class="question-label">2. 我对本测试的每一个问题，都能做到诚实地回答：</div> 
        <label class="custom-radio">(A)是的 
            <input type="radio" id="q2a1" name="question2" value="1">
            <span class="checkmark"></span>
        </label>
        <label class="custom-radio">(B)不一定
            <input type="radio" id="q2a2" name="question2" value="2">
            <span class="checkmark"></span>
        </label>
        <label class="custom-radio">(C)不同意 
            <input type="radio" id="q2a3" name="question2" value="3">
            <span class="checkmark"></span>
        </label>
    </div>
    <!-- 问题3 -->
<div class="question-group">
    <div class="question-label">3. 如果我有机会的话，我愿意：</div>
    <label class="custom-radio">(A) 到一个繁华的城市去旅行
        <input type="radio" id="q3a1" name="question3" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于（A）,(C)之间
        <input type="radio" id="q3a2" name="question3" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 浏览清静的山区
        <input type="radio" id="q3a3" name="question3" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题4 -->
<div class="question-group">
    <div class="question-label">4. 我有能力应付各种困难：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q4a1" name="question4" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 不一定
        <input type="radio" id="q4a2" name="question4" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q4a3" name="question4" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题5 -->
<div class="question-group">
    <div class="question-label">5. 即使是关在铁笼里的猛兽，我见了也会感到惴惴不安：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q5a1" name="question5" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 不一定
        <input type="radio" id="q5a2" name="question5" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q5a3" name="question5" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题6 -->
<div class="question-group">
    <div class="question-label">6. 我总是不敢大胆批评别人的言行：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q6a1" name="question6" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 有时如此
        <input type="radio" id="q6a2" name="question6" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q6a3" name="question6" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题7 -->
<div class="question-group">
    <div class="question-label">7. 我的思想似乎：</div>
    <label class="custom-radio">(A) 比较先进
        <input type="radio" id="q7a1" name="question7" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 一般
        <input type="radio" id="q7a2" name="question7" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 比较保守
        <input type="radio" id="q7a3" name="question7" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题8 -->
<div class="question-group">
    <div class="question-label">8. 我不擅长说笑话，讲有趣的事：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q8a1" name="question8" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于（A）,(C)之间
        <input type="radio" id="q8a2" name="question8" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q8a3" name="question8" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题9 -->
<div class="question-group">
    <div class="question-label">9．当我见到邻居或新友争吵时，我总是：</div>
    <label class="custom-radio">(A) 任其自己解决
        <input type="radio" id="q9a1" name="question9" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于（A）,(C)之间
        <input type="radio" id="q9a2" name="question9" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 予以劝解
        <input type="radio" id="q9a3" name="question9" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题10 -->
<div class="question-group">
    <div class="question-label">10. 在群众集会时，我：</div>
    <label class="custom-radio">(A) 谈吐自如
        <input type="radio" id="q10a1" name="question10" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于（A）,(C)之间
        <input type="radio" id="q10a2" name="question10" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 保持沉默
        <input type="radio" id="q10a3" name="question10" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题11 -->
<div class="question-group">
    <div class="question-label">11. 我愿意作一个：</div>
    <label class="custom-radio">(A) 建筑工程师
        <input type="radio" id="q11a1" name="question11" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 不确定
        <input type="radio" id="q11a2" name="question11" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 社会科学研究者
        <input type="radio" id="q11a3" name="question11" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题12 -->
<div class="question-group">
    <div class="question-label">12. 阅读时，我喜欢选读：</div>
    <label class="custom-radio">(A) 自然科学书籍
        <input type="radio" id="q12a1" name="question12" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 不确定
        <input type="radio" id="q12a2" name="question12" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 政治理论书籍
        <input type="radio" id="q12a3" name="question12" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题13 -->
<div class="question-group">
    <div class="question-label">13. 我认为很多人都有些心里不正常，只是他们不愿承认：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q13a1" name="question13" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于（A）,(C)之间
        <input type="radio" id="q13a2" name="question13" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q13a3" name="question13" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题14 -->
<div class="question-group">
    <div class="question-label">14. 我希望我的爱人擅长交际，无须具有文艺才能：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q14a1" name="question14" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 不一定
        <input type="radio" id="q14a2" name="question14" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q14a3" name="question14" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题15 -->
<div class="question-group">
    <div class="question-label">15. 对于性情急躁，爱发脾气的人，我仍能以礼相待：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q15a1" name="question15" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于（A）,(C)之间
        <input type="radio" id="q15a2" name="question15" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q15a3" name="question15" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题16 -->
<div class="question-group">
    <div class="question-label">16. 受人侍奉时我常常局促不安：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q16a1" name="question16" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于（A）,(C)之间
        <input type="radio" id="q16a2" name="question16" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q16a3" name="question16" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题17 -->
<div class="question-group">
    <div class="question-label">17. 在从事体力或脑力劳动后，我总是需要比别人有更多的休息时间才能保持工作效率：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q17a1" name="question17" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于（A）,(C)之间
        <input type="radio" id="q17a2" name="question17" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q17a3" name="question17" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题18 -->
<div class="question-group">
    <div class="question-label">18. 半夜醒来，我常常为种种不安而不能入睡：</div>
    <label class="custom-radio">(A) 常常如此
        <input type="radio" id="q18a1" name="question18" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 有时如此
        <input type="radio" id="q18a2" name="question18" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 极少如此
        <input type="radio" id="q18a3" name="question18" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题19 -->
<div class="question-group">
    <div class="question-label">19. 事情进行的不顺利时，我常常急得涕泪交流：</div>
    <label class="custom-radio">(A) 常常如此
        <input type="radio" id="q19a1" name="question19" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 有时如此
        <input type="radio" id="q19a2" name="question19" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 极少如此
        <input type="radio" id="q19a3" name="question19" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题20 -->
<div class="question-group">
    <div class="question-label">20. 我以为只要双方同意可离婚，可以不受传统观念的束缚：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q20a1" name="question20" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于（A）,(C)之间
        <input type="radio" id="q20a2" name="question20" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q20a3" name="question20" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题21 -->
<div class="question-group">
    <div class="question-label">21. 我对人或物的兴趣都很容易改变：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q21a1" name="question21" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于（A）,(C)之间
        <input type="radio" id="q21a2" name="question21" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q21a3" name="question21" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题22 -->
<div class="question-group">
    <div class="question-label">22. 工作中，我愿意：</div>
    <label class="custom-radio">(A) 和别人合作
        <input type="radio" id="q22a1" name="question22" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 不确定
        <input type="radio" id="q22a2" name="question22" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 自己单独进行
        <input type="radio" id="q22a3" name="question22" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题23 -->
<div class="question-group">
    <div class="question-label">23. 我常常无缘无故的自言自语：</div>
    <label class="custom-radio">(A) 常常如此
        <input type="radio" id="q23a1" name="question23" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 偶尔如此
        <input type="radio" id="q23a2" name="question23" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 从不如此
        <input type="radio" id="q23a3" name="question23" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题24 -->
<div class="question-group">
    <div class="question-label">24. 无论是工作，饮食或外出游览，我总是：</div>
    <label class="custom-radio">(A) 匆匆忙忙不能尽兴
        <input type="radio" id="q24a1" name="question24" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于（A）,(C)之间
        <input type="radio" id="q24a2" name="question24" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 从容不迫
        <input type="radio" id="q24a3" name="question24" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题25 -->
<div class="question-group">
    <div class="question-label">25. 有时我怀疑别人是否对我的言行真正有兴趣：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q25a1" name="question25" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于（A）,(C)之间
        <input type="radio" id="q25a2" name="question25" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q25a3" name="question25" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题26 -->
<div class="question-group">
    <div class="question-label">26. 如果我在工厂里工作，我愿做：</div>
    <label class="custom-radio">(A) 技术科的工作
        <input type="radio" id="q26a1" name="question26" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于（A）,(C)之间
        <input type="radio" id="q26a2" name="question26" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 宣传科的工作
        <input type="radio" id="q26a3" name="question26" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题27 -->
<div class="question-group">
    <div class="question-label">27. 在阅读时我愿阅读：</div>
    <label class="custom-radio">(A) 有关太空旅行的书籍
        <input type="radio" id="q27a1" name="question27" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 不太确定
        <input type="radio" id="q27a2" name="question27" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)有关家庭教育的书籍
        <input type="radio" id="q27a3" name="question27" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题28 -->
<div class="question-group">
    <div class="question-label">28. 本题后面列出的三个单词，哪个与其它两个单词不类同：</div>
    <label class="custom-radio">(A) 狗
        <input type="radio" id="q28a1" name="question28" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 石头
        <input type="radio" id="q28a2" name="question28" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 牛
        <input type="radio" id="q28a3" name="question28" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题29 -->
<div class="question-group">
    <div class="question-label">29. 如果我能到一个新的环境，我要：</div> 
    <label class="custom-radio">(A) 把生活安排得和从前不一样
        <input type="radio" id="q29a1" name="question29" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 不确定
        <input type="radio" id="q29a2" name="question29" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 和从前相仿
        <input type="radio" id="q29a3" name="question29" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题30 -->
<div class="question-group">
    <div class="question-label">30. 在一生中，我总觉得我能达到预期的目标：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q30a1" name="question30" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 不一定
        <input type="radio" id="q30a2" name="question30" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q30a3" name="question30" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题31 -->
<div class="question-group">
    <div class="question-label">31. 当我说谎时，总觉得内心羞愧，不敢正视对方：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q31a1" name="question31" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 不一定
        <input type="radio" id="q31a2" name="question31" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q31a3" name="question31" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题32 -->
<div class="question-group">
    <div class="question-label">32. 假如我手里拿着装有子弹的手枪，我必须把子弹拿出来才能安心：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q32a1" name="question32" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于AC之间
        <input type="radio" id="q32a2" name="question32" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q32a3" name="question32" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题33 -->
<div class="question-group">
    <div class="question-label">33. 多数人认为我是一个说话有趣的人：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q33a1" name="question33" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 不一定
        <input type="radio" id="q33a2" name="question33" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q33a3" name="question33" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题34 -->
<div class="question-group">
    <div class="question-label">34. 如果人们知道我内心的成见，他们会大吃一惊：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q34a1" name="question34" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 不一定
        <input type="radio" id="q34a2" name="question34" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q34a3" name="question34" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题35 -->
<div class="question-group">
    <div class="question-label">35. 在公共场合，如果我突然成为大家注意的中心，我会感到局促不安：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q35a1" name="question35" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于AC之间
        <input type="radio" id="q35a2" name="question35" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q35a3" name="question35" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题36 -->
<div class="question-group">
    <div class="question-label">36. 我喜欢规模庞大的晚会或集会：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q36a1" name="question36" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于AC之间
        <input type="radio" id="q36a2" name="question36" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q36a3" name="question36" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题37 -->
<div class="question-group">
    <div class="question-label">37. 在学科中，我喜欢：</div>
    <label class="custom-radio">(A) 音乐
        <input type="radio" id="q37a1" name="question37" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 不一定
        <input type="radio" id="q37a2" name="question37" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 手工劳动
        <input type="radio" id="q37a3" name="question37" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题38 -->
<div class="question-group">
    <div class="question-label">38. 我常常怀疑那些出乎意料的，对我过于友善的人的诚实动机：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q38a1" name="question38" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于AC之间
        <input type="radio" id="q38a2" name="question38" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q38a3" name="question38" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题39 -->
<div class="question-group">
    <div class="question-label">39. 我愿意把生活安排得象一个：</div>
    <label class="custom-radio">(A) 艺术家
        <input type="radio" id="q39a1" name="question39" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 不确定
        <input type="radio" id="q39a2" name="question39" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 会计师
        <input type="radio" id="q39a3" name="question39" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题40 -->
<div class="question-group">
    <div class="question-label">40. 我认为目前所需要的是：</div>
    <label class="custom-radio">(A) 多出现一些改造世界观的思想家
        <input type="radio" id="q40a1" name="question40" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 不确定
        <input type="radio" id="q40a2" name="question40" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 脚踏实地的实干家
        <input type="radio" id="q40a3" name="question40" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题41 -->
<div class="question-group">
    <div class="question-label">41. 有时候我觉得需要剧烈的体力劳动：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q41a1" name="question41" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于AC之间
        <input type="radio" id="q41a2" name="question41" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q41a3" name="question41" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题42 -->
<div class="question-group">
    <div class="question-label">42. 我愿意跟有教养的人来往，而不愿意同粗鲁的人交往：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q42a1" name="question42" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于AC之间
        <input type="radio" id="q42a2" name="question42" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q42a3" name="question42" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题43 -->
<div class="question-group">
    <div class="question-label">43. 在处理一些必须凭借智慧的事物中，我的亲人的确：</div>
    <label class="custom-radio">(A) 比一般人差
        <input type="radio" id="q43a1" name="question43" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 普通
        <input type="radio" id="q43a2" name="question43" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 超人一等
        <input type="radio" id="q43a3" name="question43" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题44 -->
<div class="question-group">
    <div class="question-label">44. 当领导召见时，我：</div>
    <label class="custom-radio">(A) 觉得可以趁机提出建议
        <input type="radio" id="q44a1" name="question44" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于AC之间
        <input type="radio" id="q44a2" name="question44" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 总怀疑自己做错了事
        <input type="radio" id="q44a3" name="question44" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题45 -->
<div class="question-group">
    <div class="question-label">45. 如果待遇优厚，我愿意做护理工作：</div>
    <label class="custom-radio">(A) 是的
        <input type="radio" id="q45a1" name="question45" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于AC之间
        <input type="radio" id="q45a2" name="question45" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 不是的
        <input type="radio" id="q45a3" name="question45" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题46 -->
<div class="question-group">
    <div class="question-label">46. 读报时，我喜欢读：</div>
    <label class="custom-radio">(A) 当前世界上的基本问题
        <input type="radio" id="q46a1" name="question46" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 介于AC之间
        <input type="radio" id="q46a2" name="question46" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 地方新闻
        <input type="radio" id="q46a3" name="question46" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题47 -->
<div class="question-group">
    <div class="question-label">47. 在接受困难任务时，我总是：</div>
    <label class="custom-radio">(A) 有独立完成的信心
        <input type="radio" id="q47a1" name="question47" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B) 不确定
        <input type="radio" id="q47a2" name="question47" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C) 希望有别人的帮助和指导
        <input type="radio" id="q47a3" name="question47" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题48 -->
<div class="question-group">
    <div class="question-label">48. 在游览时我宁愿参加一个画家的写生，也不愿听人家的辨论：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q48a1" name="question48" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q48a2" name="question48" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q48a3" name="question48" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题49 -->
<div class="question-group">
    <div class="question-label">49. 我的神经脆弱，稍有点刺激就会使我战栗：</div>
    <label class="custom-radio">(A)时常如此 
        <input type="radio" id="q49a1" name="question49" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)有时如此
        <input type="radio" id="q49a2" name="question49" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)从不如此 
        <input type="radio" id="q49a3" name="question49" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题50 -->
<div class="question-group">
    <div class="question-label">50. 早晨起来我常常感到疲乏不堪：</div> 
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q50a1" name="question50" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q50a2" name="question50" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q50a3" name="question50" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题51 -->
<div class="question-group">
    <div class="question-label">51. 如果待遇相同，我愿做：</div>
    <label class="custom-radio">(A)森林管理员 
        <input type="radio" id="q51a1" name="question51" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q51a2" name="question51" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)中小学教师 
        <input type="radio" id="q51a3" name="question51" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题52 -->
<div class="question-group">
    <div class="question-label">52. 每逢年节或亲友结婚时，我：</div>
    <label class="custom-radio">(A)喜欢赠送礼品 
        <input type="radio" id="q52a1" name="question52" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不太确定
        <input type="radio" id="q52a2" name="question52" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不愿相互送礼 
        <input type="radio" id="q52a3" name="question52" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题53 -->
<div class="question-group">
    <div class="question-label">53. 本题后面列举的三个数字中，哪个数字与其它两个不类同：</div>
    <label class="custom-radio">(A)5 
        <input type="radio" id="q53a1" name="question53" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)2
        <input type="radio" id="q53a2" name="question53" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)7 
        <input type="radio" id="q53a3" name="question53" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题54 -->
<div class="question-group">
    <div class="question-label">54. 猫和鱼就像牛和：</div> 
    <label class="custom-radio">(A)牛奶 
        <input type="radio" id="q54a1" name="question54" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)牧草
        <input type="radio" id="q54a2" name="question54" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)盐 
        <input type="radio" id="q54a3" name="question54" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题55 -->
<div class="question-group">
    <div class="question-label">55. 我在小学时敬佩的老师，到现在仍然值得我敬佩：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q55a1" name="question55" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q55a2" name="question55" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q55a3" name="question55" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题56 -->
<div class="question-group">
    <div class="question-label">56. 我觉得我确实有一些别人所不及的优良品质：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q56a1" name="question56" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q56a2" name="question56" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q56a3" name="question56" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题57 -->
<div class="question-group">
    <div class="question-label">57. 根据我的能力，即使让我做一些平凡的工作，我也会安心的：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q57a1" name="question57" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不太确定
        <input type="radio" id="q57a2" name="question57" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q57a3" name="question57" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题58 -->
<div class="question-group">
    <div class="question-label">58. 我喜欢看电影或参加其它娱乐活动：</div> 
    <label class="custom-radio">(A)比一般人多 
        <input type="radio" id="q58a1" name="question58" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)和一般人相同
        <input type="radio" id="q58a2" name="question58" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)比一般人少 
        <input type="radio" id="q58a3" name="question58" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题59 -->
<div class="question-group">
    <div class="question-label">59. 我喜欢需要精密技术的工作：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q59a1" name="question59" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q59a2" name="question59" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q59a3" name="question59" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题60 -->
<div class="question-group">
    <div class="question-label">60. 在有威望有地位的人面前，我总是较为局促、谨慎：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q60a1" name="question60" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q60a2" name="question60" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q60a3" name="question60" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题61 -->
<div class="question-group">
    <div class="question-label">61. 对于我来说，在大众面前演讲或表演，是一件难事：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q61a1" name="question61" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q61a2" name="question61" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q61a3" name="question61" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题62 -->
<div class="question-group">
    <div class="question-label">62. 我愿意：</div>
    <label class="custom-radio">(A)指挥几个人工作 
        <input type="radio" id="q62a1" name="question62" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不确定
        <input type="radio" id="q62a2" name="question62" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)和同志们一起工作 
        <input type="radio" id="q62a3" name="question62" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题63 -->
<div class="question-group">
    <div class="question-label">63. 即使我做了一件让人笑话的事，我也能坦然处之：</div> 
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q63a1" name="question63" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q63a2" name="question63" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q63a3" name="question63" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题64 -->
<div class="question-group">
    <div class="question-label">64. 我认为没有人会幸灾乐祸希望我遇到困难：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q64a1" name="question64" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不确定
        <input type="radio" id="q64a2" name="question64" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q64a3" name="question64" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题65 -->
<div class="question-group">
    <div class="question-label">65. 一个人应该：</div>
    <label class="custom-radio">(A)考虑人生的真正意义 
        <input type="radio" id="q65a1" name="question65" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不确定
        <input type="radio" id="q65a2" name="question65" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)踏踏实实地工作和学习 
        <input type="radio" id="q65a3" name="question65" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题66 -->
<div class="question-group">
    <div class="question-label">66. 我喜欢去处理被别人弄得一塌糊涂的工作：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q66a1" name="question66" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q66a2" name="question66" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q66a3" name="question66" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题67 -->
<div class="question-group">
    <div class="question-label">67. 当我非常高兴时，总有种“好景不长”的感觉：</div> 
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q67a1" name="question67" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q67a2" name="question67" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q67a3" name="question67" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题68 -->
<div class="question-group">
    <div class="question-label">68. 在一般困难的情境中，我总能保持乐观：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q68a1" name="question68" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q68a2" name="question68" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q68a3" name="question68" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题69 -->
<div class="question-group">
    <div class="question-label">69. 迁居是一件极不愉快的事：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q69a1" name="question69" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q69a2" name="question69" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q69a3" name="question69" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题70 -->
<div class="question-group">
    <div class="question-label">70. 在年轻的时候，当我和父母的意见不同时，我：</div>
    <label class="custom-radio">(A)保留自己的意见 
        <input type="radio" id="q70a1" name="question70" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q70a2" name="question70" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不接受父母的意见 
        <input type="radio" id="q70a3" name="question70" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题71 -->
<div class="question-group">
    <div class="question-label">71. 我希望把我的家庭建设得：</div> 
    <label class="custom-radio">(A)有其自身的活动和娱乐 
        <input type="radio" id="q71a1" name="question71" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q71a2" name="question71" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)成为邻里交往活动的一部分 
        <input type="radio" id="q71a3" name="question71" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题72 -->
<div class="question-group">
    <div class="question-label">72. 我解决问题时多借助于：</div>
    <label class="custom-radio">(A)个人独立思考 
        <input type="radio" id="q72a1" name="question72" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q72a2" name="question72" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)和别人互相讨论 
        <input type="radio" id="q72a3" name="question72" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题73 -->
<div class="question-group">
    <div class="question-label">73. 在需要当机立断时，我总是：</div>
    <label class="custom-radio">(A)镇静地利用理智 
        <input type="radio" id="q73a1" name="question73" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q73a2" name="question73" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)常常紧张兴奋 
        <input type="radio" id="q73a3" name="question73" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题74 -->
<div class="question-group">
    <div class="question-label">74. 最近在一两件事情上，我觉得我是无辜受累的：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q74a1" name="question74" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q74a2" name="question74" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q74a3" name="question74" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题75 -->
<div class="question-group">
    <div class="question-label">75. 我善于控制我的表情：</div> 
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q75a1" name="question75" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)于AC之间
        <input type="radio" id="q75a2" name="question75" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q75a3" name="question75" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题76 -->
<div class="question-group">
    <div class="question-label">76. 如果待遇相同，我愿做一个：</div>
    <label class="custom-radio">(A)文学研究工作者 
        <input type="radio" id="q76a1" name="question76" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不确定
        <input type="radio" id="q76a2" name="question76" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)旅行社经理 
        <input type="radio" id="q76a3" name="question76" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题77 -->
<div class="question-group">
    <div class="question-label">77. “惊讶”与“新奇”犹如“惧怕”与：</div>
    <label class="custom-radio">(A)勇敢 
        <input type="radio" id="q77a1" name="question77" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)焦虑
        <input type="radio" id="q77a2" name="question77" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)恐怖 
        <input type="radio" id="q77a3" name="question77" value="1">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题78 -->
<div class="question-group">
    <div class="question-label">78. 本题后面列出的三个分数，哪一个数与其它两个不类同：</div>
    <label class="custom-radio">(A)3/7 
        <input type="radio" id="q78a1" name="question78" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)3/9
        <input type="radio" id="q78a2" name="question78" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)3/11 
        <input type="radio" id="q78a3" name="question78" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题79 -->
<div class="question-group">
    <div class="question-label">79. 不知为什么，有些人总是回避或冷淡我：</div> 
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q79a1" name="question79" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q79a2" name="question79" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q79a3" name="question79" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题80 -->
<div class="question-group">
    <div class="question-label">80. 我虽然善意待人，但常常得不到好报：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q80a1" name="question80" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q80a2" name="question80" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q80a3" name="question80" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题81 -->
<div class="question-group">
    <div class="question-label">81. 我不喜欢争强好胜的人：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q81a1" name="question81" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q81a2" name="question81" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q81a3" name="question81" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题82 -->
<div class="question-group">
    <div class="question-label">82. 和一般人相比，我的朋友的确太少：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q82a1" name="question82" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q82a2" name="question82" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q82a3" name="question82" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题83 -->
<div class="question-group">
    <div class="question-label">83. 不在万不得已的情况下，我总是回避参加应酬性的活动：</div> 
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q83a1" name="question83" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q83a2" name="question83" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q83a3" name="question83" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题84 -->
<div class="question-group">
    <div class="question-label">84. 我认为对领导逢迎得当，比工作表现更重要：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q84a1" name="question84" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q84a2" name="question84" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q84a3" name="question84" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题85 -->
<div class="question-group">
    <div class="question-label">85. 参加竞赛时，我总是着重在竞赛的活动，而不计较其成败：</div>
    <label class="custom-radio">(A)总是如此 
        <input type="radio" id="q85a1" name="question85" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)一般如此
        <input type="radio" id="q85a2" name="question85" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)偶然如此 
        <input type="radio" id="q85a3" name="question85" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题86 -->
<div class="question-group">
    <div class="question-label">86. 按照我个人的意愿，我希望做的工作是：</div>
    <label class="custom-radio">(A)有固定而可靠的工资收入 
        <input type="radio" id="q86a1" name="question86" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q86a2" name="question86" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)工资高低应随我的工作表现随时调整 
        <input type="radio" id="q86a3" name="question86" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题87 -->
<div class="question-group">
    <div class="question-label">87. 我愿意阅读：</div> 
    <label class="custom-radio">(A)军事与政治的实事记载 
        <input type="radio" id="q87a1" name="question87" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q87a2" name="question87" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)富有情感和幻想的作品 
        <input type="radio" id="q87a3" name="question87" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题88 -->
<div class="question-group">
    <div class="question-label">88. 我认为有许多人之所以不敢犯罪，其主要原因是惧怕惩罚：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q88a1" name="question88" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q88a2" name="question88" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q88a3" name="question88" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题89 -->
<div class="question-group">
    <div class="question-label">89. 我的父母从来不严格要求我事事顺从：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q89a1" name="question89" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q89a2" name="question89" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q89a3" name="question89" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题90 -->
<div class="question-group">
    <div class="question-label">90. “百折不挠、再接再厉”的精神似乎被人们所忽略：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q90a1" name="question90" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q90a2" name="question90" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q90a3" name="question90" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题91 -->
<div class="question-group">
    <div class="question-label">91. 当有人对我发火时，我总是：</div>
    <label class="custom-radio">(A)设法使他镇静下来 
        <input type="radio" id="q91a1" name="question91" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不太确定
        <input type="radio" id="q91a2" name="question91" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)也会发起火来 
        <input type="radio" id="q91a3" name="question91" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题92 -->
<div class="question-group">
    <div class="question-label">92. 我希望：</div>
    <label class="custom-radio">(A)人们都要友好相处 
        <input type="radio" id="q92a1" name="question92" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q92a2" name="question92" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)进行斗争 
        <input type="radio" id="q92a3" name="question92" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题93 -->
<div class="question-group">
    <div class="question-label">93. 无论是在极高的房屋上还是在极深的隧道中，我很少感到胆怯不安：</div> 
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q93a1" name="question93" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q93a2" name="question93" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q93a3" name="question93" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题94 -->
<div class="question-group">
    <div class="question-label">94. 只要没有过错，不管别人怎么说，我总能心安理得：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q94a1" name="question94" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q94a2" name="question94" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q94a3" name="question94" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题95 -->
<div class="question-group">
    <div class="question-label">95. 我认为凡是无法用理智来解决的问题，有时就不得不靠权力处理：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q95a1" name="question95" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q95a2" name="question95" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q95a3" name="question95" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题96 -->
<div class="question-group">
    <div class="question-label">96. 我在年轻的时候和异性交往：</div>
    <label class="custom-radio">(A)较多 
        <input type="radio" id="q96a1" name="question96" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q96a2" name="question96" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)较别人少 
        <input type="radio" id="q96a3" name="question96" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题97 -->
<div class="question-group">
    <div class="question-label">97. 我在社团活动中，是一个活跃分子：</div> 
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q97a1" name="question97" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q97a2" name="question97" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q97a3" name="question97" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题98 -->
<div class="question-group">
    <div class="question-label">98. 在人声嘈杂中，我仍然能不受干扰，专心工作：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q98a1" name="question98" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q98a2" name="question98" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q98a3" name="question98" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题99 -->
<div class="question-group">
    <div class="question-label">99. 在某些心境下，我常常因为困惑陷入空想而将工作搁置下来：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q99a1" name="question99" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q99a2" name="question99" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q99a3" name="question99" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题100 -->
<div class="question-group">
    <div class="question-label">100. 我很少用难堪的语言去刺伤别人的感情：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q100a1" name="question100" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不太确定
        <input type="radio" id="q100a2" name="question100" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q100a3" name="question100" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题101 -->
<div class="question-group">
    <div class="question-label">101. 如果让我选择我宁愿做：</div>
    <label class="custom-radio">(A)列车员 
        <input type="radio" id="q101a1" name="question101" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不确定
        <input type="radio" id="q101a2" name="question101" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)描图员 
        <input type="radio" id="q101a3" name="question101" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题102 -->
<div class="question-group">
    <div class="question-label">102. “理不胜词”的意思是：</div> 
    <label class="custom-radio">(A)理不如词 
        <input type="radio" id="q102a1" name="question102" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)理多而词少
        <input type="radio" id="q102a2" name="question102" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)词藻华丽而理不足 
        <input type="radio" id="q102a3" name="question102" value="1">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题103 -->
<div class="question-group">
    <div class="question-label">103. “铁锹”与“挖掘”犹如“刀子”与：</div>
    <label class="custom-radio">(A)琢磨 
        <input type="radio" id="q103a1" name="question103" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)切割
        <input type="radio" id="q103a2" name="question103" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)铲除 
        <input type="radio" id="q103a3" name="question103" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题104 -->
<div class="question-group">
    <div class="question-label">104. 我在大街上，常常避开我所不愿意打招呼的人：</div>
    <label class="custom-radio">(A)极少如此 
        <input type="radio" id="q104a1" name="question104" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)偶然如此
        <input type="radio" id="q104a2" name="question104" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)有时如此 
        <input type="radio" id="q104a3" name="question104" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题105 -->
<div class="question-group">
    <div class="question-label">105. 当我聚精会神地听音乐时，假使有人在旁边高谈阔论：</div>
    <label class="custom-radio">(A)我仍然专心听音乐 
        <input type="radio" id="q105a1" name="question105" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q105a2" name="question105" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不能专心而感到愤怒 
        <input type="radio" id="q105a3" name="question105" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题106 -->
<div class="question-group">
    <div class="question-label">106. 在课堂上如果我的意见与老师的不同，我常常：</div> 
    <label class="custom-radio">(A)保持沉默 
        <input type="radio" id="q106a1" name="question106" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q106a2" name="question106" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)当场表明立场 
        <input type="radio" id="q106a3" name="question106" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题107 -->
<div class="question-group">
    <div class="question-label">107. 我单独与异性谈话时，总显得不自然：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q107a1" name="question107" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q107a2" name="question107" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q107a3" name="question107" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题108 -->
<div class="question-group">
    <div class="question-label">108. 我在待人接物方面，的确不太成功：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q108a1" name="question108" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不完全是这样
        <input type="radio" id="q108a2" name="question108" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q108a3" name="question108" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题109 -->
<div class="question-group">
    <div class="question-label">109. 每当做一个困难工作时，我总是：</div>
    <label class="custom-radio">(A)预先做好准备 
        <input type="radio" id="q109a1" name="question109" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q109a2" name="question109" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)相信到时候总会有办法解决的 
        <input type="radio" id="q109a3" name="question109" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题110 -->
<div class="question-group">
    <div class="question-label">110. 在我结交的朋友中，男女各占一半：</div> 
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q110a1" name="question110" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q110a2" name="question110" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q110a3" name="question110" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题111 -->
<div class="question-group">
    <div class="question-label">111. 我在结交朋友方面：</div>
    <label class="custom-radio">(A)结识很多人 
        <input type="radio" id="q111a1" name="question111" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q111a2" name="question111" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)维持几个深交的朋友 
        <input type="radio" id="q111a3" name="question111" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题112 -->
<div class="question-group">
    <div class="question-label">112. 我愿意做一个社会科学家，而不愿意做一个机械工程师：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q112a1" name="question112" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不确定
        <input type="radio" id="q112a2" name="question112" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q112a3" name="question112" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题113 -->
<div class="question-group">
    <div class="question-label">113. 如果我发现了别人的缺点，我会不顾一切地提出指责：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q113a1" name="question113" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q113a2" name="question113" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q113a3" name="question113" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题114 -->
<div class="question-group">
    <div class="question-label">114. 我善于设法影响和我一起工作的同事，使他们能协助我实现我所计划的目标：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q114a1" name="question114" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q114a2" name="question114" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q114a3" name="question114" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题115 -->
<div class="question-group">
    <div class="question-label">115. 我喜欢做戏剧、音乐、歌舞、新闻采访等工作：</div> 
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q115a1" name="question115" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q115a2" name="question115" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q115a3" name="question115" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题116 -->
<div class="question-group">
    <div class="question-label">116. 当人们表扬我的时候，我总觉得羞愧窘促：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q116a1" name="question116" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q116a2" name="question116" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q116a3" name="question116" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题117 -->
<div class="question-group">
    <div class="question-label">117. 我认为一个国家最需要解决的问题是：</div>
    <label class="custom-radio">(A)政治问题 
        <input type="radio" id="q117a1" name="question117" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不太确定
        <input type="radio" id="q117a2" name="question117" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)道德问题 
        <input type="radio" id="q117a3" name="question117" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题118 -->
<div class="question-group">
    <div class="question-label">118. 有时我会无故产生一种面临大祸的恐惧：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q118a1" name="question118" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)有时如此
        <input type="radio" id="q118a2" name="question118" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q118a3" name="question118" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题119 -->
<div class="question-group">
    <div class="question-label">119. 我在童年时害怕黑暗的次数：</div> 
    <label class="custom-radio">(A)极多 
        <input type="radio" id="q119a1" name="question119" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不太多
        <input type="radio" id="q119a2" name="question119" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)几乎没有 
        <input type="radio" id="q119a3" name="question119" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题120 -->
<div class="question-group">
    <div class="question-label">120. 在闲暇的时候，我喜欢：</div>
    <label class="custom-radio">(A)看一些历史性的探险电影 
        <input type="radio" id="q120a1" name="question120" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q120a2" name="question120" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)读一本科学性的幻想小说 
        <input type="radio" id="q120a3" name="question120" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题121 -->
<div class="question-group">
    <div class="question-label">121. 当人们批评我古怪不正常时，我：</div>
    <label class="custom-radio">(A)非常气恼 
        <input type="radio" id="q121a1" name="question121" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)有些动气
        <input type="radio" id="q121a2" name="question121" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)无所谓 
        <input type="radio" id="q121a3" name="question121" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题122 -->
<div class="question-group">
    <div class="question-label">122. 到一个新城市里去找地址，我：</div>
    <label class="custom-radio">(A)找人问路 
        <input type="radio" id="q122a1" name="question122" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q122a2" name="question122" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)参考市区地图 
        <input type="radio" id="q122a3" name="question122" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题123 -->
<div class="question-group">
    <div class="question-label">123. 当朋友声明他要在家休息时，我总是设法怂恿他同我一起到外面去游览：</div> 
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q123a1" name="question123" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q123a2" name="question123" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q123a3" name="question123" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题124 -->
<div class="question-group">
    <div class="question-label">124. 在就寝时我常常：</div>
    <label class="custom-radio">(A)不易入睡 
        <input type="radio" id="q124a1" name="question124" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q124a2" name="question124" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)极易入睡 
        <input type="radio" id="q124a3" name="question124" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题125 -->
<div class="question-group">
    <div class="question-label">125. 有人烦扰我时，我：</div>
    <label class="custom-radio">(A)能不露声色 
        <input type="radio" id="q125a1" name="question125" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q125a2" name="question125" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)总要说给别人听，以泄气愤 
        <input type="radio" id="q125a3" name="question125" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题126 -->
<div class="question-group">
    <div class="question-label">126. 如果待遇相同，我愿做一个：</div>
    <label class="custom-radio">(A)律师 
        <input type="radio" id="q126a1" name="question126" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不确定
        <input type="radio" id="q126a2" name="question126" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)航海员 
        <input type="radio" id="q126a3" name="question126" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题127 -->
<div class="question-group">
    <div class="question-label">127. “时间变成了永恒”这是比喻：</div> 
    <label class="custom-radio">(A)时间过得很快 
        <input type="radio" id="q127a1" name="question127" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)忘了时间
        <input type="radio" id="q127a2" name="question127" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)光阴一去不复返 
        <input type="radio" id="q127a3" name="question127" value="1">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题128 -->
<div class="question-group">
    <div class="question-label">128. 本题后面列的哪一项应接在X0000XX000XXX的后面？</div>
    <label class="custom-radio">(A)X0X0 
        <input type="radio" id="q128a1" name="question128" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)00X
        <input type="radio" id="q128a2" name="question128" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)0XX 
        <input type="radio" id="q128a3" name="question128" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题129 -->
<div class="question-group">
    <div class="question-label">129. 我不论到什么地方，都能清楚地辨别方向：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q129a1" name="question129" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q129a2" name="question129" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q129a3" name="question129" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题130 -->
<div class="question-group">
    <div class="question-label">130. 我热爱所学的专业和从事的工作：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q130a1" name="question130" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q130a2" name="question130" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q130a3" name="question130" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题131 -->
<div class="question-group">
    <div class="question-label">131. 如果我急于想借朋友的东西，而朋友又不在家时，我认为不告而取也没有关系：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q131a1" name="question131" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q131a2" name="question131" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q131a3" name="question131" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题132 -->
<div class="question-group">
    <div class="question-label">132. 我喜欢向朋友讲述一些我个人有趣的经历：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q132a1" name="question132" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q132a2" name="question132" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q132a3" name="question132" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题133 -->
<div class="question-group">
    <div class="question-label">133. 我宁愿做一个：</div> 
    <label class="custom-radio">(A)演员 
        <input type="radio" id="q133a1" name="question133" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不确定
        <input type="radio" id="q133a2" name="question133" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)建筑师 
        <input type="radio" id="q133a3" name="question133" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题134 -->
<div class="question-group">
    <div class="question-label">134. 业余时间，我总是做好安排，不使时间浪费：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q134a1" name="question134" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q134a2" name="question134" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q134a3" name="question134" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题135 -->
<div class="question-group">
    <div class="question-label">135. 在和别人交往中，我总是无缘无故地产生一种自卑感：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q135a1" name="question135" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q135a2" name="question135" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q135a3" name="question135" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题136 -->
<div class="question-group">
    <div class="question-label">136. 和不熟识的人交谈对我来说：</div>
    <label class="custom-radio">(A)毫无困难 
        <input type="radio" id="q136a1" name="question136" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q136a2" name="question136" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)是一件难事 
        <input type="radio" id="q136a3" name="question136" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题137 -->
<div class="question-group">
    <div class="question-label">137. 我所喜欢的音乐是：</div> 
    <label class="custom-radio">(A)轻松活泼的 
        <input type="radio" id="q137a1" name="question137" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q137a2" name="question137" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)富于感情的 
        <input type="radio" id="q137a3" name="question137" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题138 -->
<div class="question-group">
    <div class="question-label">138. 我爱想入非非：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q138a1" name="question138" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q138a2" name="question138" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q138a3" name="question138" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题139 -->
<div class="question-group">
    <div class="question-label">139. 我认为未来二十年的世界局势定将好转：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q139a1" name="question139" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q139a2" name="question139" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q139a3" name="question139" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题140 -->
<div class="question-group">
    <div class="question-label">140. 在童年时，我喜欢阅读：</div>
    <label class="custom-radio">(A)神话幻想故事； 
        <input type="radio" id="q140a1" name="question140" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不确定
        <input type="radio" id="q140a2" name="question140" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)战争故事 
        <input type="radio" id="q140a3" name="question140" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题141 -->
<div class="question-group">
    <div class="question-label">141. 我向来都对机械、汽车等发生兴趣：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q141a1" name="question141" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q141a2" name="question141" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q141a3" name="question141" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题142 -->
<div class="question-group">
    <div class="question-label">142. 即使让我做一个缓刑释放的罪犯的管理人，我也会把工作搞得较好：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q142a1" name="question142" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q142a2" name="question142" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q142a3" name="question142" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题143 -->
<div class="question-group">
    <div class="question-label">143. 我仅仅被认为是一个能够苦干而稍有成就的人而已：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q143a1" name="question143" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q143a2" name="question143" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q143a3" name="question143" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题144 -->
<div class="question-group">
    <div class="question-label">144. 就是在不顺利的情况下，我仍能保持精神振奋：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q144a1" name="question144" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q144a2" name="question144" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q144a3" name="question144" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题145 -->
<div class="question-group">
    <div class="question-label">145. 我认为节制生育是解决经济与和平问题的重要条件：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q145a1" name="question145" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不太确定
        <input type="radio" id="q145a2" name="question145" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q145a3" name="question145" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题146 -->
<div class="question-group">
    <div class="question-label">146. 在工作中我喜欢独自筹划，不愿受别人干涉：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q146a1" name="question146" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q146a2" name="question146" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q146a3" name="question146" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题147 -->
<div class="question-group">
    <div class="question-label">147. 尽管有的同事和我意见不和，但我仍能跟他团结：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q147a1" name="question147" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q147a2" name="question147" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q147a3" name="question147" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题148 -->
<div class="question-group">
    <div class="question-label">148. 我在工作和学习上，总是设法使自己不粗心大意、忽略细节：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q148a1" name="question148" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q148a2" name="question148" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q148a3" name="question148" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题149 -->
<div class="question-group">
    <div class="question-label">149. 在和别人争辩或险遭事故后，我常常表现出震颤、精疲力尽、不能安心工作：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q149a1" name="question149" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q149a2" name="question149" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q149a3" name="question149" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题150 -->
<div class="question-group">
    <div class="question-label">150. 未经医生处方，我是从不乱吃药的：</div>
    <label class="custom-radio">(A)是的 
        <input type="radio" id="q150a1" name="question150" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q150a2" name="question150" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的 
        <input type="radio" id="q150a3" name="question150" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题151 -->
<div class="question-group">
    <div class="question-label">151. 根据我个人的兴趣，我愿参加：</div>
    <label class="custom-radio">(A)摄影组活动
        <input type="radio" id="q151a1" name="question151" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不确定
        <input type="radio" id="q151a2" name="question151" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)文娱队活动
        <input type="radio" id="q151a3" name="question151" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题152 -->
<div class="question-group">
    <div class="question-label">152. “星火”与“燎原”犹如“姑息”与：</div>
    <label class="custom-radio">(A)同情
        <input type="radio" id="q152a1" name="question152" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)养奸
        <input type="radio" id="q152a2" name="question152" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)纵容
        <input type="radio" id="q152a3" name="question152" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题153 -->
<div class="question-group">
    <div class="question-label">153. “钟表”与“时间”犹如“裁缝”与：</div>
    <label class="custom-radio">(A)服装
        <input type="radio" id="q153a1" name="question153" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)剪刀
        <input type="radio" id="q153a2" name="question153" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)布料
        <input type="radio" id="q153a3" name="question153" value="1">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题154 -->
<div class="question-group">
    <div class="question-label">154. 生动的梦境，常常干扰我的睡眠：</div>
    <label class="custom-radio">(A)经常如此
        <input type="radio" id="q154a1" name="question154" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)偶然如此
        <input type="radio" id="q154a2" name="question154" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)从不如此
        <input type="radio" id="q154a3" name="question154" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题155 -->
<div class="question-group">
    <div class="question-label">155. 我爱打抱不平：</div>
    <label class="custom-radio">(A)是的
        <input type="radio" id="q155a1" name="question155" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q155a2" name="question155" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的
        <input type="radio" id="q155a3" name="question155" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题156 -->
<div class="question-group">
    <div class="question-label">156. 如果我要到一个新城市，我要：</div>
    <label class="custom-radio">(A)到处闲逛
        <input type="radio" id="q156a1" name="question156" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不确定
        <input type="radio" id="q156a2" name="question156" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)避免到不安全的地方去
        <input type="radio" id="q156a3" name="question156" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题157 -->
<div class="question-group">
    <div class="question-label">157. 我爱穿朴素的衣服，不愿穿华丽的服装：</div>
    <label class="custom-radio">(A)是的
        <input type="radio" id="q157a1" name="question157" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不太确定
        <input type="radio" id="q157a2" name="question157" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的
        <input type="radio" id="q157a3" name="question157" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题158 -->
<div class="question-group">
    <div class="question-label">158. 我认为安静的娱乐远远胜于热闹的宴会：</div>
    <label class="custom-radio">(A)是的
        <input type="radio" id="q158a1" name="question158" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不太确定
        <input type="radio" id="q158a2" name="question158" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的
        <input type="radio" id="q158a3" name="question158" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题159 -->
<div class="question-group">
    <div class="question-label">159. 我明知自己有缺点，但不愿意接受别人的批评：</div>
    <label class="custom-radio">(A)偶然如此
        <input type="radio" id="q159a1" name="question159" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)极少如此
        <input type="radio" id="q159a2" name="question159" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)从不如此
        <input type="radio" id="q159a3" name="question159" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题160 -->
<div class="question-group">
    <div class="question-label">160. 我总是把“是非善恶”作为处理问题的原则：</div>
    <label class="custom-radio">(A)是的
        <input type="radio" id="q160a1" name="question160" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q160a2" name="question160" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的
        <input type="radio" id="q160a3" name="question160" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题161 -->
<div class="question-group">
    <div class="question-label">161. 当我工作时，我不喜欢有许多人在旁观看：</div>
    <label class="custom-radio">(A)是的
        <input type="radio" id="q161a1" name="question161" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q161a2" name="question161" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的
        <input type="radio" id="q161a3" name="question161" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题162 -->
<div class="question-group">
    <div class="question-label">162. 我认为侮辱那些有错误但有文化教养的人，如医生、教师等也是不应该的：</div>
    <label class="custom-radio">(A)是的
        <input type="radio" id="q162a1" name="question162" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q162a2" name="question162" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的
        <input type="radio" id="q162a3" name="question162" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题163 -->
<div class="question-group">
    <div class="question-label">163. 在各种课程中，我喜欢：</div>
    <label class="custom-radio">(A)语文
        <input type="radio" id="q163a1" name="question163" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不确定
        <input type="radio" id="q163a2" name="question163" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)数学
        <input type="radio" id="q163a3" name="question163" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题164 -->
<div class="question-group">
    <div class="question-label">164. 那些自以为是、道貌岸然的人使我生气：</div>
    <label class="custom-radio">(A)是的
        <input type="radio" id="q164a1" name="question164" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q164a2" name="question164" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的
        <input type="radio" id="q164a3" name="question164" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题165 -->
<div class="question-group">
    <div class="question-label">165. 和循规蹈矩的人交谈，我觉得：</div>
    <label class="custom-radio">(A)很有兴趣、并有所得
        <input type="radio" id="q165a1" name="question165" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q165a2" name="question165" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)他们的思想简单，使我厌烦
        <input type="radio" id="q165a3" name="question165" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题166 -->
<div class="question-group">
    <div class="question-label">166. 我喜欢：</div>
    <label class="custom-radio">(A)有几个有时对我很苛求但富有感情的朋友
        <input type="radio" id="q166a1" name="question166" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q166a2" name="question166" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不受别人的干涉
        <input type="radio" id="q166a3" name="question166" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题167 -->
<div class="question-group">
    <div class="question-label">167. 如果征求我的意见，我赞同：</div>
    <label class="custom-radio">(A)根绝精神病患者及智能低下的人的生育
        <input type="radio" id="q167a1" name="question167" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不确定
        <input type="radio" id="q167a2" name="question167" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)杀人犯判处死刑
        <input type="radio" id="q167a3" name="question167" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题168 -->
<div class="question-group">
    <div class="question-label">168. 有时我会无缘无故地感到沮丧痛苦：</div>
    <label class="custom-radio">(A)是的
        <input type="radio" id="q168a1" name="question168" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q168a2" name="question168" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的
        <input type="radio" id="q168a3" name="question168" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题169 -->
<div class="question-group">
    <div class="question-label">169. 当和立场相反的人辩论时，我主张：</div>
    <label class="custom-radio">(A)尽量找出基本概念的差异
        <input type="radio" id="q169a1" name="question169" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q169a2" name="question169" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)彼此让步
        <input type="radio" id="q169a3" name="question169" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题170 -->
<div class="question-group">
    <div class="question-label">170. 我一向是重感情，不重理智，因此我的观点常常动摇不定：</div>
    <label class="custom-radio">(A)是的
        <input type="radio" id="q170a1" name="question170" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不致如此
        <input type="radio" id="q170a2" name="question170" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的
        <input type="radio" id="q170a3" name="question170" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题171 -->
<div class="question-group">
    <div class="question-label">171. 我的学习多赖于：</div>
    <label class="custom-radio">(A)阅读书刊
        <input type="radio" id="q171a1" name="question171" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q171a2" name="question171" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)参加集体讨论
        <input type="radio" id="q171a3" name="question171" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题172 -->
<div class="question-group">
    <div class="question-label">172. 我宁愿选择一个工资较高的工作，不在乎是否有保障，不愿做工资低的固定工作：</div>
    <label class="custom-radio">(A)是的
        <input type="radio" id="q172a1" name="question172" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不太确定
        <input type="radio" id="q172a2" name="question172" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的
        <input type="radio" id="q172a3" name="question172" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题173 -->
<div class="question-group">
    <div class="question-label">173. 在参加讨论时，我总是能把握往自己的立场：</div>
    <label class="custom-radio">(A)经常如此
        <input type="radio" id="q173a1" name="question173" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)一般如此
        <input type="radio" id="q173a2" name="question173" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)必要时才能如此
        <input type="radio" id="q173a3" name="question173" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题174 -->
<div class="question-group">
    <div class="question-label">174. 我常常被一些无所谓的小事所烦扰：</div>
    <label class="custom-radio">(A)是的
        <input type="radio" id="q174a1" name="question174" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q174a2" name="question174" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的
        <input type="radio" id="q174a3" name="question174" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题175 -->
<div class="question-group">
    <div class="question-label">175. 我宁愿住在嘈杂的闹市区，而不愿住在僻静的郊区：</div>
    <label class="custom-radio">(A)是的
        <input type="radio" id="q175a1" name="question175" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不太确定
        <input type="radio" id="q175a2" name="question175" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的
        <input type="radio" id="q175a3" name="question175" value="2">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题176 -->
<div class="question-group">
    <div class="question-label">176. 下列工作如果让我挑选的话，我愿做：</div>
    <label class="custom-radio">(A)少先队辅导员
        <input type="radio" id="q176a1" name="question176" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不太确定
        <input type="radio" id="q176a2" name="question176" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)修表工作
        <input type="radio" id="q176a3" name="question176" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题177 -->
<div class="question-group">
    <div class="question-label">177. 一人( )事，众人受累：</div>
    <label class="custom-radio">(A)偾
        <input type="radio" id="q177a1" name="question177" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)愤
        <input type="radio" id="q177a2" name="question177" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)喷
        <input type="radio" id="q177a3" name="question177" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题178 -->
<div class="question-group">
    <div class="question-label">178. 望子成龙的家长往往( )苗助长：</div>
    <label class="custom-radio">(A)揠
        <input type="radio" id="q178a1" name="question178" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)堰
        <input type="radio" id="q178a2" name="question178" value="0">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)偃
        <input type="radio" id="q178a3" name="question178" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题179 -->
<div class="question-group">
    <div class="question-label">179. 气候的变化并不影响我的情绪：</div>
    <label class="custom-radio">(A)是的
        <input type="radio" id="q179a1" name="question179" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q179a2" name="question179" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的
        <input type="radio" id="q179a3" name="question179" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题180 -->
<div class="question-group">
    <div class="question-label">180. 因为我对一切问题都有一些见解，所以大家都认为我是一个有头脑的人：</div>
    <label class="custom-radio">(A)是的
        <input type="radio" id="q180a1" name="question180" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q180a2" name="question180" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的
        <input type="radio" id="q180a3" name="question180" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题181 -->
<div class="question-group">
    <div class="question-label">181. 我讲话的声音：</div>
    <label class="custom-radio">(A)宏亮
        <input type="radio" id="q181a1" name="question181" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q181a2" name="question181" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)低沉
        <input type="radio" id="q181a3" name="question181" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题182 -->
<div class="question-group">
    <div class="question-label">182. 一般人都认为我是一个活跃热情的人：</div>
    <label class="custom-radio">(A)是的
        <input type="radio" id="q182a1" name="question182" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q182a2" name="question182" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的
        <input type="radio" id="q182a3" name="question182" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题183 -->
<div class="question-group">
    <div class="question-label">183. 我喜欢做出差机会较多的工作：</div>
    <label class="custom-radio">(A)是的
        <input type="radio" id="q183a1" name="question183" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q183a2" name="question183" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的
        <input type="radio" id="q183a3" name="question183" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题184 -->
<div class="question-group">
    <div class="question-label">184. 我做事严格，力求把事情办得尽善尽美：</div>
    <label class="custom-radio">(A)是的
        <input type="radio" id="q184a1" name="question184" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q184a2" name="question184" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的
        <input type="radio" id="q184a3" name="question184" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题185 -->
<div class="question-group">
    <div class="question-label">185. 在取回或归还借的东西时，我总是检查，看是否保持原样：</div>
    <label class="custom-radio">(A)是的
        <input type="radio" id="q185a1" name="question185" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)介于AC之间
        <input type="radio" id="q185a2" name="question185" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的
        <input type="radio" id="q185a3" name="question185" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题186 -->
<div class="question-group">
    <div class="question-label">186. 我通常总是精力充沛，忙碌多事：</div>
    <label class="custom-radio">(A)是的
        <input type="radio" id="q186a1" name="question186" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不一定
        <input type="radio" id="q186a2" name="question186" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的
        <input type="radio" id="q186a3" name="question186" value="0">
        <span class="checkmark"></span>
    </label>
</div>
<!-- 问题187 -->
<div class="question-group">
    <div class="question-label">187. 我确信我没有遗漏或不经心回答上面的任何问题：</div>
    <label class="custom-radio">(A)是的
        <input type="radio" id="q187a1" name="question187" value="1">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(B)不确定
        <input type="radio" id="q187a2" name="question187" value="2">
        <span class="checkmark"></span>
    </label>
    <label class="custom-radio">(C)不是的
        <input type="radio" id="q187a3" name="question187" value="3">
        <span class="checkmark"></span>
    </label>
</div>
        <input type="submit" value="提交" class="submit-button"> 
</form></div>

<p id="result" class="text-center mt-4"></p>
        <div id="canvasContainer" style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <canvas id="myRadarChart" width="600px" height="600px"></canvas>
        </div>
    <script src="../../../assets/js/script.js"></script>
    <script src="https://www.paypal.com/sdk/js?client-id=BAARHNfmKzHLXfr68uX0--8arP3l0m-JLplAUepTZZsoSZXXIkhyC4uWP8XjQfCfduITf_zf1cOcrKkwdk&components=hosted-buttons&disable-funding=venmo&currency=USD"></script>
<div id="paypal-container-4CGVRXBUZ5BB6"></div>
<script>
  paypal.HostedButtons({
    hostedButtonId: "4CGVRXBUZ5BB6",
  }).render("#paypal-container-4CGVRXBUZ5BB6")
</script>
</body>
</html>