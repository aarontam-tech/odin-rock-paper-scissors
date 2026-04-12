function playGame() {
  /*let rounds = 5;*/
  let targetScore = 5;
  let computerScore = 0;
  let humanScore = 0;
  const buttonRPS = [];
  const display = document.createElement("div");

  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);

    if(randomNumber === 2) {
      return "scissors";
    } else if(randomNumber === 1) {
      return "paper";
    } else if (randomNumber === 0) {
      return "rock";
    }
  }

  function getRunning() {
    let result = ` [Computer: ${computerScore} | Player: ${humanScore}]`;

    if(humanScore === targetScore) {
      result += " The winner is you.";
    } else if(computerScore === targetScore) {
      result += " The winner is the computer.";
    } /*else {
      result += " The game ends in a draw.";
    }*/

    return result;
  }

  function playRound(humanChoice) {
    let result = 0;
    let computerChoice = getComputerChoice();

    if(computerChoice === "rock") {
      if(humanChoice === "scissors") {
        result = -1;
      } else if(humanChoice === "paper") {
        result = 1;
      }
    } else if(computerChoice === "paper") {
      if(humanChoice === "rock") {
        result = -1;
      } else if(humanChoice === "scissors") {
        result = 1;
      }
    } else if(computerChoice === "scissors") {
      if(humanChoice === "paper") {
        result = -1;
      } else if(humanChoice === "rock") {
        result = 1;
      }
    }

    if(result === 1) {
      humanScore += 1;
      display.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if(result === -1) {
      computerScore += 1;
      display.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    } else {
      display.textContent = `You tie! You both chose ${humanChoice}.`;
    }
    display.textContent += getRunning();
  }

  for(choice of ["rock", "paper", "scissors"]) {
    let button = document.createElement("button");
    button.textContent = choice.charAt(0).toUpperCase() + choice.slice(1);
    button.addEventListener("click", () => playRound(choice));
    buttonRPS.push(button);
    document.body.append(button);
  }
  document.body.append(display);
  display.textContent = "";
}

playGame();