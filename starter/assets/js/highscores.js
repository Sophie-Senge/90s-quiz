let highscoresEl = document.querySelector("#highscores");
let clearHighscoresBtn = document.querySelector("#clear");


renderLastRegistered();

function renderLastRegistered(){
  score = localStorage.getItem("score");

  initials = JSON.parse(localStorage.getItem("initials"));
  highscoresEl.textContent = initials + (" — ") + score;
  console.log(initials);
}

clearHighscoresBtn.addEventListener("click", function(event){
  highscoresEl.innerHTML = "";
  highscoresEl = localStorage.clear();
 
  
})


// localStorage.setItem("score", (startingTime));