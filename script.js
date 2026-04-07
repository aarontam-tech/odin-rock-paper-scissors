function getComputerChoice() {
  let randomNumber = Math.floor(Math.random()*3);

  if(randomNumber == 2) {
    return "rock";
  } else if(randomNumber == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Please enter choice: 'rock' 'paper' 'scissors'.");
}

function playGame() {
  let rounds = 5,
    computerScore = 0,
    humanScore = 0,
    computerChoice,
    humanChoice;

  function playRound(computerChoice, humanChoice) {
    let result = 0;
    humanChoice = humanChoice.toLowerCase();

    if(computerChoice == "rock") {
      if(humanChoice == "scissors") {
        result = -1;
      } else if(humanChoice == "paper") {
        result = 1;
      }
    } else if(computerChoice == "paper") {
      if(humanChoice == "rock") {
        result = -1;
      } else if(humanChoice == "scissors") {
        result = 1;
      }
    } else {
      if(humanChoice == "paper") {
        result = -1;
      } else if(humanChoice == "rock") {
        result = 1;
      }
    }

    if(result == 1) {
      humanScore += 1;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else if(result == -1) {
      computerScore += 1;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    } else {
      console.log(`You tie! You both chose ${humanChoice}.`);
    }
  }

  for(let i = 0; i < rounds; i++) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice);
  }

  if(computerScore < humanScore) {
    console.log("The winner is you.");
  } else if(computerScore > humanScore) {
    console.log("The winner is the computer.");
  } else {
    console.log("The game ends in a draw.");
  }
}

playGame();