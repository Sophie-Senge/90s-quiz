let highscoresEl = document.querySelector("#highscores");
let clearHighscoresBtn = document.querySelector("#clear");


let initials = localStorage.getItem("initials");
renderLastRegistered();

function renderLastRegistered(){

  
  highscoresEl.textContent = initials;
  console.log(initials);
}

clearHighscoresBtn.addEventListener("click", function(){
  
})