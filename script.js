let playerScore=0;
let computerScore=0;
const selections = document.querySelectorAll(".selection");
let announcer = document.querySelector(".announcer");
let scoreDisplay = document.querySelector(".score-display");
let playerMoveDisplay = document.querySelector(".player");
let computerMoveDisplay = document.querySelector(".computer");
let selectionContainer = document.querySelector(".selection-container");
const tryAgainButton = document.createElement("button");

selections.forEach(selection => selection.addEventListener("click", function (e) {
  play(e.target.textContent, getComputerChoice());
}));

tryAgainButton.textContent = "Try Again ?";
tryAgainButton.classList.toggle("selection");
tryAgainButton.addEventListener("click", function (e) {
  resetGame();
});

function getComputerChoice() {
  let optionNumber = getRandomBetween(1,3);
  switch (optionNumber) {
    case 1:
      return "Rock";
    case 2: 
      return "Paper";
    case 3:
      return "Scissors"
  }
}

function play(playerSelection, computerSelection) {
  playRound(playerSelection,computerSelection);
  display(playerSelection,computerSelection);
  endGame();
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    announcer.textContent = "It's a draw !";
  }

  else if(checkIfFirstPlayerIsWinning(playerSelection, computerSelection)) {
    announcer.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  }
  
  else if(checkIfFirstPlayerIsWinning(computerSelection, playerSelection)) {
    announcer.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }
}

function display(playerSelection, computerSelection) {
  displayMoveIcon(playerSelection,playerMoveDisplay);
  displayMoveIcon(computerSelection,computerMoveDisplay);

  scoreDisplay.textContent = `Score : ${playerScore} - ${computerScore}`;
}

function endGame() {
  if( playerScore < 5 && computerScore < 5 ) {
    return;
  }
  declareGameResult();
  selectionContainer.innerHTML = "";
  selectionContainer.appendChild(tryAgainButton);
}

function checkIfFirstPlayerIsWinning(firstPlayer, secondPlayer) {
  if( (firstPlayer === "Rock" && secondPlayer === "Scissors") ||
      (firstPlayer === "Paper" && secondPlayer === "Rock") ||
      (firstPlayer === "Scissors" && secondPlayer === "Paper"))
  return true;
  else return false;
}

function declareGameResult() {
  if(playerScore>computerScore) announcer.textContent = "Congrats! You Won the game!!";
  else if (computerScore>playerScore) announcer.textContent = "Too bad, better luck next time...";
}

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayMoveIcon (moveToDisplay, iconContainer) {
  switch(moveToDisplay) {
    case "Rock":
      iconContainer.textContent = "✊";
      break;
    case "Paper":
      iconContainer.textContent = "✋";
      break;
    case "Scissors":
      iconContainer.textContent = "✌";
      break;
    default:
      iconContainer.textContent = "";
  }
}

function resetGame() {
  selectionContainer.innerHTML = "";
  
  selections.forEach(selection => selectionContainer.appendChild(selection));

  playerScore = 0;
  computerScore = 0;

  display("",playerMoveDisplay);
  display("",computerMoveDisplay);

  announcer.textContent = "Choose your move";
}