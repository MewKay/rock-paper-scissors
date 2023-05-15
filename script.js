let playerScore=0;
let computerScore=0;

game();

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
  let upperCasePlayerSelection = playerSelection.toUpperCase();
  let upperCaseComputerSelection = computerSelection.toUpperCase();

  if(upperCasePlayerSelection === upperCaseComputerSelection) {
    return "It's a draw !";
  }
  
  if(checkIfPlayerIsWinning(upperCasePlayerSelection, computerSelection)) {
    return `You Won! ${playerSelection} beats ${computerSelection}`;
  }
  
  else return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function checkIfPlayerIsWinning(playerSelection, computerSelection) {
  if( (playerSelection === "ROCK" && computerSelection === "Scissors") ||
      (playerSelection === "PAPER" && computerSelection === "Rock") ||
      (playerSelection === "SCISSORS" && computerSelection === "Paper"))
      return true;
  else return false;
}

function game() {
  for(let i=0; i<5; i++) {
    let playerChoice = prompt("What's your move ?");
    let computerChoice = getComputerChoice();
    
    console.log(playRound(playerChoice, computerChoice));

    if(checkIfPlayerIsWinning(playerChoice,computerChoice)) playerScore++;
    else if(!checkIfPlayerIsWinning(playerChoice,computerChoice)) computerScore++;
    else;
    
    console.log(`Score : ${playerScore} - ${computerScore}`)
  }
}

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}