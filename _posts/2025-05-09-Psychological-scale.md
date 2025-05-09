---
layout: post
title: '测试'
date: 2025-05-09
author: 木一
cover: 'http://on2171g4d.bkt.clouddn.com/jekyll-banner.png'
tags: 天气测试
---

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>实时天气信息</title>
    <style>
        body {
            font-family: "Microsoft Yahei", sans-serif;
            text-align: center;
            margin: 50px auto;
            background-color: #f0f8ff;
            max-width: 600px;
        }
        .container {
            padding: 30px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .weather-icon {
            width: 80px;
            height: 80px;
            margin: 15px 0;
        }
        .warning {
            color: #d32f2f;
            background: #ffebee;
            padding: 10px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .info-item {
            margin: 12px 0;
            font-size: 18px;
            color: #333;
        }
        .update-time {
            color: #666;
            font-size: 14px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>实时天气</h1>
        <div class="info-item" id="city">正在定位...</div>
        <img class="weather-icon" id="weather-icon" src="" alt="天气图标">
        <div class="info-item" id="temp">--°C</div>
        <div class="info-item" id="weather">正在获取天气数据...</div>
        <div class="warning" id="warning">正在获取预警信息...</div>
        <div class="update-time" id="update-time"></div>
    </div>

    <script>
        // 配置参数
        const config = {
            weatherAPI: 'https://api.openweathermap.org/data/2.5/weather',
            geoAPI: 'http://ip-api.com/json?lang=zh-CN',
            appId: '6907145fc23e8c8fcfee61659f76d9ed',
            updateInterval: 3600000 // 1小时
        };

        // 天气数据管理
        const weatherApp = {
            async init() {
                try {
                    const city = await this.getLocation();
                    await this.getWeather(city);
                    await this.getWarnings(city);
                    this.startAutoUpdate();
                } catch (error) {
                    console.error('初始化失败:', error);
                    this.showError('正在使用默认城市数据...');
                    this.getWeather('北京');
                }
            },

            // IP定位获取城市
            async getLocation() {
                try {
                    const response = await fetch(config.geoAPI);
                    const data = await response.json();
                    const chineseCity = this.convertToChineseCity(data.city);
                    document.getElementById('city').textContent = chineseCity;
                    return chineseCity;
                } catch (error) {
                    console.error('定位失败:', error);
                    throw new Error('无法获取定位信息');
                }
            },

            // 获取天气数据
            async getWeather(city) {
                try {
                    const url = `${config.weatherAPI}?q=${city},cn&appid=${config.appId}&units=metric&lang=zh_cn`;
                    const response = await fetch(url);
                    const data = await response.json();
                    
                    document.getElementById('temp').textContent = `${Math.round(data.main.temp)}°C`;
                    document.getElementById('weather').textContent = data.weather[0].description;
                    document.getElementById('weather-icon').src = 
                        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                    
                    this.updateTimestamp();
                } catch (error) {
                    console.error('天气获取失败:', error);
                    throw new Error('天气数据获取失败');
                }
            },

            // 获取预警信息（示例数据）
            async getWarnings(city) {
                // 实际应用中需要替换为真实API
                const sampleWarnings = {
                    '北京': '大风蓝色预警',
                    '上海': '高温黄色预警',
                    '广州': '暴雨橙色预警'
                };
                
                const warning = sampleWarnings[city] || '当前无预警信息';
                document.getElementById('warning').textContent = warning;
            },

            // 城市名称转换（示例）
            convertToChineseCity(englishCity) {
                const cityMap = {
                    'Beijing': '北京',
                    'Shanghai': '上海',
                    'Guangzhou': '广州',
                    'Shenzhen': '深圳'
                };
                return cityMap[englishCity] || englishCity;
            },

            // 自动更新
            startAutoUpdate() {
                setInterval(async () => {
                    const city = document.getElementById('city').textContent;
                    await this.getWeather(city);
                    await this.getWarnings(city);
                }, config.updateInterval);
            },

            // 显示更新时间
            updateTimestamp() {
                const now = new Date();
                document.getElementById('update-time').textContent = 
                    `更新时间：${now.toLocaleString('zh-CN', { 
                        hour: '2-digit', 
                        minute: '2-digit',
                        second: '2-digit'
                    })}`;
            },

            // 错误处理
            showError(message) {
                document.getElementById('warning').textContent = message;
                document.getElementById('warning').style.color = '#d32f2f';
            }
        };

        // 页面初始化
        window.addEventListener('load', () => {
            weatherApp.init();
        });
    </script>
</body>
</html>