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
    <link href="{{ '/assets/css/tailwind.css' | relative_url }}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+SC:400,500,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <style>
        body {
            font-family: 'Noto Sans SC', sans-serif;
            background-color: #f4f7f6;
        }
        .custom-radio {
            display: block;
            position: relative;
            padding: 12px 15px 12px 45px;
            margin: 10px 0;
            cursor: pointer;
            font-size: 18px;
            background: #fff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            transition: all 0.2s;
            text-align: left;
        }
        .custom-radio:hover {
            background-color: #f0fff0;
            border-color: #98FB98;
        }
        .custom-radio input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
        }
        .checkmark {
            position: absolute;
            top: 50%;
            left: 15px;
            transform: translateY(-50%);
            height: 20px;
            width: 20px;
            background-color: #eee;
            border-radius: 50%;
            border: 2px solid #ddd;
        }
        .custom-radio input:checked ~ .checkmark {
            background-color: #006400;
            border-color: #006400;
        }
        .custom-radio input:checked + .checkmark::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: white;
        }
        .submit-button {
            background-color: #006400;
            color: white;
            font-size: 20px;
            padding: 12px 30px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: 20px auto;
            transition: background-color 0.3s;
            display: none; /* Hidden until last question */
        }
        .submit-button:hover {
            background-color: #004d00;
        }
        
        /* Roller / Slider Styles */
        #quiz-container {
            max-width: 800px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            height: 600px; /* Taller to show neighbors */
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .question-wrapper {
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .question-group {
            padding: 40px 60px;
            box-sizing: border-box;
            min-height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            transition: opacity 0.5s;
            opacity: 0;
        }
        .question-label {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 25px;
            color: #333;
            line-height: 1.4;
        }
        .nav-controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 800px;
            margin: 20px auto;
            padding: 0 20px;
        }
        .nav-btn {
            z-index: 30;
            padding: 10px 20px;
            border-radius: 8px;
            border: 1px solid #006400;
            background: white;
            color: #006400;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        .nav-btn:hover:not(:disabled) {
            background: #006400;
            color: white;
        }
        .nav-btn:disabled {
            border-color: #ccc;
            color: #ccc;
            cursor: not-allowed;
            opacity: 0.3;
        }
        .progress-container {
            width: 100%;
            height: 8px;
            background: #e0e0e0;
            position: absolute;
            top: 0;
            z-index: 10;
        }
        #progress-bar {
            height: 100%;
            background: #98FB98;
            width: 0%;
            transition: width 0.3s;
        }
        .q-counter {
            text-align: right;
            font-size: 14px;
            color: #888;
            margin-bottom: 10px;
        }
        #error-msg {
            color: #ff4d4d;
            text-align: center;
            margin-top: 10px;
            font-weight: 600;
            height: 20px;
        }
    </style>
</head>

<body>
    <div class="bg-green-400 py-20">
        <div class="max-w-6xl mx-auto px-4">
            <div class="text-center text-white text-4xl mb-10">SAS</div>
            <div class="flex justify-center space-x-10">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <img src="{{ '/assets/img/闪电.webp' | relative_url }}" loading="lazy" alt="Placeholder image of a 3D model of blue twisted shapes" class="mb-4">
                    <div class="text-gray-700 text-base mb-4">极速测试</div>
                    <div class="text-gray-500 text-sm">依托自己并拥护回答，以了解你的焦虑程度</div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <img src="{{ '/assets/img/记录.webp' | relative_url }}" loading="lazy" alt="Placeholder image of a gold molecular structure" class="mb-4">
                    <div class="text-gray-700 text-base mb-4">查看详细结果</div>
                    <div class="text-gray-500 text-sm">了解您的情绪状况如何影响您生活的所有领域。</div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <img src="{{ '/assets/img/人脑.webp' | relative_url }}" loading="lazy" alt="Placeholder image of purple cards with analytical graphs" class="mb-4">
                    <div class="text-gray-700 text-base mb-4">获取你的潜力</div>
                    <div class="text-gray-500 text-sm">通过可选的高级反馈，成长为您想成为的人。</div>
                </div>
            </div>
        </div>
    </div>
    <div id="quiz-intro">
    <h4 class="text-center mt-8 px-4">下面有20条文字，请仔细阅读每一条,把意思弄明白，然后根据您最近“一周”的实际感觉,在程度中选择与你的情况相符的分数。每道题不要花费太久思考，凭第一印象回答。<br>
    1.	目前主要的情绪和躯体症状的自评请根据自觉症状的程度选择。；<br>
    2.	评定时间为过去一周内或现在；<br></h4>
<div class="max-w-6xl mx-auto px-4 py-8">
    <div id="quiz-container">
        <div class="progress-container"><div id="progress-bar"></div></div>
        <form id="psychologyTest">
            <div class="question-wrapper" id="question-wrapper">
                <!-- 问题 1-20 Content remains same -->
                <div class="question-group">
                    <div class="q-counter">题目 1 / 20</div>
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
                <!-- ... other questions ... -->

                <!-- 问题2 -->
                <div class="question-group">
                    <div class="q-counter">题目 2 / 20</div>
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
                    <div class="q-counter">题目 3 / 20</div>
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
                <div class="question-group">
                    <div class="q-counter">题目 4 / 20</div>
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
                    <div class="q-counter">题目 5 / 20</div>
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
                    <div class="q-counter">题目 6 / 20</div>
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
                    <div class="q-counter">题目 7 / 20</div>
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
                    <div class="q-counter">题目 8 / 20</div>
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
                    <div class="q-counter">题目 9 / 20</div>
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
                    <div class="q-counter">题目 10 / 20</div>
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
                    <div class="q-counter">题目 11 / 20</div>
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
                    <div class="q-counter">题目 12 / 20</div>
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
                    <div class="q-counter">题目 13 / 20</div>
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
                    <div class="q-counter">题目 14 / 20</div>
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
                    <div class="q-counter">题目 15 / 20</div>
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
                    <div class="q-counter">题目 16 / 20</div>
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
                    <div class="q-counter">题目 17 / 20</div>
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
                    <div class="q-counter">题目 18 / 20</div>
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
                    <div class="q-counter">题目 19 / 20</div>
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
                    <div class="q-counter">题目 20 / 20</div>
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
            </div>
            <div id="error-msg"></div>
            <button type="button" class="nav-btn" id="prev-btn" disabled><i class="fas fa-chevron-left"></i></button>
            <button type="button" class="nav-btn" id="next-btn"><i class="fas fa-chevron-right"></i></button>
            <div style="text-align: center; padding-bottom: 20px;">
                <input type="submit" value="提交测评" class="submit-button" id="submit-btn">
            </div>
        </form>
    </div>
</div></div>

<div id="canvasContainer" style="display: none; justify-content: center; align-items: center; height: 100%; opacity: 0; transition: opacity 0.5s ease-in-out;">
    <canvas id="myRadarChart" width="600" height="150"></canvas>
</div>
<p id="resultDisplay" class="text-center mt-4 text-lg"></p>
    <script src="{{ '/assets/js/scriptSAS.js' | relative_url }}"></script>
    
    <div style="margin-top: 40px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
        <h3>支持与购买</h3>
        <div style="display: flex; justify-content: center; align-items: center; gap: 40px; flex-wrap: wrap;">
            <div id="paypal-container-ETWQHQDM7ZDHJ"></div>
            <a href="https://shop.dittopsych.xyz/#/2/detail" target="_blank">
                <img src="/assets/icons/alipay-logo.svg" alt="支付宝" style="width: 150px;">
            </a>
        </div>
    </div>

<script>
  paypal.HostedButtons({
    hostedButtonId: "ETWQHQDM7ZDHJ",
  }).render("#paypal-container-ETWQHQDM7ZDHJ")
</script>


<style>
#kf-btn {
    position: fixed;
    right: 20px;
    bottom: 80px;
    background: #4CAF50;
    color: white;
    padding: 12px 18px;
    border-radius: 50px;
    cursor: pointer;
    z-index: 9999;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}
</style>

<div id="kf-btn" onclick="openKf()">在线咨询木一老师</div>

<script>
function openKf() {
    window.open("https://work.weixin.qq.com/kfid/kfcb22995e95ee10a7e");
}
</script>
</body>
</html>