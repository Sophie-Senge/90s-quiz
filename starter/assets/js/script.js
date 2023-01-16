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
startButtonEl.addEventListener("click", function(){
  startCountdown();
  startQuiz();
  displayQuestion();
});

//create countdown timer
// * A start button that when clicked a timer starts and the first question appears.
let timeRunning;
let startingTime = 100;
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
  


// function to display the questions


// function to remove time for wrong answers or move on for correct answers

function evaluateAnswers(event){
  feedbackEl.setAttribute ("class", "feedback");
  event.preventDefault()
  // console.log(event)
  // console.log(event.target)
  // console.log(this.innerHTML)
  // console.log(this.value)
  // correct answer
  if (this.innerHTML === questions[questionNum].correctAnswer){
    // console.log("Condition is good");
    feedbackEl.textContent = "Yay!";
    feedbackEl.style.color = "#B24BF3"; 
    let correctSound = new Audio ("./assets/sfx/correct.wav");
    correctSound.play(); 
    questionNum++;
  }
  else{
    startingTime -= 10;
    if(startingTime < 0){
      startingTime = 0
    }
    timeEl.textContent = startingTime;
    feedbackEl.textContent = "Not this time!";
    feedbackEl.style.color = "#EA3C53";  
    let incorrectSound = new Audio ("./assets/sfx/incorrect.wav");
    incorrectSound.play();
    
  }
choicesEl.innerHTML = "";

   questionNum++;
   if (questionNum < questions.length){
    displayQuestion();
   } else{
    endQuiz();
   }
    
  }
  
  //check if quiz is over
  //if not, move your index up, and call to show Question again.





function displayQuestion(){
  let visibleQuestion = questions[questionNum].title;
  // console.log(visibleQuestion);

  questionTitleEl.textContent = visibleQuestion;

  for (let i = 0; i < questions[questionNum].answerOptions.length; i++) {
    let choicesButton = document.createElement("button");
    choicesButton.textContent = questions[questionNum].answerOptions[i];
    // console.log(questions[questionNum].answerOptions[i]);
    choicesButton.addEventListener("click", evaluateAnswers);
    choicesEl.appendChild(choicesButton);
    
  }


//   let newQuestion = questions[currentQuestion];
//  questionTitleEl.textContent = newQuestion.title;
//  // console.log(questions[currentQuestion].title);

//  // clear old question
//  choicesEl.innerHTML = "";

//  //loop over choices to display
//  newQuestion.answerOptions.forEach((answerOptions) => {
   
 
//  let choiceButton = document.createElement("button");
//  // choiceButton.setAttribute("class", "answerOptions");
//  // choiceButton.setAttribute("value", answerOptions);
//  choiceButton.textContent = answerOptions;
//    choiceButton.addEventListener('click', evaluateAnswers);
//  choicesEl.appendChild(choiceButton);
//  // console.log(newQuestion.answerOptions);
 
// });

}
// cycle through the questions and answers
// choicesEl.addEventListener("click", function(event){
//   console.log(event)
//   console.log(event.target)
//   if(event.target.matches("button")){
//     currentQuestion++;
//     if (currentQuestion < questions.length){
//     displayQuestion();
//     }
//     else {
//       endQuiz();
//     }
// }  
// })
    // // console.log(event.target.getAttribute("value", "data-index")) 
    // for (let currentQuestion = 0; currentQuestion < questions.length; currentQuestion++) {
    //  if (currentQuestion < questions.length) {
    //   displayQuestion();
    //  } else {
    //   endQuiz();
    // }
     
     // console.log(questions[i]);
      // console.log(questions[currentQuestion].answerOptions[i]);
      
    
    // else statement to end
  
 

//start screen function

function startQuiz(){
  // hide start screen
  startScreenEl.setAttribute("class", "hide");
  // un hide first question
  questionsEl.removeAttribute("class");

}


function endQuiz(){
  //stop timer
  clearInterval(timeRunning);

  // remove hidden from final screen
  

  finalScoreEl.textContent = startingTime;
  localStorage.setItem("score", (startingTime));

  questionsEl.setAttribute("class", "hide");
  endScreenEl.removeAttribute("class");

}

initialsSubmitBtn.addEventListener("click", function(){
  let pastScores = JSON.parse(localStorage.getItem("history"))
  let initialsVal = document.querySelector("#initials").value;
  pastScores.push({
  initials: initialsVal,
  score: startingTime
  })
  localStorage.setItem("history", JSON.stringify(pastScores));
  location.href = "highscores.html";
  
  
})

function loadStorage(){
  let pastScores = JSON.parse(localStorage.getItem("history"))
  console.log(pastScores)
  if(pastScores === null){
    pastScores = []
    localStorage.setItem("history", JSON.stringify(pastScores))
    return
  }

}


loadStorage()
// * If the answer clicked was incorrect then subtract time from the clock

// * The quiz should end when all questions are answered or the timer reaches 0.

// * When the game ends, it should display their score and give the user the ability to save their initials and their score