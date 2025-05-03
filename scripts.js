// Quiz Questions
const quiz = [
  {
    question: "Who was the first president of Nigeria?",
    options: [
      "Nnamdi Azikiwe",
      "Tafawa Balewa",
      "Olusegun Obasanjo",
      "Yakubu Gowon",
    ],
    answer: "Nnamdi Azikiwe",
  },
  {
    question: "Which river is the longest in Nigeria?",
    options: ["River Benue", "River Ogun", "River Kaduna", "River Niger"],
    answer: "River Niger",
  },
  {
    question: "What is Nigeria's most populous city?",
    options: ["Abuja", "Port Harcourt", "Lagos", "Ibadan"],
    answer: "Lagos",
  },
  {
    question: "What is the major religion in Northern Nigeria?",
    options: ["Christianity", "Islam", "Hinduism", "Buddhism"],
    answer: "Islam",
  },
  {
    question: "Which Nigerian festival celebrates the New Yam harvest?",
    options: [
      "Eyo Festival",
      "Osun-Osogbo Festival",
      "Argungu Festival",
      "Iri Ji Festival",
    ],
    answer: "Iri Ji Festival",
  },
  {
    question: "What is the national motto of Nigeria?",
    options: [
      "Peace, Unity and Justice",
      "Unity and Faith, Peace and Progress",
      "Freedom and Justice",
      "Strength and Honor",
    ],
    answer: "Unity and Faith, Peace and Progress",
  },
  {
    question:
      "Which of the following is a Nigerian music legend known globally for Afrobeat?",
    options: ["King Sunny Ade", "Burna Boy", "Fela Kuti", "Wizkid"],
    answer: "Fela Kuti",
  },
  {
    question: "What body regulates university education in Nigeria?",
    options: ["NUC", "WAEC", "JAMB", "NYSC"],
    answer: "NUC", // 🔧 Fixed: this must match one of the options exactly
  },
  {
    question: "What type of government does Nigeria practice?",
    options: [
      "Monarchy",
      "Military rule",
      "Federal Republic",
      "Communist State",
    ],
    answer: "Federal Republic",
  },
  {
    question: "What is Nigeria’s national flower?",
    options: ["Rose", "Sunflower", "Costus Spectabilis", "Hibiscus"],
    answer: "Costus Spectabilis",
  },
];

let current = 0;
let score = 0;
let totalTime = 60; // total quiz time in seconds
let timer;

// Load the current question
function loadQuestion() {
  const q = quiz[current];
  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((option, index) => {
    optionsDiv.innerHTML += `
      <label>
        <input type="radio" name="option" value="${option}"> ${option}
      </label><br>
    `;
  });
}

// Handle the "Next" button click
function nextQuestion() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an answer.");
    return;
  }

  // Check answer
  if (selected.value === quiz[current].answer) {
    score++;
  }

  current++;

  // Load next question or finish quiz
  if (current < quiz.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

// Start countdown timer
function startTimer() {
  const timerDisplay = document.getElementById("timer");
  timer = setInterval(() => {
    totalTime--;
    timerDisplay.textContent = `Time left: ${totalTime}s`;

    if (totalTime <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

// End quiz and show score
function endQuiz() {
  clearInterval(timer);

  // Hide question and options
  document.getElementById("question").style.display = "none";
  document.getElementById("options").style.display = "none";
  document.querySelector("button").style.display = "none";

  // Show score
  const scoreDiv = document.getElementById("score");
  scoreDiv.style.display = "block";
  scoreDiv.textContent = `Your score is ${score} out of ${quiz.length}`;
}

// Initialize quiz
loadQuestion();
startTimer();
