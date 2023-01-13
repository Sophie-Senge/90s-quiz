// let questions = [{question: "", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 3},

// {question: "", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2}


// ]

// let currentQuestion = 0;
// ---------------------------------------

let startButtonEl = document.querySelector("#start");
let timeEl = document.querySelector("#time");
let choicesEl = document.querySelector("#choices");


//create countdown timer
// * A start button that when clicked a timer starts and the first question appears.

let startingTime = 100;


function startCountdown(event) {

// does this mean i won't be able to subtract 10?
  let timeRunning = setInterval(function () {
    timeEl.textContent = startingTime;
    startingTime--;
    if (startingTime <= 0) {
      // gameOver notice add class here put below in that class
      clearInterval(timeRunning);
    }

  }, 1000);

 

  console.log(event);
}



// create questions
let questions = [
  {
    title: "What fashion accessory was invented by a high school shop teacher?",
    answerOptions: ["The Scrunchie", "Slap Braclets", "Charm Braclets", "Fanny Packs"],
    correctAnswer: "Slap Braclets"
  },
  {
    title: "What was the first rap song to hit No. 1 on the Billboard Hot 100?",
    answerOptions: ["Sabotage", "Can I Kick It?", "Doo Wop (That thing)", "Ice Ice Baby"],
    correctAnswer: "Ice Ice Baby"
  },
  {
    title: "When was the World Wide Web first introduced?",
    answerOptions: ["1991", "1992", "1993", "1994"],
    correctAnswer: "1993" 

  },
  {
    title: "What is considered the first reality TV show?",
    answerOptions: ["Real World", "Survivor", "Big Brother", "Queer Eye"],
    correctAnswer: "Queer Eye" 
  }
 


]

let currentQuestion = 0;

document.querySelector("#question-title")

//listen for a click event on start button
startButtonEl.addEventListener("click", function(){
  startCountdown();
});

// * Questions contain buttons for each answer.
// * 
// * When answer is clicked, the next question appears
// * 
// * If the answer clicked was incorrect then subtract time from the clock

// * The quiz should end when all questions are answered or the timer reaches 0.

// * When the game ends, it should display their score and give the user the ability to save their initials and their score