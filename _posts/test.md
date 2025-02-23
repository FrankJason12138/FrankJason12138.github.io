---
layout: post
title: '个人订阅链接'
subtitle: 'Web3.0下的旧产物'
date: 2025-02-23
categories: 测试链接
cover: '/assets/img/web3.0.jpg'
tags: 交互网站 心理测量 问卷收集 暂时问卷 在线问卷
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to My Experiment</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }

        .start-button {
            background-color: green;
            color: black;
            padding: 15px 30px;
            font-size: 20px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }

        .start-button:hover {
            background-color: darkgreen;
        }
    </style>
</head>
<body>

    <h1>Welcome to My Experiment</h1>
    <p>Please press the button below to enter the experiment:</p>

    <button class="start-button" onclick="startExperiment()">Start</button>

    <script>
        function startExperiment() {
            const links = [
                "https://test4.dittoshop.cn/",
                "https://test3.dittoshop.cn/",
                "https://test2.dittoshop.cn/",
                "https://test1.dittoshop.cn/",
                "https://test.dittoshop.cn/"
            ];

            // Randomly pick one link from the list
            const randomLink = links[Math.floor(Math.random() * links.length)];

            // Redirect to the selected link
            window.location.href = randomLink;
        }
    </script>

</body>
</html>
