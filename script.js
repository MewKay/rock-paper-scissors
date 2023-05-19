let playerScore=0;
let computerScore=0;
let selections = document.querySelectorAll(".selection");

selections.forEach(selection => selection.addEventListener("click", function (e) {
  game(e.target.textContent,getComputerChoice());
}));

function getComputerChoice() {
  let optionNumber = getRandomBetween(1,3);
  switch (optionNumber) {
    case 1:
      return "ROCK";
    case 2: 
      return "PAPER";
    case 3:
      return "SCISSORS"
  }
}

function playRound (playerSelection, computerSelection) {

  if(playerSelection === computerSelection) {
    return "It's a draw !";
  }
  
  else if(checkIfFirstPlayerIsWinning(playerSelection, computerSelection)) {
    return `You Won! ${playerSelection} beats ${computerSelection}`;
  }
  
  else return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function checkIfFirstPlayerIsWinning(FirstPlayer, SecondPlayer) {
  if( (FirstPlayer === "ROCK" && SecondPlayer === "SCISSORS") ||
      (FirstPlayer === "PAPER" && SecondPlayer === "ROCK") ||
      (FirstPlayer === "SCISSORS" && SecondPlayer === "PAPER"))
  return true;
  else return false;
}

function game(playerChoice, computerChoice) {
    
    console.log(playRound(playerChoice, computerChoice));

    if(checkIfFirstPlayerIsWinning(playerChoice,computerChoice)) playerScore++;
    else if(checkIfFirstPlayerIsWinning(computerChoice,playerChoice)) computerScore++;
  
    console.log(`Score : ${playerScore} - ${computerScore}`)
}

function declareGameResult() {
  if(playerScore>computerScore) console.log("Congrats! You Won the game!!");
  else if (computerScore>playerScore) console.log("Too bad, better luck next time...");
  else console.log("No winner this time.");
}

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

