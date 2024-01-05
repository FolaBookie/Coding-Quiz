//Get the highscores from the local storage
//Loop over the array of highscores to print to the screen
const scoresList = document.getElementById("highscores");
const clearScoresButton = document.getElementById("clear");

function getHighscores() {
  const highScores = JSON.parse(localStorage.getItem("highscores"));
  if (highScores) {
    highScores.forEach(function (score, index) {
    const scoreIndex = index + 1 
      const scoreItem = document.createElement("li");
      scoreItem.innerText = scoreIndex + ". " + score.initials + " - " + score.score;
      scoresList.append(scoreItem);
    });
  }
}

getHighscores();

clearScoresButton.addEventListener("click", function () {
  localStorage.removeItem("highscores");
  scoresList.innerHTML = "";
});
