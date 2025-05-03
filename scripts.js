const quiz = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "Jane Austen",
    ],
    answer: "William Shakespeare",
  },
];

let current = 0;
let score = 0;
let totalTime = 60; // total quiz time in seconds
let timer;

// Load the first question
function loadQuestion() {
  const q = quiz[current];
  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach((option) => {
    optionsDiv.innerHTML += `
      <label>
        <input type="radio" name="option" value="${option}"> ${option}
      </label>
    `;
  });
}

// Handle the next question button click
function nextQuestion() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an answer.");
    return;
  }
// Check if the selected answer is correct
  if (selected.value === quiz[current].answer) {
    score++;
    }
  current++;
// Load the next question or end the quiz
  if (current < quiz.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}
// handle the timer
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

// End the quiz and show the score
function endQuiz() {
  clearInterval(timer);
  document.getElementById("question").style.display = "none";
  document.getElementById("options").style.display = "none";
  document.querySelector("button").style.display = "none";
  document.getElementById("score").style.display = "block";
  document.getElementById(
    "score"
  ).textContent = `Your score is ${score} out of ${quiz.length}`;
}

// Initial load
loadQuestion();
startTimer();
