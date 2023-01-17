let highscoresEl = document.querySelector("#highscores");
let clearHighscoresBtn = document.querySelector("#clear");





function loadStorage(){
  var pastScores = JSON.parse(localStorage.getItem("history"))
  console.log(pastScores)
  if(pastScores === null){
    return
  }
  console.log(pastScores)  
  for(let i=0; i< pastScores.length; i++){
    console.log(pastScores[i])
    var li = document.createElement("li")
    var text = pastScores[i].initials + " — " + pastScores[i].score
    console.log(text)
    li.textContent = text
    highscoresEl.append(li)
  }

}

loadStorage()



// clear local storage  
clearHighscoresBtn.addEventListener("click", function(){
  highscoresEl.innerHTML = "";
 localStorage.removeItem("history")
})


