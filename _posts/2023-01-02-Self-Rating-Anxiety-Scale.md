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

        /* ── Quiz container ── */
        #quiz-container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            padding: 30px 50px 24px;
            box-sizing: border-box;
            position: relative;
        }

        /* Progress bar */
        .progress-container {
            width: 100%;
            height: 6px;
            background: #e0e0e0;
            border-radius: 3px;
            margin-bottom: 28px;
        }
        #progress-bar {
            height: 100%;
            background: #006400;
            border-radius: 3px;
            width: 5%;
            transition: width 0.3s;
        }

        /* Question panels – only .active is shown */
        .question-group {
            display: none;
        }
        .question-group.active {
            display: block;
        }

        .q-counter {
            font-size: 13px;
            color: #888;
            margin-bottom: 12px;
        }
        .question-label {
            font-size: 20px;
            font-weight: 700;
            color: #333;
            line-height: 1.5;
            margin-bottom: 20px;
        }

        /* Radio options */
        .custom-radio {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 13px 16px;
            margin: 8px 0;
            cursor: pointer;
            font-size: 17px;
            background: #fff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            transition: background 0.15s, border-color 0.15s;
        }
        .custom-radio:hover {
            background-color: #f0fff0;
            border-color: #98FB98;
        }
        .custom-radio.selected {
            background-color: #e8f5e9;
            border-color: #006400;
        }
        .custom-radio input[type="radio"] {
            width: 18px;
            height: 18px;
            margin: 0;
            accent-color: #006400;
            cursor: pointer;
            flex-shrink: 0;
        }

        /* Nav buttons */
        .nav-controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 24px;
        }
        .nav-btn {
            padding: 9px 22px;
            border-radius: 8px;
            border: 1px solid #006400;
            background: white;
            color: #006400;
            cursor: pointer;
            font-weight: 600;
            font-size: 15px;
            transition: all 0.2s;
        }
        .nav-btn:hover:not(:disabled) {
            background: #006400;
            color: white;
        }
        .nav-btn:disabled {
            border-color: #ccc;
            color: #ccc;
            cursor: not-allowed;
            opacity: 0.4;
        }

        /* Submit button */
        .submit-button {
            background-color: #006400;
            color: white;
            font-size: 18px;
            padding: 12px 40px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            display: none;
            width: 100%;
            margin-top: 8px;
            transition: background-color 0.2s;
        }
        .submit-button:hover {
            background-color: #004d00;
        }

        #error-msg {
            color: #ff4d4d;
            text-align: center;
            margin-top: 8px;
            font-weight: 600;
            min-height: 20px;
        }
    </style>
</head>

<body>
    <!-- Hero banner -->
    <div class="bg-green-400 py-20">
        <div class="max-w-6xl mx-auto px-4">
            <div class="text-center text-white text-4xl mb-10">SAS</div>
            <div class="flex justify-center space-x-10">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <img src="{{ '/assets/img/闪电.webp' | relative_url }}" loading="lazy" alt="极速测试" class="mb-4">
                    <div class="text-gray-700 text-base mb-4">极速测试</div>
                    <div class="text-gray-500 text-sm">依托自己并拥护回答，以了解你的焦虑程度</div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <img src="{{ '/assets/img/记录.webp' | relative_url }}" loading="lazy" alt="查看详细结果" class="mb-4">
                    <div class="text-gray-700 text-base mb-4">查看详细结果</div>
                    <div class="text-gray-500 text-sm">了解您的情绪状况如何影响您生活的所有领域。</div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <img src="{{ '/assets/img/人脑.webp' | relative_url }}" loading="lazy" alt="获取你的潜力" class="mb-4">
                    <div class="text-gray-700 text-base mb-4">获取你的潜力</div>
                    <div class="text-gray-500 text-sm">通过可选的高级反馈，成长为您想成为的人。</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Instructions -->
    <div id="quiz-intro">
    <h4 class="text-center mt-8 px-4">下面有20条文字，请仔细阅读每一条,把意思弄明白，然后根据您最近"一周"的实际感觉,在程度中选择与你的情况相符的分数。每道题不要花费太久思考，凭第一印象回答。<br>
    1. 目前主要的情绪和躯体症状的自评请根据自觉症状的程度选择；<br>
    2. 评定时间为过去一周内或现在；<br></h4>

    <!-- Quiz -->
    <div class="max-w-6xl mx-auto px-4 py-8">
        <div id="quiz-container">
            <div class="progress-container"><div id="progress-bar"></div></div>

            <form id="psychologyTest">

                <!-- 题目 1 -->
                <div class="question-group active" id="qg-0">
                    <div class="q-counter">题目 1 / 20</div>
                    <div class="question-label">1. 我感到比往常更加神经过敏和焦虑：</div>
                    <label class="custom-radio"><input type="radio" name="question1" value="1"> (A) 没有或很少有</label>
                    <label class="custom-radio"><input type="radio" name="question1" value="2"> (B) 有时有</label>
                    <label class="custom-radio"><input type="radio" name="question1" value="3"> (C) 大部分时间有（经常有）</label>
                    <label class="custom-radio"><input type="radio" name="question1" value="4"> (D) 绝大多数时间有</label>
                </div>

                <!-- 题目 2 -->
                <div class="question-group" id="qg-1">
                    <div class="q-counter">题目 2 / 20</div>
                    <div class="question-label">2. 我无缘无故感到担心：</div>
                    <label class="custom-radio"><input type="radio" name="question2" value="1"> (A) 没有或很少有</label>
                    <label class="custom-radio"><input type="radio" name="question2" value="2"> (B) 有时有</label>
                    <label class="custom-radio"><input type="radio" name="question2" value="3"> (C) 大部分时间有（经常有）</label>
                    <label class="custom-radio"><input type="radio" name="question2" value="4"> (D) 绝大多数时间有</label>
                </div>

                <!-- 题目 3 -->
                <div class="question-group" id="qg-2">
                    <div class="q-counter">题目 3 / 20</div>
                    <div class="question-label">3. 我容易心烦意乱或感到恐慌：</div>
                    <label class="custom-radio"><input type="radio" name="question3" value="1"> (A) 没有或很少有</label>
                    <label class="custom-radio"><input type="radio" name="question3" value="2"> (B) 有时有</label>
                    <label class="custom-radio"><input type="radio" name="question3" value="3"> (C) 大部分时间有（经常有）</label>
                    <label class="custom-radio"><input type="radio" name="question3" value="4"> (D) 绝大多数时间有</label>
                </div>

                <!-- 题目 4 -->
                <div class="question-group" id="qg-3">
                    <div class="q-counter">题目 4 / 20</div>
                    <div class="question-label">4. 我感到我的身体好像被分成几块，支离破碎：</div>
                    <label class="custom-radio"><input type="radio" name="question4" value="1"> (A) 没有或很少有</label>
                    <label class="custom-radio"><input type="radio" name="question4" value="2"> (B) 有时有</label>
                    <label class="custom-radio"><input type="radio" name="question4" value="3"> (C) 大部分时间有（经常有）</label>
                    <label class="custom-radio"><input type="radio" name="question4" value="4"> (D) 绝大多数时间有</label>
                </div>

                <!-- 题目 5（反向） -->
                <div class="question-group" id="qg-4">
                    <div class="q-counter">题目 5 / 20</div>
                    <div class="question-label">5. 我感到事事都很顺利，不会有倒霉的事情发生：</div>
                    <label class="custom-radio"><input type="radio" name="question5" value="4"> (A) 没有或很少有</label>
                    <label class="custom-radio"><input type="radio" name="question5" value="3"> (B) 有时有</label>
                    <label class="custom-radio"><input type="radio" name="question5" value="2"> (C) 大部分时间有（经常有）</label>
                    <label class="custom-radio"><input type="radio" name="question5" value="1"> (D) 绝大多数时间有</label>
                </div>

                <!-- 题目 6 -->
                <div class="question-group" id="qg-5">
                    <div class="q-counter">题目 6 / 20</div>
                    <div class="question-label">6. 我的四肢抖动和震颤：</div>
                    <label class="custom-radio"><input type="radio" name="question6" value="1"> (A) 没有或很少有</label>
                    <label class="custom-radio"><input type="radio" name="question6" value="2"> (B) 有时有</label>
                    <label class="custom-radio"><input type="radio" name="question6" value="3"> (C) 大部分时间有（经常有）</label>
                    <label class="custom-radio"><input type="radio" name="question6" value="4"> (D) 绝大多数时间有</label>
                </div>

                <!-- 题目 7 -->
                <div class="question-group" id="qg-6">
                    <div class="q-counter">题目 7 / 20</div>
                    <div class="question-label">7. 我因头痛、颈痛、背痛而烦恼：</div>
                    <label class="custom-radio"><input type="radio" name="question7" value="1"> (A) 没有或很少有</label>
                    <label class="custom-radio"><input type="radio" name="question7" value="2"> (B) 有时有</label>
                    <label class="custom-radio"><input type="radio" name="question7" value="3"> (C) 大部分时间有（经常有）</label>
                    <label class="custom-radio"><input type="radio" name="question7" value="4"> (D) 绝大多数时间有</label>
                </div>

                <!-- 题目 8 -->
                <div class="question-group" id="qg-7">
                    <div class="q-counter">题目 8 / 20</div>
                    <div class="question-label">8. 我感到无力且容易疲劳：</div>
                    <label class="custom-radio"><input type="radio" name="question8" value="1"> (A) 没有或很少有</label>
                    <label class="custom-radio"><input type="radio" name="question8" value="2"> (B) 有时有</label>
                    <label class="custom-radio"><input type="radio" name="question8" value="3"> (C) 大部分时间有（经常有）</label>
                    <label class="custom-radio"><input type="radio" name="question8" value="4"> (D) 绝大多数时间有</label>
                </div>

                <!-- 题目 9（反向） -->
                <div class="question-group" id="qg-8">
                    <div class="q-counter">题目 9 / 20</div>
                    <div class="question-label">9. 我感到很平静，能安静坐下来：</div>
                    <label class="custom-radio"><input type="radio" name="question9" value="4"> (A) 没有或很少有</label>
                    <label class="custom-radio"><input type="radio" name="question9" value="3"> (B) 有时有</label>
                    <label class="custom-radio"><input type="radio" name="question9" value="2"> (C) 大部分时间有（经常有）</label>
                    <label class="custom-radio"><input type="radio" name="question9" value="1"> (D) 绝大多数时间有</label>
                </div>

                <!-- 题目 10 -->
                <div class="question-group" id="qg-9">
                    <div class="q-counter">题目 10 / 20</div>
                    <div class="question-label">10. 我感到我的心跳较快：</div>
                    <label class="custom-radio"><input type="radio" name="question10" value="1"> (A) 没有或很少有</label>
                    <label class="custom-radio"><input type="radio" name="question10" value="2"> (B) 有时有</label>
                    <label class="custom-radio"><input type="radio" name="question10" value="3"> (C) 大部分时间有（经常有）</label>
                    <label class="custom-radio"><input type="radio" name="question10" value="4"> (D) 绝大多数时间有</label>
                </div>

                <!-- 题目 11 -->
                <div class="question-group" id="qg-10">
                    <div class="q-counter">题目 11 / 20</div>
                    <div class="question-label">11. 我因阵阵的眩晕而不舒服：</div>
                    <label class="custom-radio"><input type="radio" name="question11" value="1"> (A) 没有或很少有</label>
                    <label class="custom-radio"><input type="radio" name="question11" value="2"> (B) 有时有</label>
                    <label class="custom-radio"><input type="radio" name="question11" value="3"> (C) 大部分时间有（经常有）</label>
                    <label class="custom-radio"><input type="radio" name="question11" value="4"> (D) 绝大多数时间有</label>
                </div>

                <!-- 题目 12 -->
                <div class="question-group" id="qg-11">
                    <div class="q-counter">题目 12 / 20</div>
                    <div class="question-label">12. 我有阵阵要昏倒的感觉：</div>
                    <label class="custom-radio"><input type="radio" name="question12" value="1"> (A) 没有或很少有</label>
                    <label class="custom-radio"><input type="radio" name="question12" value="2"> (B) 有时有</label>
                    <label class="custom-radio"><input type="radio" name="question12" value="3"> (C) 大部分时间有（经常有）</label>
                    <label class="custom-radio"><input type="radio" name="question12" value="4"> (D) 绝大多数时间有</label>
                </div>

                <!-- 题目 13（反向） -->
                <div class="question-group" id="qg-12">
                    <div class="q-counter">题目 13 / 20</div>
                    <div class="question-label">13. 我呼吸时进气和出气都不费力：</div>
                    <label class="custom-radio"><input type="radio" name="question13" value="4"> (A) 没有或很少有</label>
                    <label class="custom-radio"><input type="radio" name="question13" value="3"> (B) 有时有</label>
                    <label class="custom-radio"><input type="radio" name="question13" value="2"> (C) 大部分时间有（经常有）</label>
                    <label class="custom-radio"><input type="radio" name="question13" value="1"> (D) 绝大多数时间有</label>
                </div>

                <!-- 题目 14 -->
                <div class="question-group" id="qg-13">
                    <div class="q-counter">题目 14 / 20</div>
                    <div class="question-label">14. 我的手指和脚趾感到麻木和刺痛：</div>
                    <label class="custom-radio"><input type="radio" name="question14" value="1"> (A) 没有或很少有</label>
                    <label class="custom-radio"><input type="radio" name="question14" value="2"> (B) 有时有</label>
                    <label class="custom-radio"><input type="radio" name="question14" value="3"> (C) 大部分时间有（经常有）</label>
                    <label class="custom-radio"><input type="radio" name="question14" value="4"> (D) 绝大多数时间有</label>
                </div>

                <!-- 题目 15 -->
                <div class="question-group" id="qg-14">
                    <div class="q-counter">题目 15 / 20</div>
                    <div class="question-label">15. 我因胃痛和消化不良而苦恼：</div>
                    <label class="custom-radio"><input type="radio" name="question15" value="1"> (A) 没有或很少有</label>
                    <label class="custom-radio"><input type="radio" name="question15" value="2"> (B) 有时有</label>
                    <label class="custom-radio"><input type="radio" name="question15" value="3"> (C) 大部分时间有（经常有）</label>
                    <label class="custom-radio"><input type="radio" name="question15" value="4"> (D) 绝大多数时间有</label>
                </div>

                <!-- 题目 16 -->
                <div class="question-group" id="qg-15">
                    <div class="q-counter">题目 16 / 20</div>
                    <div class="question-label">16. 我必须时常排尿：</div>
                    <label class="custom-radio"><input type="radio" name="question16" value="1"> (A) 没有或很少有</label>
                    <label class="custom-radio"><input type="radio" name="question16" value="2"> (B) 有时有</label>
                    <label class="custom-radio"><input type="radio" name="question16" value="3"> (C) 大部分时间有（经常有）</label>
                    <label class="custom-radio"><input type="radio" name="question16" value="4"> (D) 绝大多数时间有</label>
                </div>

                <!-- 题目 17（反向） -->
                <div class="question-group" id="qg-16">
                    <div class="q-counter">题目 17 / 20</div>
                    <div class="question-label">17. 我的手总是很温暖而干燥：</div>
                    <label class="custom-radio"><input type="radio" name="question17" value="4"> (A) 没有或很少有</label>
                    <label class="custom-radio"><input type="radio" name="question17" value="3"> (B) 有时有</label>
                    <label class="custom-radio"><input type="radio" name="question17" value="2"> (C) 大部分时间有（经常有）</label>
                    <label class="custom-radio"><input type="radio" name="question17" value="1"> (D) 绝大多数时间有</label>
                </div>

                <!-- 题目 18 -->
                <div class="question-group" id="qg-17">
                    <div class="q-counter">题目 18 / 20</div>
                    <div class="question-label">18. 我觉得脸发烧发红：</div>
                    <label class="custom-radio"><input type="radio" name="question18" value="1"> (A) 没有或很少有</label>
                    <label class="custom-radio"><input type="radio" name="question18" value="2"> (B) 有时有</label>
                    <label class="custom-radio"><input type="radio" name="question18" value="3"> (C) 大部分时间有（经常有）</label>
                    <label class="custom-radio"><input type="radio" name="question18" value="4"> (D) 绝大多数时间有</label>
                </div>

                <!-- 题目 19（反向） -->
                <div class="question-group" id="qg-18">
                    <div class="q-counter">题目 19 / 20</div>
                    <div class="question-label">19. 我容易入睡，晚上休息很好：</div>
                    <label class="custom-radio"><input type="radio" name="question19" value="4"> (A) 没有或很少有</label>
                    <label class="custom-radio"><input type="radio" name="question19" value="3"> (B) 有时有</label>
                    <label class="custom-radio"><input type="radio" name="question19" value="2"> (C) 大部分时间有（经常有）</label>
                    <label class="custom-radio"><input type="radio" name="question19" value="1"> (D) 绝大多数时间有</label>
                </div>

                <!-- 题目 20 -->
                <div class="question-group" id="qg-19">
                    <div class="q-counter">题目 20 / 20</div>
                    <div class="question-label">20. 我做恶梦：</div>
                    <label class="custom-radio"><input type="radio" name="question20" value="1"> (A) 没有或很少有</label>
                    <label class="custom-radio"><input type="radio" name="question20" value="2"> (B) 有时有</label>
                    <label class="custom-radio"><input type="radio" name="question20" value="3"> (C) 大部分时间有（经常有）</label>
                    <label class="custom-radio"><input type="radio" name="question20" value="4"> (D) 绝大多数时间有</label>
                </div>

                <div id="error-msg"></div>

                <!-- Nav buttons -->
                <div class="nav-controls">
                    <button type="button" class="nav-btn" id="prev-btn" disabled>
                        <i class="fas fa-chevron-left"></i> 上一题
                    </button>
                    <button type="button" class="nav-btn" id="next-btn">
                        下一题 <i class="fas fa-chevron-right"></i>
                    </button>
                </div>

                <div style="text-align: center; padding-bottom: 10px;">
                    <input type="submit" value="提交测评" class="submit-button" id="submit-btn">
                </div>
            </form>
        </div>
    </div>
    </div><!-- end quiz-intro -->

    <div id="canvasContainer" style="display: none; justify-content: center; align-items: center; height: 100%; opacity: 0; transition: opacity 0.5s ease-in-out;">
        <canvas id="myRadarChart" width="600" height="150"></canvas>
    </div>
    <p id="resultDisplay" class="text-center mt-4 text-lg"></p>

    <script src="{{ '/assets/js/scriptSAS.js' | relative_url }}"></script>

    <script>
    (function () {
        var TOTAL = 20;
        var current = 0; // 0-indexed

        /* ── helpers ── */
        function getGroup(i) { return document.getElementById('qg-' + i); }

        function getCheckedValue(i) {
            var radios = getGroup(i).querySelectorAll('input[type="radio"]');
            for (var r = 0; r < radios.length; r++) {
                if (radios[r].checked) return radios[r].value;
            }
            return null;
        }

        function syncSelectedStyle(groupIndex) {
            var group = getGroup(groupIndex);
            var labels = group.querySelectorAll('.custom-radio');
            labels.forEach(function (lbl) {
                var inp = lbl.querySelector('input[type="radio"]');
                lbl.classList.toggle('selected', inp.checked);
            });
        }

        /* ── render current question ── */
        function render() {
            for (var i = 0; i < TOTAL; i++) {
                var g = getGroup(i);
                if (g) g.classList.toggle('active', i === current);
            }
            syncSelectedStyle(current);

            var prevBtn   = document.getElementById('prev-btn');
            var nextBtn   = document.getElementById('next-btn');
            var submitBtn = document.getElementById('submit-btn');
            var pb        = document.getElementById('progress-bar');

            if (prevBtn) prevBtn.disabled = (current === 0);

            // Show next or hide it on last question
            if (nextBtn) {
                nextBtn.style.display = (current === TOTAL - 1) ? 'none' : 'inline-block';
            }

            // Show submit only when ALL questions answered
            if (submitBtn) {
                var allDone = true;
                for (var j = 0; j < TOTAL; j++) {
                    if (!getCheckedValue(j)) { allDone = false; break; }
                }
                submitBtn.style.display = allDone ? 'block' : 'none';
            }

            if (pb) pb.style.width = ((current + 1) / TOTAL * 100) + '%';

            var errMsg = document.getElementById('error-msg');
            if (errMsg) errMsg.innerText = '';
        }

        /* ── attach radio listeners – auto-advance on selection ── */
        function attachRadioListeners() {
            for (var i = 0; i < TOTAL; i++) {
                (function (idx) {
                    var radios = getGroup(idx).querySelectorAll('input[type="radio"]');
                    radios.forEach(function (radio) {
                        radio.addEventListener('change', function () {
                            syncSelectedStyle(idx);
                            // Auto-advance to next question after short delay
                            if (idx < TOTAL - 1) {
                                setTimeout(function () {
                                    current = idx + 1;
                                    render();
                                }, 220);
                            } else {
                                // Last question: just refresh to show submit button
                                render();
                            }
                        });
                    });
                })(i);
            }
        }

        /* ── nav button listeners ── */
        function attachNavListeners() {
            var prevBtn = document.getElementById('prev-btn');
            var nextBtn = document.getElementById('next-btn');

            if (prevBtn) {
                prevBtn.addEventListener('click', function () {
                    if (current > 0) { current--; render(); }
                });
            }
            if (nextBtn) {
                nextBtn.addEventListener('click', function () {
                    if (current < TOTAL - 1) { current++; render(); }
                });
            }
        }

        /* ── expose currentQuestionIndex for scriptSAS.js compatibility ── */
        Object.defineProperty(window, 'currentQuestionIndex', {
            get: function () { return current; },
            set: function (v) { current = v; render(); }
        });

        /* ── init ── */
        attachRadioListeners();
        attachNavListeners();
        render();
    })();
    </script>

</body>
</html>
## 支付宝扫码购买
<a href="https://shop.dittopsych.xyz/#/3/detail" target="_blank">
    <img src="/assets/icons/alipay-logo.svg" alt="支付宝" style="width: 150px;">
</a>