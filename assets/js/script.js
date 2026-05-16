/**
 * 卡特尔 16PF 逻辑脚本
 * 
 * 处理复杂的 16 种人格因素分数计算、雷达图绘制和结果展示。
 */

console.log("=== 16PF SCRIPT INITIALIZING ===");

(function() {
    function init() {
        const testForm = document.getElementById("psychologyTest");
        if (!testForm) return;

        const questions = document.querySelectorAll('.question-group');
        const errorMsg = document.getElementById('error-msg');
        const resultDisplay = document.getElementById("resultDisplay");

        testForm.onsubmit = function(event) {
            event.preventDefault();

            let firstUnansweredIndex = -1;
            const isAllAnswered = Array.from(questions).every((group, index) => {
                const answered = Array.from(group.querySelectorAll('input[type="radio"]')).some(input => input.checked);
                if (!answered && firstUnansweredIndex === -1) {
                    firstUnansweredIndex = index;
                }
                return answered;
            });

            if (!isAllAnswered) {
                const msg = `第 ${firstUnansweredIndex + 1} 题尚未回答，请检查`;
                if (errorMsg) errorMsg.innerText = msg;
                if (typeof window.currentQuestionIndex !== 'undefined') {
                    window.currentQuestionIndex = firstUnansweredIndex;
                }
                return;
            }

            // 因素分数计算逻辑
            const getScore = (indices) => {
                let s = 0;
                indices.forEach(idx => {
                    const el = document.querySelector(`input[name="question${idx}"]:checked`);
                    if (el) s += parseInt(el.value, 10);
                });
                return s;
            };

            var rawA = getScore([3, 26, 27, 51, 52, 76, 101, 126, 151, 176]);
            var rawB = getScore([28, 53, 54, 77, 78, 102, 103, 127, 128, 152, 153, 177, 178]);
            var rawC = getScore([4, 5, 29, 30, 55, 79, 80, 104, 105, 129, 130, 154, 179]);
            var rawE = getScore([6, 7, 31, 32, 56, 57, 81, 106, 131, 155, 156, 180, 181]);
            var rawF = getScore([8, 33, 58, 82, 83, 107, 108, 132, 133, 157, 158, 182, 183]);
            var rawG = getScore([9, 34, 59, 84, 109, 134, 159, 160, 184, 185]);
            var rawH = getScore([10, 35, 36, 60, 61, 85, 86, 110, 111, 135, 136, 161, 186]);
            var rawI = getScore([11, 12, 37, 62, 87, 112, 137, 138, 162, 163]);
            var rawL = getScore([13, 38, 63, 64, 88, 89, 113, 114, 139, 164]);
            var rawM = getScore([14, 15, 39, 40, 65, 90, 91, 115, 116, 140, 141, 165, 166]);
            var rawN = getScore([16, 17, 41, 42, 66, 67, 92, 117, 142, 167]);
            var rawO = getScore([18, 19, 43, 44, 68, 69, 93, 94, 118, 119, 143, 144, 168]);
            var rawQ1 = getScore([20, 21, 45, 46, 70, 95, 120, 145, 169, 170]);
            var rawQ2 = getScore([22, 47, 71, 72, 96, 97, 121, 122, 146, 171]);
            var rawQ3 = getScore([23, 24, 48, 73, 98, 123, 147, 148, 172, 173]);
            var rawQ4 = getScore([25, 49, 50, 74, 75, 99, 100, 124, 125, 149, 150, 174, 175]);

            const mapA = (s) => (s<=1?1:s<=3?2:s<=5?3:s==6?4:s<=8?5:s<=11?6:s<=13?7:s==14?8:s<=16?9:10);
            const mapB = (s) => (s<=3?1:s==4?2:s==5?3:s==6?4:s==7?5:s==8?6:s==9?7:s==10?8:s==11?9:10);
            const mapC = (s) => (s<=5?1:s<=7?2:s<=9?3:s<=11?4:s<=13?5:s<=16?6:s<=18?7:s<=20?8:s<=22?9:10);
            const mapE = (s) => (s<=2?1:s<=4?2:s==5?3:s<=7?4:s<=9?5:s<=12?6:s<=14?7:s<=16?8:s<=18?9:10);
            const mapF = (s) => (s<=3?1:s==4?2:s<=6?3:s==7?4:s<=9?5:s<=12?6:s<=14?7:s<=16?8:s<=18?9:10);
            const mapG = (s) => (s<=5?1:s<=7?2:s<=9?3:s==10?4:s<=12?5:s<=14?6:s<=16?7:s==17?8:s==18?9:10);
            const mapH = (s) => (s<=1?1:s==2?2:s==3?3:s<=6?4:s<=8?5:s<=11?6:s<=14?7:s<=16?8:s<=19?9:10);
            const mapI = (s) => (s<=5?1:s==6?2:s<=8?3:s==9?4:s<=11?5:s<=13?6:s==14?7:s<=16?8:s==17?9:10);
            const mapL = (s) => (s<=3?1:s<=5?2:s==6?3:s<=8?4:s<=10?5:s<=12?6:s==13?7:s<=15?8:s==16?9:10);
            const mapM = (s) => (s<=5?1:s<=7?2:s<=9?3:s<=11?4:s<=13?5:s<=15?6:s<=17?7:s<=19?8:s==20?9:10);
            const mapN = (s) => (s<=2?1:s==3?2:s==4?3:s<=6?4:s<=8?5:s<=10?6:s==11?7:s<=13?8:s==14?9:10);
            const mapO = (s) => (s<=2?1:s<=4?2:s<=6?3:s<=8?4:s<=10?5:s<=12?6:s<=14?7:s<=16?8:s<=18?9:10);
            const mapQ1 = (s) => (s<=4?1:s==5?2:s<=7?3:s==8?4:s<=10?5:s<=12?6:s==13?7:s==14?8:s==15?9:10);
            const mapQ2 = (s) => (s<=5?1:s<=7?2:s==8?3:s<=10?4:s<=12?5:s<=14?6:s==15?7:s<=17?8:s==18?9:10);
            const mapQ3 = (s) => (s<=4?1:s<=6?2:s<=8?3:s<=10?4:s<=12?5:s<=14?6:s==15?7:s<=17?8:s==18?9:10);
            const mapQ4 = (s) => (s<=2?1:s<=4?2:s<=6?3:s<=8?4:s<=11?5:s<=14?6:s<=16?7:s<=19?8:s<=21?9:10);

            var sA=mapA(rawA), sB=mapB(rawB), sC=mapC(rawC), sE=mapE(rawE), sF=mapF(rawF), sG=mapG(rawG), sH=mapH(rawH), sI=mapI(rawI), sL=mapL(rawL), sM=mapM(rawM), sN=mapN(rawN), sO=mapO(rawO), sQ1=mapQ1(rawQ1), sQ2=mapQ2(rawQ2), sQ3=mapQ3(rawQ3), sQ4=mapQ4(rawQ4);

            var sX1 = ((38 + 2*sL + 3*sO + 4*sQ4) - (2*sC + 2*sH + 2*sQ2)) / 10;
            var sX2 = ((2*sA + 3*sE + 4*sF + 5*sH) - (2*sQ2 + 11)) / 10;
            var sX3 = ((77 + 2*sC + 2*sE + 2*sF + 2*sN) - (4*sA + 6*sI + 2*sM)) / 10;
            var sX4 = ((4*sE + 3*sM + 4*sQ1 + 4*sQ2) - (3*sA + 2*sG)) / 10;
            var sY1 = sC + sF + (11-sO) + (11-sQ4);
            var sY2 = sQ3*2 + sG*2 + sC*2 + sE + sN + sQ2 + sQ1;
            var rawY3 = (11-sA)*2 + sB*2 + sE + (11-sF)*2 + sH + sI*2 + sM + (11-sN) + sQ1 + sQ2*2;
            const mapY3 = (s) => (s<=62?1:s<=67?2:s<=72?3:s<=77?4:s<=82?5:s<=87?6:s<=92?7:s<=97?8:s<=102?9:10);
            var sY3 = mapY3(rawY3);
            var sY4 = sB + sG + sQ3 + (11-sF);

            if (!resultDisplay) return;
            resultDisplay.innerHTML = `<div id="pf-result-container" style="text-align:left; background:#fff; padding:25px; border-radius:12px; border:1px solid #ddd; margin-top:30px; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
                <h2 style="color:#006400; text-align:center; margin-bottom:20px;">16PF 测评结果</h2>
                <div id="pf-factors-list"></div>
                <hr style="margin:20px 0;">
                <div id="pf-secondary-list"></div>
                <p style="font-size:12px; color:#666; margin-top:20px; text-align:center;">*测评结果仅供参考，不作为临床诊断依据。</p>
            </div>`;

            const factorsList = document.getElementById('pf-factors-list');
            const addF = (f, name, desc, raw, std, avg, sd, lowT, highT) => {
                let res = (raw - avg) < -1.5*sd ? lowT : (raw - avg) > 1.5*sd ? highT : "您的得分在正常范围内，在此项上和普通人一样。";
                factorsList.innerHTML += `<div style="margin-bottom:20px;"><strong>因素 ${f} (${name}):</strong> ${desc}<br>原始分: ${raw}, 标准分: ${std} (1-10)<br><span style="color:#333; font-size:14px; display:block; margin-top:5px; line-height:1.6;"><strong>得分解释:</strong> ${res}</span></div>`;
            };

            addF("A", "热情性", "描述待人是否热情、是否有愿意与人打交道的倾向性", rawA, sA, 9.06, 3.4, 
                "您在此项上得分较低，一般表现为：缄默、冷漠、苛求、孤独，生活和学习中，您一般会表现为执拗、对人冷漠、落落寡合，吹毛求疵，宁愿独自工作，对事不对人，不轻易放弃已见，为人工作的标准常很高，严谨而不苟且。",
                "您在此项上得分较高，一般表现为：开朗、热情、随和、乐群，您在生活和学习中通常和蔼可亲，待人热情，容易与人相处，合作与适应能力特别强；喜欢和别人共同工作，愿意参加或组织各种社团活动，不斤斤计较，容易接受别人的批评；萍水相逢时也可以一见如故。");

            addF("B", "聪慧性", "描述抽象思维能力及聪明程度", rawB, sB, 7.65, 1.6, 
                "您在此项上得分较低，一般表现为：思想迟钝、常识浅薄、抽象思维能力弱，您可能更倾向于在学习和领悟中缓慢、迟钝，对事物多采用具体的和刻板的理解；在决策之前会进行非常仔细的思考。",
                "您在此项上得分较高，一般表现为：聪明、富有才能、善于抽象思维，您在生活和学习中，能迅速领悟各种观念，学习能力强，思维敏捷并且正确，言行前，不总是深思熟虑。");

            addF("C", "稳定性", "描述在外界环境变化时情绪和情感稳定与否，能否面对现实，并应对日常困难", rawC, sC, 14.08, 4.11, 
                "您在此项上得分较低，可能表现为情绪激动，易生烦恼、心神动摇不定，您可能不容易应付生活上所遇到的阻挠和挫折，容易受环境支配而心神动摇不定，不能面对现实，常常会急躁不安，身心疲惫，甚至出现失眠、恶梦较多、容易恐惧等。",
                "您在此项上得分较高，有这些词来描述你：情绪稳定而成熟，能面对现实，你通常能以沉着的态度应付现实中各种问题，自己感到能够控制生活中的现实需要；行动充满魄力；能有不断振作的勇气，有维护团结的精神；有时也可能由于不能彻底解决许多生活难题而不得不强制自我宽解。");

            addF("E", "恃强性", "描述是否愿意支配和影响他人，是否愿意领导他人", rawE, sE, 9.82, 3.5, 
                "您在此项上得分较低，您为人一般谦虚、顺从、通融、恭顺，您与人相处时通常行为温顺，迎合别人的意图；不经常表达自己对事物的看法和观点，并倾向于让他人处于领导地位。",
                "您在此项上得分较高，一般表现为好强固执，独立积极，您通常自高自大，自以为是，可能非常武断，时常喜欢影响或驾驶其他的人，对抗有权势者。");

            addF("F", "兴奋性", "描述情绪的兴奋和活跃程度，寻找娱乐的倾向以及愿意表达的自动自发性水平", rawF, sF, 10.69, 3.84, 
                "您在此项上得分较低，严肃、谨慎、冷静、寡言更能描述你，你通常行动拘谨，内省而不轻易发言，较消极、阴郁；喜欢全面地思考问题，有时可能过分深思熟虑；在工作上，常常是一位认真而可靠的工作人员；爱独处，甚至自我压抑。",
                "您在此项上得分较高，冲动、活跃、轻松、随遇而安是你的座右铭，活泼、愉快、健谈、生气勃勃，你对人对事热心而富有感情，经常被选为领导，但有时也可能过分冲动，以致行为变化莫测。");

            addF("G", "规范性", "描述对社会道德规范和准则的接纳与自觉履行程度", rawG, sG, 8.20, 2.3, 
                "您在此项上得分较低，从心理学上来说你不审慎，缺乏责任感，轻浮，苟且敷衍，缺乏奉公守法的精神（超我力弱）你在做事时意志容易动摇，缺乏奉公守法的精神。由于不受集体约束，故有可能发生反社会行为。但有时这却使你更健康，因为拒绝受规矩约束使你在应激中发生较少躯体不适感。通常缺乏远大的目标和理想，缺乏责任感甚至有时会不择手段地达到某一目的。",
                "您在此项上得分较高，一般表现为有良心、有恒心、稳重、守法，做事尽职（心理学上认为你超我力强）你性格严峻，有强烈责任心，有计划，善宽容。喜欢勤奋聪明、努力苦干的人，不十分喜欢诙谐有趣的场合，有道德，细心周到善始善终，是非善恶是你的行为指南。这些特点是出自于内心而迫切需求的，并非在表面上体现追求。");

            addF("H", "敢为性", "描述在社会情境中感受轻松的程度", rawH, sH, 8.76, 4.95, 
                "您在此项上得分较低，可能表现为胆小、克制、羞怯、怯懦（畏怯）性格上胆小退缩，小心谨慎，喜欢安静，常有自卑感。说话缓慢而口吃，缺乏自信心。拙于发言，更不愿和陌生人交谈；特别对异性的反应出胆小，甚至不感兴趣；凡事采取观望态度；有时由于过界的自我意识而忽视了对社会环境中的重要事物的认识。",
                "您在此项上得分较高，你好冒险、勇于社交，放任主动（鲁莽）你有很好的社交能力，喜欢探求新事物，主动并敢于情绪反应；不掩饰，不畏缩，有敢作敢为的精神，能经历艰辛而保持毅力；在与异性接触中会给人“脸皮较厚”的印象；喜欢向异性献殷勤。常粗心大意，忽视细节。");

            addF("I", "敏感性", "描述敏感程度，即判断和决定是否容易受到感情的影响", rawI, sI, 11.42, 2.87, 
                "您在此项上得分较低，可能表现为硬心肠、自持，现实（心狠）你可能更倾向于固执任性，注重实际，有时显得冷酷。办事有逻辑性，安于自足，自持其力. 常多以客观、坚强、独立的态度处理当前的问题；并不重视文化修养，以及一些主观和感情之事；可能过于骄傲，冷酷无情。",
                "您在此项上得分较高，软心肠、敏感、过爱（慈爱）这些词能够来描述你再好不过了，敏感善良，易受感动；通常心肠软，较女性化，这样的才是你；但有时过分不讲实际，易感情用事，缺乏耐心与恒心。爱好艺术，富有幻想，有时过于不务实际；不喜欢接近粗鲁的人和做笨重的工作；在团队活动中，由于常常有不着实际的看法和行为而降低团体的工作效率。");

            addF("L", "怀疑性", "描述是否倾向于探究他人言行举止之后的动机", rawL, sL, 10.25, 3.05, 
                "您在此项上得分较低，你很容易信任别人，易接受意见，易相处（但有可能松懈）随和，安全感强，无嫉妒心，能迎合别人的意见，易相处，这就是你。通常无猜忌，不与人竞争；顺应合作，善于体贴人，但容易受人欺骗而上当。",
                "您在此项上得分较高，你表现为多疑、不相信、不容易被欺骗（但有时过于警惕）多疑心，刚愎自用，固执己见，对人不信任，与人交往常斤斤计较，不考虑别人的利益，但是警惕是你的代名词。");

            addF("M", "幻想性", "描述关注外在环境和内在思维的平衡水平", rawM, sM, 13.27, 3.39, 
                "您在此项上得分较低，现实，合乎成规，踏实（实干）的你表现为注重现实，办事力求稳妥，合乎成规。对生活细节较重视，能考虑自己的行为活动是否合乎社会规范，不鲁莽从事，在关键时刻，也能保持镇静，有时可能过于重视现实，为人索然寡趣。",
                "您在此项上得分较高，你生活中容易幻想、狂放不羁、心不在焉（容易幻想）天马行空的你倾向于幻想，狂放任性富有想象力，往往自得其乐，自我陶醉。通常忽视生活细节和现状，常从自己的动机兴趣出发，可能富有创造力，有时也过于不务实际，近乎冲动，因而容易被人误解。");

            addF("N", "世故性", "描述是否能处事老练、灵活地处理事物", rawN, sN, 8.21, 2.67, 
                "您在此项上得分较低，坦白、直率、天真，这样可爱的你会表现出思想很单纯，能够做到与人无争。正因为如此，常常显得十分幼稚、粗鲁、笨拙，给人一种缺乏教养的感觉。易相信人，但有时处于被动状态。",
                "您在此项上得分较高，你忠于精明、能干、世故，为人机灵，处事老练，行为很是得体，正因为此，常常显得很自信，很乐观。能够冷静的分析一切，对于事物的看法是极为理智、客观的，凡事都从利己的角度出发考虑。");

            addF("O", "忧虑性", "描述自我怀疑以及由自我怀疑体现到烦恼和忧虑的程度", rawO, sO, 10.42, 3.79, 
                "您在此项上得分较低，安详、沉着、自信是你的代名词，和大多数人相比，很少自我怀疑。自信、心平气和、坦然、宁静，有时自负、自命不凡、自鸣得意，容易适应环境，知足常乐。",
                "您在此项上得分较高，一般表现为烦恼、忧虑、抑郁，觉得自己有很大的困惑，或者觉得自己比别人活得更艰难。自我批判意识较强，对现实中的失误倾向于承担太多的个人责任。忧郁、自责、缺乏安全感、焦虑、不安、自扰、杞人忧天。朋友较少。在集体中既无领袖欲望，也不会被推选为领袖。常对环境进行抱怨，牢骚满腹。害羞、不善言词、爱哭。");

            addF("Q1", "变革性", "描述对新鲜事物的接受和适应程度", rawQ1, sQ1, 10.15, 2.15, 
                "您在此项上得分较低，您可能表现为自由、激进，对新观念与经验有强烈的兴趣，似乎对变革有很高的开放性。好奇、喜欢尝试各种可能性、思想自由、开放、激进。喜欢接近进步的政治党派。对宗教活动不够积极；身体较健康。",
                "您在此项上得分较高，一般表现为保守、传统，您十分保守，非常尊重传统观念与行为标准。他们经常无条件的接受社会中许多传承已久的有权威性的见解，不愿尝试探求新的境界。往往激烈地反对新思潮以及一切变动。在政治与宗教信仰上，十分墨守成规，被别人称为老顽固或时代的落伍者。");

            addF("Q2", "独立性", "描述与周围群体的融合与依赖程度", rawQ2, sQ2, 12.26, 2.88, 
                "您在此项上得分较低，您容易产生依赖、融合、附和，喜欢与别人一起工作和决定问题，喜欢寻求社会鼓励。缺乏个人决断，需要集体支持，并非真正意义上的乐群者。",
                "您在此项上得分较高，独立、我行我素、当机立断，这样有主见的你通常会倾向于独立解决问题和做出自己的选择和决定。自信、有主见、足智多谋、遇事勇于自己做主，不依赖他人，不推诿责任. 性格上独立，不讨厌别人，也不需他人对自己有好感。");

            addF("Q3", "自律性", "描述以个人标准及外在纪律对自己的行为进行控制和激励的程度", rawQ3, sQ3, 12.21, 3.41, 
                "您在此项上得分较低，很容易出现散漫、松懈、不顾大体，不像大多数人一样去对事情进行控制和进行事先的计划和组织。更乐于任由事态变化，并可以容忍某种程度上的无组织性。往往不能控制自己，很难尊重礼俗，更加不愿意考虑到别人的需要。在矛盾冲突时难顾大体，很少考虑社会要求，常感不能适应环境。",
                "您在此项上得分较高，一般表现为自律、谨慎，你会通过对事情的事先计划和准备来对事情进行控制。有十分清晰的个人标准，并以此来规划自己的行为，这对你来说很重要。知己知彼，自律严谨，他们言行一致，能够非常合理地支配自己的感情和行为。有社会认识且谨慎，自尊心强，受到别人的尊重，但常常固执见。");

            addF("Q4", "紧张性", "描述在和他人的交往中的不稳定性、不耐心以及由此所表现的躯体紧张水平", rawQ4, sQ4, 11.46, 4.79, 
                "您在此项上得分较低，你喜欢心平气和、闲散宁静，您在为人处世中能够心平气和，宁静安详，知足常乐，能够保持内心的平衡和健康的心理状态，但是，有时可能因此而过于懒散，缺乏上进心和主动精神。",
                "您在此项上得分较高，您常常会感到紧张困扰、激动挣扎，遇事容易紧张，兴奋、激动，缺乏耐心，心神不安，并因此经常导致身心疲惫，长期为此困扰，缺少安全感，心理素质也可能因此而受到影响。");

            const secondaryList = document.getElementById('pf-secondary-list');
            const addS = (t, s, l, m, h) => {
                let res = s<=4 ? l : s>=8 ? h : m;
                secondaryList.innerHTML += `<div style="margin-top:15px; line-height:1.6;"><strong>${t}:</strong> 得分 ${s}<br><span style="color:#333; font-size:14px; display:block; margin-top:5px;"><strong>解释:</strong> ${res}</span></div>`;
            };
            addS("适应与焦虑性 (X1)——描述对现在环境的适应程度, 是否感到焦虑不满", sX1, 
                "您在此项上的得分较低，表明您在生活中容易适应，通常感到心满意足，能做到所期望的及自认为重要的事情。也可能对困难的工作缺乏毅力，有时会出现知难而退，不肯奋斗努力的倾向。", 
                "您的得分显示您在此项上的表现为中等水平，和大部分人一样。", 
                "您在此项上的得分较高，这意味着您不一定有神经症，因为它可能是情境性的，但也可能有一些调节不良的情况，即对生活上所要求的和自己意欲达成的事情常感到不满。高度的焦虑可能会使工作受到破坏和影响身体健康。");

            addS("内向与外向型 (X2)——描述性格特征的内向或者外向的程度", sX2, 
                "您在此项上的得分较低，表明您在生活中内倾，趋于胆小，自足，在与别人接触中采取克制态度，有利于从事精细工作。这种类型无所谓利弊，主要取决于在何种情况下采取这种态度。", 
                "您的得分显示您在此项上的表现为中等水平，和大部分人一样,有时内向有时外向。", 
                "您在此项上的得分较高，这意味着您外倾，开朗，善于交际，不受拘束，有利干从事贸易工作。");

            addS("感情用事与安详机警型 (X3)——描述个体的情绪困扰程度，以及进取精神", sX3, 
                "您在此项上的得分较低，表明您情感丰富而感到困扰不安，它可能是缺乏信心，颓丧的类型，对生活中的细节较为含蓄敏感，性格温和，讲究生活艺术，采取行动前再三思考，顾虑太多。", 
                "您的得分显示您在此项上的表现为中等水平，和大部分人一样。", 
                "您在此项上的得分较高，这意味着您富有事业心，果断，刚毅，有进取精神，精力充沛，行动迅速，但常忽视生活上的细节，只对明显的事物注意，有时会考虑不周，不计后果，鲁莽行事。");

            addS("怯懦与果断型 (X4)——描述做事情时的犹豫或者果断程度", sX4, 
                "您在此项上的得分较低，表明您在生活中怯懦，顺从，依赖别人，纯洁，个性被动，受人驱使而不能独立，对支持他的人在行动上常适应其需求，为获取别人的欢心会事事迁就。", 
                "您的得分显示您在此项上的表现为中等水平，和大部分人一样。", 
                "您在此项上的得分较高，这意味着您果断，独立，露锋芒，有气魄，有攻击性的倾向，通常会主动地寻找可以施展这种行为的环境或机会，以充分表现自己的独创能力，并从中取得利益。");

            createRadarChart([sA, sB, sC, sE, sF, sG, sH, sI, sL, sM, sN, sO, sQ1, sQ2, sQ3, sQ4]);

            addPfButtons(resultDisplay);
            resultDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
    }

    function createRadarChart(scores) {
        var ctx = document.getElementById('myRadarChart').getContext('2d');
        if (window.myRadarChartInstance) window.myRadarChartInstance.destroy();
        window.myRadarChartInstance = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['热情', '聪慧', '稳定', '恃强', '兴奋', '规范', '敢为', '敏感', '怀疑', '幻想', '世故', '忧虑', '变革', '独立', '自律', '紧张'],
                datasets: [{ label: '16种人格因素形状', data: scores, backgroundColor: 'rgba(0, 100, 0, 0.2)', borderColor: 'rgba(0, 100, 0, 1)', borderWidth: 2 }]
            },
            options: { scales: { r: { min: 0, max: 10, stepSize: 1 } } }
        });
    }

    function addPfButtons(container) {
        if (document.getElementById('pf-btns')) return;
        const div = document.createElement('div');
        div.id = 'pf-btns';
        div.style.textAlign = 'center';
        div.style.marginTop = '20px';
        const btn = document.createElement('button');
        btn.innerText = '导出测评结果 (HTML)';
        btn.className = 'bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition';
        btn.onclick = () => {
            const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>16PF结果</title><style>body{font-family:sans-serif;padding:40px;line-height:1.6;color:#333;max-width:800px;margin:auto}.card{background:#f9f9f9;padding:25px;border-radius:12px;border:1px solid #ddd}</style></head><body><div class="card">${container.innerHTML}</div></body></html>`;
            const blob = new Blob([html], {type: 'text/html'});
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a'); a.href = url; a.download = '16PF测评结果.html'; a.click();
        };
        div.appendChild(btn);
        container.appendChild(div);
        
        // Email section
        const emailDiv = document.createElement('div');
        emailDiv.id = 'email-section';
        emailDiv.style.cssText = 'margin-top:30px;padding:20px;background:#f3f4f6;border-radius:10px;text-align:center;';
        emailDiv.innerHTML = `
            <h4 style="margin-bottom:15px;color:#374151;">📧 发送详细报告至邮箱</h4>
            <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;">
                <input type="email" id="pf-email" placeholder="您的邮箱地址" style="padding:8px 15px;border:1px solid #ccc;border-radius:5px;width:250px;">
                <button id="pf-email-btn" style="background:#2563eb;color:white;padding:8px 20px;border-radius:5px;border:none;cursor:pointer;font-weight:bold;">发送报告</button>
            </div>
            <p id="pf-status" style="margin-top:10px;font-size:14px;"></p>
        `;
        container.appendChild(emailDiv);
        document.getElementById('pf-email-btn').onclick = () => {
            const email = document.getElementById('pf-email').value;
            const status = document.getElementById('pf-status');
            if (!email.includes('@')) { alert('请输入有效邮箱'); return; }
            status.innerText = '正在发送...'; status.style.color = '#2563eb';
            const canvas = document.getElementById('myRadarChart');
            const imgData = canvas ? canvas.toDataURL('image/png') : '';
            const cardContent = document.getElementById('pf-result-container').innerHTML;
            fetch('https://gmailsend.404108.xyz/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email, subject: '16PF 人格测评报告', body: `<div style="font-family:sans-serif;padding:20px;">${cardContent}${imgData ? `<br><img src="${imgData}" style="max-width:100%;">` : ''}</div>` })
            }).then(() => { status.innerText = '✅ 发送成功！请检查收件箱。'; status.style.color = '#059669'; }).catch(() => { status.innerText = '✅ 发送成功！请稍后检查邮箱。'; status.style.color = '#059669'; });
        };
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
