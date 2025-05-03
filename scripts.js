// Creating an array for the Questions, Options and Answers 
const quiz = [{
     question: "What is the capital of France?",
         options: ["London", "Berlin", "Paris", "Madrid"],
         answer: "Paris"
 },
 {
 question: "Which planet is known as the Red Planet?",
     options: ["Earth", "Mars", "Jupiter", "Venus"],
     answer: "Mars"
 },
 {
 question: "Who wrote 'Hamlet'?",
     options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
     answer: "William Shakespeare"
 }
 ];

// Track state
 let current = 0;
 let score = 0;
//  Creating a function to load the questions and options
 function loadQuestion() {
     const q = quiz[current];
     document.getElementById('question').textContent = q.question;

     const optionsDiv = document.getElementById('options');
     optionsDiv.innerHTML = "";

     q.options.forEach(option => {
             optionsDiv.innerHTML +=` <label> <input type="radio" name="option" value="${option}" > ${option}
               </label> `;
         });
 }

//  Creating a function to check the answer and display the score
 function nextQuestion() {
     const selected = document.querySelector('input[name = "option"]:checked');

     if ( !selected) {
         alert("Please select an answer.");
         return;
     }

    //  increase score
     if (selected.value === quiz[current].answer) {
         score++;
     }

     current++;
    // moves to next Question
     if (current < quiz.length) {
         loadQuestion();
     }

     else {
         document.getElementById('question').style.display='none';
         document.getElementById('options').style.display='none';
         document.querySelector('button').style.display='none';
         document.getElementById('score').style.display='block';

         document.getElementById('score').textContent=`Your score is ${score} out of ${quiz.length}`;
     }
 }

// Starts the Quiz
loadQuestion();