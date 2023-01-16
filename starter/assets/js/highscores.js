let highscoresEl = document.querySelector("#highscores");
let clearHighscoresBtn = document.querySelector("#clear");


let initials;
renderLastRegistered();

function renderLastRegistered(){

  initials = JSON.parse(localStorage.getItem("initials"));
  highscoresEl.textContent = initials;
  console.log(initials);
}

clearHighscoresBtn.addEventListener("click", function(event){
  highscoresEl.innerHTML = "";
  highscoresEl = localStorage.clear();
 
  
})