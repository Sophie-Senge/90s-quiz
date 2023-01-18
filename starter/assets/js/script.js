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
    correctAnswer: "Real World"
  },
  {
    title: "In the 1990s, which wide-leg jeans became a fashion favourite for children?",
    answerOptions: ["Levis", "JNCO", "Calvin Klein", "Guess"],
    correctAnswer: "JNCO"
  },
  {
    title: "What was the name of the virtual pet simulation game that came in a tiny, egg-shaped electronic system and enabled users to eat, play with, and clean up after their pet?",
    answerOptions: ["Chia Pet", "My Little Pony", "Tamagotchi", "Beanie Babies"],
    correctAnswer: "Tamagotchi"
  }
]

let questionNum = 0;
// console.log(questions[currentQuestion].answerOptions[0]);
// console.log (questions.length)
// ---------------------------------------
let startScreenEl = document.querySelector("#start-screen");
let startButtonEl = document.querySelector("#start");
let timeEl = document.querySelector("#time");
let choicesEl = document.querySelector("#choices");
let questionsEl = document.querySelector("#questions");
let questionTitleEl = document.querySelector("#question-title");
let finalScoreEl = document.querySelector("#final-score");
let endScreenEl = document.querySelector("#end-screen");
let initialsSubmitBtn = document.querySelector("#submit");
let feedbackEl = document.querySelector("#feedback");
//listen for a click event on start button
//clock needs to countdown, start screen needs to hide, questions need to unhide with setattribute 
startButtonEl.addEventListener("click", function () {
  startCountdown();
  startQuiz();
  displayQuestion();
});

//create countdown timer
// * A start button that when clicked a timer starts and the first question appears.
let timeRunning;
let startingTime = 90;
function startCountdown() {


  timeRunning = setInterval(function () {
    timeEl.textContent = startingTime;
    startingTime--;
    if (startingTime === 0) {
      // gameOver notice add class here put below in that class
      clearInterval(timeRunning);
    }

  }, 1000);
}






// function to remove time for wrong answers or move on for correct answers

function evaluateAnswers(event) {
  event.preventDefault();
  
  
  // console.log(event)
  // console.log(event.target)
  // console.log(this.innerHTML)
  // console.log(this.value)
  // correct answer
  if (this.innerHTML === questions[questionNum].correctAnswer) {
    // console.log("Condition is good");
    feedbackDisplay();
    feedbackEl.textContent = "Um duh!";
    feedbackEl.style.color = "#B24BF3";
    feedbackEl.style.borderTop = "thin solid #B24BF3"
    let correctSound = new Audio("starter/assets/sfx/correct.wav");
    correctSound.play();
    questionNum++;
   
  }
  else {
    startingTime -= 10;
    if (startingTime < 0) {
      startingTime = 0;
      endQuiz();
    }
   
    timeEl.textContent = startingTime;
    feedbackDisplay();
    feedbackEl.textContent = "Ugh, as if!";
    feedbackEl.style.color = "#EA3C53";
    feedbackEl.style.borderTop = "thin solid #EA3C53"
    let incorrectSound = new Audio("starter/assets/sfx/incorrect.wav");
    incorrectSound.play();

  }
  //clear 
  choicesEl.innerHTML = "";


  if (questionNum < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }

  // feedback function
function feedbackDisplay(){
  setTimeout(feedbackHide, 700);
  feedbackEl.setAttribute("class", "feedback");
}

function feedbackHide(){
  feedbackEl.setAttribute("class", "hide");
}


}



// function to display the questions

function displayQuestion() {
  let visibleQuestion = questions[questionNum].title;
  // console.log(visibleQuestion);

  questionTitleEl.textContent = visibleQuestion;

  // to loop through the answer options and display
  for (let i = 0; i < questions[questionNum].answerOptions.length; i++) {
    let choicesButton = document.createElement("button");
    choicesButton.textContent = questions[questionNum].answerOptions[i];
    // console.log(questions[questionNum].answerOptions[i]);
    // adding the evaluation function to the choice button
    choicesButton.addEventListener("click", evaluateAnswers);
    choicesEl.appendChild(choicesButton);

  }




}





//start screen function

function startQuiz() {
  // hide start screen
  startScreenEl.setAttribute("class", "hide");
  // un hide first question
  questionsEl.removeAttribute("class");

}

// end screen function
function endQuiz() {
  //stop timer
  clearInterval(timeRunning);

  


  finalScoreEl.textContent = startingTime;
  localStorage.setItem("score", (startingTime));
// remove hidden from final screen
  questionsEl.setAttribute("class", "hide");
  endScreenEl.removeAttribute("class");

}

initialsSubmitBtn.addEventListener("click", function () {
  let pastScores = JSON.parse(localStorage.getItem("history"))
  let initialsVal = document.querySelector("#initials").value;
  pastScores.push({
    initials: initialsVal,
    score: startingTime
  })
  localStorage.setItem("history", JSON.stringify(pastScores));
  location.href = "highscores.html";


})
// load highscores array to local storage
function loadStorage() {
  let pastScores = JSON.parse(localStorage.getItem("history"))
  // console.log(pastScores)
  if (pastScores === null) {
    pastScores = []
    localStorage.setItem("history", JSON.stringify(pastScores))
    return
  }

}


loadStorage()

