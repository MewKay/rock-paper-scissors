let playerScore=0;
let computerScore=0;
const selections = document.querySelectorAll(".selection");

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
    console.log("It's a draw !");
  }

  else if(checkIfFirstPlayerIsWinning(playerSelection, computerSelection)) {
    console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
    playerScore++;
  }
  
  else if(checkIfFirstPlayerIsWinning(computerSelection, playerSelection)) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    computerScore++;
  }

  console.log(`Score : ${playerScore} - ${computerScore}`)

declareGameResult();
}

function checkIfFirstPlayerIsWinning(FirstPlayer, SecondPlayer) {
  if( (FirstPlayer === "Rock" && SecondPlayer === "Scissors") ||
      (FirstPlayer === "Paper" && SecondPlayer === "Rock") ||
      (FirstPlayer === "Scissors" && SecondPlayer === "Paper"))
  return true;
  else return false;
}

function declareGameResult() {
  if(playerScore>computerScore) console.log("Congrats! You Won the game!!");
  else if (computerScore>playerScore) console.log("Too bad, better luck next time...");
  else console.log("No winner this time.");
}

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}