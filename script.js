let playerScore=0;
let computerScore=0;
const selections = document.querySelectorAll(".selection");
let announcer = document.querySelector(".announcer");
let scoreDisplay = document.querySelector(".score-display");

selections.forEach(selection => selection.addEventListener("click", function (e) {
  playRound(e.target.textContent, getComputerChoice());
}));

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

function playRound (playerSelection, computerSelection) {

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

  scoreDisplay.textContent = `Score : ${playerScore} - ${computerScore}`;

  if( playerScore === 5 || computerScore === 5 ) {
    declareGameResult();
  }
}

function checkIfFirstPlayerIsWinning(FirstPlayer, SecondPlayer) {
  if( (FirstPlayer === "Rock" && SecondPlayer === "Scissors") ||
      (FirstPlayer === "Paper" && SecondPlayer === "Rock") ||
      (FirstPlayer === "Scissors" && SecondPlayer === "Paper"))
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