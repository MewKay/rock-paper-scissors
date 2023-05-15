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

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}