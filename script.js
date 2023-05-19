let playerScore=0;
let computerScore=0;

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

function game() {
    let playerChoice = prompt("What's your move ?").toUpperCase();
    let computerChoice = getComputerChoice().toUpperCase();
    
    console.log(playRound(playerChoice, computerChoice));

    if(checkIfFirstPlayerIsWinning(playerChoice,computerChoice)) playerScore++;
    else if(checkIfFirstPlayerIsWinning(computerChoice,playerChoice)) computerScore++;
  
    console.log(`Score : ${playerScore} - ${computerScore}`)

  declareGameResult();
}

function declareGameResult() {
  if(playerScore>computerScore) console.log("Congrats! You Won the game!!");
  else if (computerScore>playerScore) console.log("Too bad, better luck next time...");
  else console.log("No winner this time.");
}

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}