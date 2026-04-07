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