// create questions
let questions = [
  {
    title: "What fashion accessory was invented by a high school shop teacher?",
    answerOptions: ["The Scrunchie", "Slap Braclets", "Charm Braclets", "Fanny Packs"],
    correctAnswer: 2
  },
  {
    title: "What was the first rap song to hit No. 1 on the Billboard Hot 100?",
    answerOptions: ["Sabotage", "Can I Kick It?", "Doo Wop (That thing)", "Ice Ice Baby"],
    correctAnswer: 4
  },
  {
    title: "When was the World Wide Web first introduced?",
    answerOptions: ["1991", "1992", "1993", "1994"],
    correctAnswer: 3

  },
  {
    title: "What is considered the first reality TV show?",
    answerOptions: ["Real World", "Survivor", "Big Brother", "Queer Eye"],
    correctAnswer: 1
  }
 


]
let currentQuestion = 0;
console.log(questions[currentQuestion].answerOptions[0]);
// ---------------------------------------
let startScreenEl = document.querySelector("#start-screen");
let startButtonEl = document.querySelector("#start");
let timeEl = document.querySelector("#time");
let choicesEl = document.querySelector("#choices");
let questionsEl = document.querySelector("#questions");
let questionTitleEl = document.querySelector("#question-title")



//create countdown timer
// * A start button that when clicked a timer starts and the first question appears.

function startCountdown() {
  let startingTime = 100;
  // does this mean i won't be able to subtract 10?
    let timeRunning = setInterval(function () {
      timeEl.textContent = startingTime;
      startingTime--;
      if (startingTime === 0) {
        // gameOver notice add class here put below in that class
        clearInterval(timeRunning);
      }
   
    }, 1000); 
  }
  
//start screen function

function startQuiz(){
  // hide start screen
  startScreenEl.setAttribute("class", "hide");
  // un hide first question
  questionsEl.removeAttribute("class");

}

// function to display the questions
function displayQuestion(){
   let newQuestion = questions[currentQuestion];
  questionTitleEl.textContent = newQuestion.title;
  // console.log(questions[currentQuestion]);

  // clear old question
  choicesEl.innerHTML = "";

  //loop over choices and display
  newQuestion.answerOptions.forEach((answerOptions) => {
    
  
  let choiceButton = document.createElement("button");
  choiceButton.setAttribute("class", "answerOptions");
  choiceButton.setAttribute("value", answerOptions);
  choiceButton.textContent = answerOptions;
 
  choicesEl.appendChild(choiceButton);
  // console.log(newQuestion.answerOptions);
  
});

}
choicesEl.addEventListener("click", function(event){
  
  if(event.target.matches("button")){
    currentQuestion++;
    // console.log(event.target.getAttribute("value", "data-index")) 
    for (let i = 0; i < questions[currentQuestion].answerOptions.length; i++) {
      console.log(questions[currentQuestion].answerOptions[i]);
      
    }
  }
  displayQuestion();
})



//listen for a click event on start button
//clock needs to countdown, start screen needs to hide, questions need to unhide with setattribute 
startButtonEl.addEventListener("click", function(){
  startCountdown();
  startQuiz();
  displayQuestion();
});

// * Questions contain buttons for each answer.
// * 
// * When answer is clicked, the next question appears
// * 
// * If the answer clicked was incorrect then subtract time from the clock

// * The quiz should end when all questions are answered or the timer reaches 0.

// * When the game ends, it should display their score and give the user the ability to save their initials and their score