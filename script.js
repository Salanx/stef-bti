// 歌曲数据库与向量 [S-C, C-E, P-D, R-I]
// S-C: 孤独(-1) vs 联结(1)
// C-E: 静谧(-1) vs 活力(1)
// P-D: 豁达/洒脱(-1) vs 执着/倔强(1)
// R-I: 现实(-1) vs 理想(1)
const songs = [
    { title: "和平", album: "孙燕姿", year: 2000, vector: [0.8, 0.5, 1.0, 0.4], lyrics: "爱是固执的，我只要在兵荒马乱中找到和平。" },
    { title: "leave me alone", album: "孙燕姿", year: 2000, vector: [-1.0, 0.8, -0.7, -0.4], lyrics: "我不想要谁给我快乐，因为快乐总带给我不快乐。" },
    { title: "终于", album: "孙燕姿", year: 2000, vector: [1.0, -0.8, 0.9, -0.2], lyrics: "终于等到了，你说，爱你。" },
    { title: "难得一见", album: "我要的幸福", year: 2000, vector: [0.4, 1.0, -1.0, -0.2], lyrics: "难得一见，爱了吧，醒了吧，没办法就该想办法。" },
    { title: "相信", album: "我要的幸福", year: 2000, vector: [-0.2, -1.0, 0.7, 0.8], lyrics: "我曾经看见困难，变得胆小，不够勇敢，但还是要相信。" },
    { title: "任性", album: "风筝", year: 2001, vector: [-0.8, -0.7, 1.0, -0.3], lyrics: "寂寞很吵，我很安静。情绪很多，我很镇定。" },
    { title: "作战", album: "Leave", year: 2002, vector: [-0.4, 1.0, -0.9, 0.6], lyrics: "想不通就把念头整个翻过来，我跟自己开心的作战。" },
    { title: "leave", album: "Leave", year: 2002, vector: [0.6, -0.6, 0.8, -0.5], lyrics: "这世界有没有地方，能永远都晴朗，没有倔强。" },
    { title: "接下来", album: "Leave", year: 2002, vector: [0.7, 0.6, 0.5, 0.5], lyrics: "接下来有好有坏，我只要记得起点。" },
    { title: "休止符", album: "The Moment", year: 2003, vector: [-0.9, 0.4, -0.8, -0.6], lyrics: "感情的旅途，只是无意义的重复，让我写下爱的休止符。" },
    { title: "太阳底下", album: "The Moment", year: 2003, vector: [0.8, 0.7, -0.5, 0.9], lyrics: "就在太阳底下，我们都被照射，发光发热。" },
    { title: "慢慢来", album: "Stefanie", year: 2004, vector: [-0.6, 0.3, -0.8, -0.8], lyrics: "习惯空白，接受空白，享受空白。" },
    { title: "Stefanie", album: "Stefanie", year: 2004, vector: [-0.5, -0.8, 0.6, 0.6], lyrics: "心里的恐惧有时多过坚强，有你我不再难熬。" },
    { title: "流浪地图", album: "完美的一天", year: 2005, vector: [-1.0, -0.4, -1.0, -0.5], lyrics: "静静地就让我离开，过去了就过去，别再为难。" },
    { title: "明天晴天", album: "完美的一天", year: 2005, vector: [0.9, -0.9, 0.8, 0.7], lyrics: "风风雨雨宁愿相信，明天晴天。" },
    { title: "梦游", album: "逆光", year: 2007, vector: [-0.4, -0.5, 0.5, 1.0], lyrics: "感谢你没有忘记做你自己，跌倒时受的伤，在我身上有相同痕迹。" },
    { title: "关于", album: "逆光", year: 2007, vector: [-0.9, -0.4, -0.6, -0.7], lyrics: "关于生活的选择题，答案在风里。" },
    { title: "世说心语", album: "是时候", year: 2011, vector: [-0.7, 0.6, -0.4, 0.8], lyrics: "太多美丽的语言，不比心语的纯洁。" },
    { title: "180度", album: "是时候", year: 2011, vector: [0.5, 0.2, -1.0, -1.0], lyrics: "你的180度，是你转变的态度，我就让你一步。" },
    { title: "渴", album: "克卜勒", year: 2014, vector: [-0.6, -1.0, 0.4, 0.7], lyrics: "当握紧的手松了，伤愈合。在孤独中孤独着，才懂安静的渴。" },
    { title: "无限大", album: "克卜勒", year: 2014, vector: [-0.3, 0.8, -1.0, -0.4], lyrics: "天空究竟多么大，结果还能怎么差，好一点，伤一点，也不过这样。" },
    { title: "漂浮群岛", album: "跳舞的梵谷", year: 2017, vector: [-0.9, 0.9, -0.7, 1.0], lyrics: "我梦见了一屋子的人潮，都在胡闹，奔跑，开时间个玩笑。" },
    { title: "超人类", album: "跳舞的梵谷", year: 2017, vector: [-0.8, 1.0, -0.5, 0.6], lyrics: "我不特别，不另类，但是绝对热血。" }
];

// 问卷题目 (扩充至 20 题)
const questions = [
    { text: "关于“自由”的定义，你更倾向于？", options: [
        { text: "独自一人，在没有坐标的地图上流浪", score: { solitude: 1, ideal: 0.5 } },
        { text: "与志同道合的人并肩，去世界任何角落", score: { connection: 1, ideal: 0.5 } }
    ]},
    { text: "面对生活的喧嚣与压力，你会？", options: [
        { text: "保持冷静与清醒，享受那份“寂寞的吵”", score: { solitude: 0.5, calm: 1, persistence: 0.5 } },
        { text: "开心地作战，大声点用力些，不被谁打败", score: { energetic: 1, detachment: 0.5 } }
    ]},
    { text: "如果一段重要的感情陷入僵局，你的第一反应是？", options: [
        { text: "果断放手，既然重复无意义，就写下休止符", score: { detachment: 1, realism: 1, solitude: 0.5 } },
        { text: "固执等待，相信明天终会是晴天", score: { persistence: 1, ideal: 1, connection: 0.5 } }
    ]},
    { text: "你理想的生活基调是？", options: [
        { text: "在太阳底下发光发热，挑战无限大", score: { energetic: 1, ideal: 1, detachment: 0.5 } },
        { text: "慢慢地摸索，习惯空白，接受平淡的真实", score: { calm: 1, realism: 1, persistence: 0.5 } }
    ]},
    { text: "当感到孤独或“心空空的”时候？", options: [
        { text: "这是成长的必经之路，我选择自己面对", score: { solitude: 1, persistence: 0.5 } },
        { text: "渴望一个拥抱，或是一句懂我的“心语”", score: { connection: 1, persistence: 0.3 } }
    ]},
    { text: "你对规则和束缚的态度是？", options: [
        { text: "保持沉默的倔强，在心里寻找和平", score: { calm: 0.5, persistence: 1, ideal: 0.5 } },
        { text: "豁达地面对，像行为艺术一样去谢幕", score: { energetic: 1, detachment: 1, realism: 0.5 } }
    ]},
    { text: "哪句话更能代表你此刻的心境？", options: [
        { text: "“我不想要谁给我快乐，因为快乐总带给我不快乐”", score: { solitude: 1, persistence: 0.5, realism: 0.5 } },
        { text: "“哪怕明天听不到答案，也要继续往上飞”", score: { energetic: 0.5, ideal: 1, persistence: 0.8 } }
    ]},
    { text: "关于梦想与现实的距离？", options: [
        { text: "现实也许苍白，但我依然简单地相信着", score: { persistence: 0.5, ideal: 1, calm: 0.5 } },
        { text: "看透了规则只是神话，冷一点暖一点也不过这样", score: { detachment: 1, realism: 1 } }
    ]},
    { text: "雨天在窗边看路人，你会想？", options: [
        { text: "每个人都有自己的雨伞，各走各的路", score: { solitude: 1, realism: 0.5 } },
        { text: "希望能有一个人，和我一起看这世界下雨", score: { connection: 1, persistence: 0.5 } }
    ]},
    { text: "你如何处理过去那些带伤的记忆？", options: [
        { text: "让它隔离，这是我保持免疫的倔强", score: { persistence: 1, calm: 0.5, solitude: 0.5 } },
        { text: "淡然处之，在跌倒的痕迹里寻找成长的神奇", score: { detachment: 0.5, ideal: 1 } }
    ]},
    { text: "当你走进一个完全陌生的城市？", options: [
        { text: "把自己隐形，冷眼看待这城市的寂寞", score: { solitude: 1, calm: 0.5, realism: 0.5 } },
        { text: "立刻起跳，去迎接接下来所有的好与坏", score: { energetic: 1, ideal: 0.5, detachment: 0.5 } }
    ]},
    { text: "你相信“永恒”吗？", options: [
        { text: "相信，虽然它不能赶快，但值得慢慢等", score: { calm: 1, ideal: 1, persistence: 0.5 } },
        { text: "不信，所谓的圆度规不能衡量我的态度", score: { realism: 1, detachment: 0.5 } }
    ]},
    { text: "在人群中，你通常是？", options: [
        { text: "静静地走开，不屑于人们的窃窃私语", score: { solitude: 1, detachment: 0.5 } },
        { text: "站在最顶端，分享自己的勇敢与喜悦", score: { connection: 0.5, energetic: 1, persistence: 0.5 } }
    ]},
    { text: "如果生活是一首歌，它应该是？", options: [
        { text: "清脆的钢琴声，固执地等待回应", score: { calm: 1, persistence: 0.8 } },
        { text: "爆发力的摇滚，洒脱地Say Good Bye", score: { energetic: 1, detachment: 1 } }
    ]},
    { text: "面对突如其来的变故，你的第一反应是？", options: [
        { text: "不掉泪，因为这就是我要求的和平", score: { persistence: 1, realism: 0.5 } },
        { text: "随它去，反正明天依然会是晴天", score: { detachment: 0.8, ideal: 1 } }
    ]},
    { text: "你对“老照片”的态度是？", options: [
        { text: "某个情节何需惊讶，追究也太傻", score: { detachment: 1, realism: 1 } },
        { text: "循着钢琴声，执着地寻找消失的空气", score: { persistence: 1, ideal: 0.5 } }
    ]},
    { text: "你更喜欢的相处模式是？", options: [
        { text: "终于等到了你，哪怕我是你另一场记忆", score: { connection: 1, persistence: 1 } },
        { text: "保持180度的距离，谁对谁辜负心里有数", score: { solitude: 1, detachment: 1 } }
    ]},
    { text: "在太阳底下，你最想做的事？", options: [
        { text: "做一件对的事，不管别人怎么想", score: { realism: 1, persistence: 0.5 } },
        { text: "让爱跨界，洒脱地享受这一场赛跑", score: { ideal: 1, detachment: 0.5, energetic: 0.5 } }
    ]},
    { text: "你如何看待“坚持”？", options: [
        { text: "这是一种固执的任性，哪怕看不到结果", score: { persistence: 1, ideal: 0.5 } },
        { text: "没必要装乖，宁可被淘汰也要活得精采", score: { detachment: 1, energetic: 0.5 } }
    ]},
    { text: "如果时间可以停止，你希望停在？", options: [
        { text: "心自由的那一刻，那种感动我记得", score: { solitude: 0.5, ideal: 1, detachment: 0.5 } },
        { text: "出发的那一刻，带着起跑以前的愿望", score: { energetic: 1, persistence: 0.5, realism: 0.5 } }
    ]}
];

// 状态变量
let currentQuestionIndex = 0;
let userScore = { s_c: 0, c_e: 0, p_d: 0, r_i: 0 };
let scoreHistory = []; // 记录每一步的分数快照

// DOM 元素
const cover = document.getElementById('cover');
const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const prevBtn = document.getElementById('prev-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const progressBar = document.getElementById('progress');

// 初始化
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);
prevBtn.addEventListener('click', prevQuestion);

function startQuiz() {
    cover.classList.remove('active');
    quiz.classList.add('active');
    currentQuestionIndex = 0;
    userScore = { s_c: 0, c_e: 0, p_d: 0, r_i: 0 };
    scoreHistory = [];
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestionIndex];
    questionText.textContent = q.text;
    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.onclick = () => selectOption(opt);
        optionsContainer.appendChild(btn);
    });

    progressBar.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
    
    // 控制返回按钮显示
    if (currentQuestionIndex > 0) {
        prevBtn.classList.add('visible');
    } else {
        prevBtn.classList.remove('visible');
    }
}

function selectOption(opt) {
    // 保存当前快照以便回退
    scoreHistory.push({
        score: JSON.parse(JSON.stringify(userScore)),
        index: currentQuestionIndex
    });

    // 累加分数 (权重调整)
    const step = 0.5; 
    if (opt.score.solitude) userScore.s_c -= opt.score.solitude * step;
    if (opt.score.connection) userScore.s_c += opt.score.connection * step;
    if (opt.score.calm) userScore.c_e -= opt.score.calm * step;
    if (opt.score.energetic) userScore.c_e += opt.score.energetic * step;
    if (opt.score.persistence) userScore.p_d += opt.score.persistence * step;
    if (opt.score.detachment) userScore.p_d -= opt.score.detachment * step;
    if (opt.score.realism) userScore.r_i -= opt.score.realism * step;
    if (opt.score.ideal) userScore.r_i += opt.score.ideal * step;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function prevQuestion() {
    if (scoreHistory.length > 0) {
        const lastState = scoreHistory.pop();
        userScore = lastState.score;
        currentQuestionIndex = lastState.index;
        showQuestion();
    }
}

function showResult() {
    quiz.classList.remove('active');
    result.classList.add('active');

    // 向量标准化
    const userVector = [
        Math.max(-1, Math.min(1, userScore.s_c / 2.5)),
        Math.max(-1, Math.min(1, userScore.c_e / 2.5)),
        Math.max(-1, Math.min(1, userScore.p_d / 2.5)),
        Math.max(-1, Math.min(1, userScore.r_i / 2.5))
    ];

    // 计算欧几里得距离
    let minDistance = Infinity;
    let matchSong = null;

    songs.forEach(song => {
        let dist = 0;
        for (let i = 0; i < 4; i++) {
            dist += Math.pow(userVector[i] - song.vector[i], 2);
        }
        dist = Math.sqrt(dist);
        if (dist < minDistance) {
            minDistance = dist;
            matchSong = song;
        }
    });

    // 渲染结果
    document.getElementById('song-title').textContent = matchSong.title;
    document.getElementById('song-album').textContent = matchSong.album;
    document.getElementById('song-year').textContent = `${matchSong.year} 年`;
    document.getElementById('lyrics-text').textContent = matchSong.lyrics;
    
    drawChart(userVector);

    const desc = generatePersonalityDesc(userVector, matchSong);
    document.getElementById('personality-desc').textContent = desc;
}

function drawChart(vector) {
    const canvas = document.getElementById('result-chart');
    const ctx = canvas.getContext('2d');
    const width = 300;
    const height = 240;
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    
    const centerX = width / 2;
    const rowHeight = 50;
    const barWidth = 180;
    
    const axes = [
        { left: "孤独", right: "联结", val: vector[0] },
        { left: "静谧", right: "活力", val: vector[1] },
        { left: "豁达", right: "执着", val: vector[2] },
        { left: "现实", right: "理想", val: vector[3] }
    ];
    
    ctx.clearRect(0, 0, width, height);
    
    axes.forEach((axis, i) => {
        const y = 40 + i * rowHeight;
        ctx.strokeStyle = '#eee';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(centerX - barWidth/2, y);
        ctx.lineTo(centerX + barWidth/2, y);
        ctx.stroke();
        
        ctx.strokeStyle = '#ccc';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(centerX, y - 5);
        ctx.lineTo(centerX, y + 5);
        ctx.stroke();
        
        const progressLen = (axis.val * barWidth) / 2;
        ctx.strokeStyle = '#f7e07d';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(centerX, y);
        ctx.lineTo(centerX + progressLen, y);
        ctx.stroke();
        
        ctx.font = '12px "Noto Serif SC"';
        ctx.textAlign = 'right';
        ctx.fillStyle = axis.val < -0.1 ? '#333' : '#999';
        ctx.fillText(axis.left, centerX - barWidth/2 - 15, y + 5);
        
        ctx.textAlign = 'left';
        ctx.fillStyle = axis.val > 0.1 ? '#333' : '#999';
        ctx.fillText(axis.right, centerX + barWidth/2 + 15, y + 5);
    });
}

function generatePersonalityDesc(v, song) {
    let traits = [];
    if (v[0] < -0.2) traits.push("享受孤独的漫游者");
    else traits.push("珍视联结的同行人");

    if (v[1] > 0.2) traits.push("充满爆发力的行动派");
    else traits.push("内心平静的观察者");

    if (v[2] > 0.2) traits.push("执着而倔强的灵魂");
    else traits.push("豁达而洒脱的自由人");

    const traitStr = traits.join("，");
    return `你是一个${traitStr}。在生活的兵荒马乱中，你始终保留着一份独有的频率。就像这首《${song.title}》所唱的那样，你并不追求大众的合唱，只在乎那份能触及灵魂的真实回响。`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    userScore = { s_c: 0, c_e: 0, t_v: 0, r_i: 0 };
    result.classList.remove('active');
    cover.classList.add('active');
}
