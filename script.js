const questions = [
  { id: 1, text: "進入陌生的社交環境時，我通常願意主動與他人建立互動。", pole: "E" },
  { id: 2, text: "面對新的資訊時，我傾向先確認具體事實與實際依據。", pole: "S" },
  { id: 3, text: "做出重要決定時，我通常優先考量原則是否一致，而非他人的情緒反應。", pole: "T" },
  { id: 4, text: "處理具有期限的事項時，我習慣預先安排執行順序。", pole: "J" },
  { id: 5, text: "經歷長時間的人際互動後，我通常需要獨處以恢復精神。", pole: "I" },
  { id: 6, text: "思考一項事物時，我經常關注其未來可能產生的發展。", pole: "N" },
  { id: 7, text: "即使某項方案較有效率，我仍會考量它可能對相關人員造成的影響。", pole: "F" },
  { id: 8, text: "與他人討論的過程，通常有助於我釐清自己的想法。", pole: "E" },
  { id: 9, text: "當新的資訊出現時，我願意調整原先的安排。", pole: "P" },
  { id: 10, text: "面對不熟悉的工作時，我傾向先參考既有的方法與經驗。", pole: "S" },
  { id: 11, text: "發生問題時，我通常會先分析原因，而不是立即處理情緒反應。", pole: "T" },
  { id: 12, text: "在多人討論中，我通常會先觀察整體情況，再決定是否發言。", pole: "I" },
  { id: 13, text: "我傾向在期限到來之前完成重要事項。", pole: "J" },
  { id: 14, text: "我經常能從彼此看似無關的資訊中發現共同模式。", pole: "N" },
  { id: 15, text: "維持人際關係的和諧，通常是我做出決定時的重要考量。", pole: "F" },
  { id: 16, text: "在尚未掌握完整資訊前，我傾向保留多種可能選項。", pole: "P" },
  { id: 17, text: "我通常願意拓展人際關係，並接觸不同類型的人。", pole: "E" },
  { id: 18, text: "我容易注意到環境、流程或說明中的細節差異。", pole: "S" },
  { id: 19, text: "即使意見來自我信任的人，我仍會依據其合理性進行判斷。", pole: "T" },
  { id: 20, text: "明確的制度與流程通常能提升我的工作效率。", pole: "J" },
  { id: 21, text: "相較於廣泛的人際往來，我更重視少數深入且穩定的關係。", pole: "I" },
  { id: 22, text: "相較於具體操作，我對理論、概念及其內在關聯更感興趣。", pole: "N" },
  { id: 23, text: "當他人遭遇困難時，我通常會先理解其感受與處境。", pole: "F" },
  { id: 24, text: "行程保留一定程度的彈性，通常使我感到較為自在。", pole: "P" },
  { id: 25, text: "在需要公開表達意見時，我通常能自然地參與其中。", pole: "E" },
  { id: 26, text: "對於重要事項，我傾向形成明確結論，而不是長期維持未定狀態。", pole: "J" },
  { id: 27, text: "評估一項構想時，我通常先考量其現實條件與執行可能性。", pole: "S" },
  { id: 28, text: "面對團體決策時，我傾向支持最有效率且最符合原則的方案。", pole: "T" },
  { id: 29, text: "相較於即時口頭回應，我較能透過書面方式完整表達想法。", pole: "I" },
  { id: 30, text: "在做出最終決定前，我傾向先探索不同方向與替代方案。", pole: "P" },
  { id: 31, text: "我對突破既有框架的新觀點通常抱持高度興趣。", pole: "N" },
  { id: 32, text: "當個人價值與客觀效率產生衝突時，我可能優先維護自己重視的價值。", pole: "F" },
  { id: 33, text: "臨時出現的機會，有時比原先安排的計畫更值得投入。", pole: "P" },
  { id: 34, text: "充滿交流與活動的環境，通常能提升我的精神狀態。", pole: "E" },
  { id: 35, text: "原定計畫若在最後階段突然改變，通常會使我感到不適應。", pole: "J" },
  { id: 36, text: "學習新技能時，我偏好依照明確步驟逐步掌握。", pole: "S" },
  { id: 37, text: "處理爭議時，我通常能將個人好惡與問題本身分開考量。", pole: "T" },
  { id: 38, text: "面對重大事件時，我需要充分的個人思考空間，才能形成判斷。", pole: "I" },
  { id: 39, text: "閱讀或觀察一項內容時，我經常關注其象徵意義，而不僅是表面資訊。", pole: "N" },
  { id: 40, text: "評估一項決定是否適當時，我會重視它是否符合相關人員的需求與關係背景。", pole: "F" }
];

const oppositePole = {
  E: "I",
  I: "E",
  S: "N",
  N: "S",
  T: "F",
  F: "T",
  J: "P",
  P: "J"
};

const dimensionPairs = [
  {
    key: "EI",
    left: "E",
    right: "I",
    title: "能量取向",
    leftLabel: "外向 E",
    rightLabel: "內向 I",
    tieAnchors: [1, 5, 8, 12, 17, 21, 25, 29, 34, 38]
  },
  {
    key: "SN",
    left: "S",
    right: "N",
    title: "資訊接收",
    leftLabel: "實感 S",
    rightLabel: "直覺 N",
    tieAnchors: [2, 6, 10, 14, 18, 22, 27, 31, 36, 39]
  },
  {
    key: "TF",
    left: "T",
    right: "F",
    title: "決策方式",
    leftLabel: "思考 T",
    rightLabel: "情感 F",
    tieAnchors: [3, 7, 11, 15, 19, 23, 28, 32, 37, 40]
  },
  {
    key: "JP",
    left: "J",
    right: "P",
    title: "生活方式",
    leftLabel: "判斷 J",
    rightLabel: "感知 P",
    tieAnchors: [4, 9, 13, 16, 20, 24, 26, 30, 33, 35]
  }
];

const typeData = {
  ISTJ: {
    name: "穩健執行者",
    summary: "重視秩序、責任與實際成果，通常以可靠的方法推進工作，並傾向在充分掌握細節後採取行動。"
  },
  ISFJ: {
    name: "細緻守護者",
    summary: "善於察覺實際需求並維持穩定關係，重視責任、承諾與日常運作中的細節。"
  },
  INFJ: {
    name: "深層洞察者",
    summary: "傾向從長期意義與人際脈絡理解事物，重視內在價值，並希望自己的行動具有一致方向。"
  },
  INTJ: {
    name: "策略建構者",
    summary: "習慣形成整體架構並尋找更有效的方法，重視自主思考、長期規劃與系統性改善。"
  },
  ISTP: {
    name: "冷靜解題者",
    summary: "偏好透過觀察與實際操作理解問題，面對變化時通常保持冷靜，並以直接方式尋找解法。"
  },
  ISFP: {
    name: "感知創作者",
    summary: "重視個人感受、真實體驗與自由空間，通常對環境細節敏銳，並以自然方式表達自身價值。"
  },
  INFP: {
    name: "價值追尋者",
    summary: "重視內在信念與可能性，傾向以同理和想像理解他人，並尋找符合自身價值的發展方向。"
  },
  INTP: {
    name: "概念分析者",
    summary: "喜歡拆解原理、比較不同解釋並建立邏輯模型，通常保留彈性，以便持續修正理解。"
  },
  ESTP: {
    name: "即時行動者",
    summary: "善於掌握現場資訊並迅速回應，偏好直接體驗與實際成果，面對變化時通常具有行動力。"
  },
  ESFP: {
    name: "活力連結者",
    summary: "傾向從互動與實際經驗中獲得能量，重視當下感受，也善於察覺團體中的需求與氣氛。"
  },
  ENFP: {
    name: "靈感推動者",
    summary: "容易從人與事物中看見新可能，重視自由、意義與交流，通常能以熱情推動構想。"
  },
  ENTP: {
    name: "觀點開拓者",
    summary: "喜歡挑戰既有假設、探索替代方案並交換觀點，通常重視創新、彈性與思考上的自由。"
  },
  ESTJ: {
    name: "結構管理者",
    summary: "擅長建立明確流程、分配資源並推動執行，重視效率、責任與可衡量的成果。"
  },
  ESFJ: {
    name: "關係協調者",
    summary: "重視合作、秩序與實際照顧，通常能主動維持團體運作，並回應他人的具體需求。"
  },
  ENFJ: {
    name: "共識引導者",
    summary: "善於理解群體需求並凝聚方向，重視成長、關係與長期影響，常以鼓舞方式推動合作。"
  },
  ENTJ: {
    name: "目標統籌者",
    summary: "習慣快速掌握目標、資源與限制，偏好建立策略並推動決策，以系統化方式達成成果。"
  }
};

const screens = {
  cover: document.getElementById("coverScreen"),
  quiz: document.getElementById("quizScreen"),
  result: document.getElementById("resultScreen")
};

const startBtn = document.getElementById("startBtn");
const quitBtn = document.getElementById("quitBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const copyBtn = document.getElementById("copyBtn");

const progressText = document.getElementById("progressText");
const answeredText = document.getElementById("answeredText");
const progressBar = document.getElementById("progressBar");
const progressTrack = document.querySelector(".progress-track");
const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const answerButtons = [...document.querySelectorAll(".answer-btn")];

const resultType = document.getElementById("resultType");
const resultName = document.getElementById("resultName");
const resultSummary = document.getElementById("resultSummary");
const dimensionResults = document.getElementById("dimensionResults");
const copyStatus = document.getElementById("copyStatus");

let shuffledQuestions = [];
let currentIndex = 0;
let answers = {};
let currentResult = null;

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function shuffleArray(items) {
  const array = [...items];

  for (let i = array.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}

function startTest() {
  shuffledQuestions = shuffleArray(questions);
  currentIndex = 0;
  answers = {};
  currentResult = null;
  copyStatus.textContent = "";
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const question = shuffledQuestions[currentIndex];
  const selectedAnswer = answers[question.id];

  questionNumber.textContent = String(currentIndex + 1).padStart(2, "0");
  questionText.textContent = question.text;

  progressText.textContent = `第 ${currentIndex + 1} 題，共 ${questions.length} 題`;
  answeredText.textContent = `已完成 ${Object.keys(answers).length} 題`;

  const progressPercentage = (Object.keys(answers).length / questions.length) * 100;
  progressBar.style.width = `${progressPercentage}%`;
  progressTrack.setAttribute("aria-valuenow", String(Object.keys(answers).length));

  answerButtons.forEach((button) => {
    const isSelected = button.dataset.answer === selectedAnswer;
    button.classList.toggle("selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = !selectedAnswer;
  nextBtn.textContent =
    currentIndex === questions.length - 1 ? "查看結果" : "下一題";

  requestAnimationFrame(() => questionText.focus());
}

function selectAnswer(answer) {
  const question = shuffledQuestions[currentIndex];
  answers[question.id] = answer;
  renderQuestion();
}

function goNext() {
  const question = shuffledQuestions[currentIndex];

  if (!answers[question.id]) {
    return;
  }

  if (currentIndex < shuffledQuestions.length - 1) {
    currentIndex += 1;
    renderQuestion();
    return;
  }

  if (Object.keys(answers).length !== questions.length) {
    const firstUnansweredIndex = shuffledQuestions.findIndex(
      (item) => !answers[item.id]
    );

    if (firstUnansweredIndex >= 0) {
      currentIndex = firstUnansweredIndex;
      renderQuestion();
    }
    return;
  }

  calculateResult();
}

function goPrevious() {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderQuestion();
  }
}

function calculateScores() {
  const scores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0
  };

  questions.forEach((question) => {
    const answer = answers[question.id];
    const opposite = oppositePole[question.pole];

    if (answer === "agree") {
      scores[question.pole] += 2;
    } else if (answer === "neutral") {
      scores[question.pole] += 1;
      scores[opposite] += 1;
    } else if (answer === "disagree") {
      scores[opposite] += 2;
    }
  });

  return scores;
}

function answerSupportsPole(question, answer) {
  if (answer === "agree") {
    return question.pole;
  }

  if (answer === "disagree") {
    return oppositePole[question.pole];
  }

  return null;
}

function resolveTie(pair) {
  /*
   * 同分時依固定題號的非中立答案判定。
   * 題目顯示順序雖然每次不同，但同一組答案仍會得到相同結果。
   * 若該維度全部選擇「部分符合」，則採用 pair.left 作為技術性預設值，
   * 結果頁仍會標示為「接近均衡」。
   */
  for (const questionId of pair.tieAnchors) {
    const question = questions.find((item) => item.id === questionId);
    const supportedPole = answerSupportsPole(question, answers[questionId]);

    if (supportedPole === pair.left || supportedPole === pair.right) {
      return supportedPole;
    }
  }

  return pair.left;
}

function getStrength(leftScore, rightScore) {
  const difference = Math.abs(leftScore - rightScore);
  const total = leftScore + rightScore;
  const percentageGap = total === 0 ? 0 : (difference / total) * 100;

  if (percentageGap <= 10) {
    return "接近均衡";
  }

  if (percentageGap <= 25) {
    return "輕微偏向";
  }

  if (percentageGap <= 45) {
    return "中度偏向";
  }

  return "明顯偏向";
}

function calculateResult() {
  const scores = calculateScores();
  let type = "";

  const dimensions = dimensionPairs.map((pair) => {
    const leftScore = scores[pair.left];
    const rightScore = scores[pair.right];
    const selectedPole =
      leftScore === rightScore
        ? resolveTie(pair)
        : leftScore > rightScore
          ? pair.left
          : pair.right;

    type += selectedPole;

    const total = leftScore + rightScore;
    const leftPercent = Math.round((leftScore / total) * 100);
    const rightPercent = 100 - leftPercent;

    return {
      ...pair,
      leftScore,
      rightScore,
      leftPercent,
      rightPercent,
      selectedPole,
      strength: getStrength(leftScore, rightScore)
    };
  });

  currentResult = {
    type,
    name: typeData[type].name,
    summary: typeData[type].summary,
    dimensions
  };

  renderResult();
  showScreen("result");
}

function renderResult() {
  resultType.textContent = currentResult.type;
  resultName.textContent = currentResult.name;
  resultSummary.textContent = currentResult.summary;
  dimensionResults.innerHTML = "";

  currentResult.dimensions.forEach((dimension) => {
    const selectedLabel =
      dimension.selectedPole === dimension.left
        ? dimension.leftLabel
        : dimension.rightLabel;

    const card = document.createElement("article");
    card.className = "dimension-card";

    card.innerHTML = `
      <div class="dimension-top">
        <h3 class="dimension-title">${dimension.title}</h3>
        <span class="dimension-status">${dimension.strength}：${selectedLabel}</span>
      </div>
      <div class="dimension-scale" aria-hidden="true">
        <div class="dimension-fill" style="width: ${dimension.leftPercent}%"></div>
      </div>
      <div class="dimension-values">
        <span>${dimension.leftLabel} ${dimension.leftPercent}%</span>
        <span>${dimension.rightLabel} ${dimension.rightPercent}%</span>
      </div>
    `;

    dimensionResults.appendChild(card);
  });
}

function buildResultText() {
  const lines = [
    `我的心理類型傾向：${currentResult.type}｜${currentResult.name}`,
    currentResult.summary,
    ""
  ];

  currentResult.dimensions.forEach((dimension) => {
    lines.push(
      `${dimension.title}：${dimension.leftLabel} ${dimension.leftPercent}%／${dimension.rightLabel} ${dimension.rightPercent}%`
    );
  });

  lines.push("", "本結果來自獨立設計的自我探索測驗，僅供娛樂與參考。");
  return lines.join("\n");
}

async function copyResult() {
  const text = buildResultText();

  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "結果已複製。";
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    copyStatus.textContent = "結果已複製。";
  }
}

answerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectAnswer(button.dataset.answer);
  });
});

startBtn.addEventListener("click", startTest);
prevBtn.addEventListener("click", goPrevious);
nextBtn.addEventListener("click", goNext);
restartBtn.addEventListener("click", startTest);
copyBtn.addEventListener("click", copyResult);

quitBtn.addEventListener("click", () => {
  const shouldRestart = window.confirm("確定要放棄目前進度並重新開始嗎？");

  if (shouldRestart) {
    startTest();
  }
});

document.addEventListener("keydown", (event) => {
  if (!screens.quiz.classList.contains("active")) {
    return;
  }

  if (event.key === "1") {
    selectAnswer("agree");
  } else if (event.key === "2") {
    selectAnswer("neutral");
  } else if (event.key === "3") {
    selectAnswer("disagree");
  } else if (event.key === "ArrowLeft") {
    goPrevious();
  } else if (event.key === "Enter" || event.key === "ArrowRight") {
    goNext();
  }
});
