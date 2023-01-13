// let questions = [{question: "", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 3},

// {question: "", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2}


// ]

let currentQuestion = 0;


//create countdown timer
let timeButtonEl = document.getElementById('time');
let startingTime = 100;
let timeRunning = setInterval('updateCountdown()', 1000);


function updateCountdown(){

 if (startingTime === 0){
  clearTimeout(timeRunning);
 }
 else {
  timeButtonEl.innerHTML = startingTime;
  startingTime--;
  
 }
  
}


// * A start button that when clicked a timer starts and the first question appears.
const startButtonEl = document.querySelector("#start");

//listen for a click event on start button
startButtonEl.addEventListener("click", updateCountdown());
 
// * Questions contain buttons for each answer.
// * 
// * When answer is clicked, the next question appears
// * 
// * If the answer clicked was incorrect then subtract time from the clock

// * The quiz should end when all questions are answered or the timer reaches 0.

// * When the game ends, it should display their score and give the user the ability to save their initials and their score