const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const sciButton = document.querySelector("#scissors");

const roundResult = document.querySelector("#roundResult");
const hscore = document.querySelector("#hscore");
const cscore = document.querySelector("#cscore");
const finalResult = document.querySelector("#finalResult");

function getComputerChoice() { // randomly returns rock, paper or scissor
  let choice;
  let rand = Math.floor(Math.random() * 3) // will give a random value from 0 - 2 inclusive

  switch (rand) {
    case ROCK:
      choice = "rock";
      break;
    case PAPER:
      choice = "paper";
      break;
    case SCISSORS:
      choice = "scissors";
      break;
  }

  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock") {
    console.log("You Win! " + humanChoice + " beats " + computerChoice);
    roundResult.textContent = "You Win! " + humanChoice + " beats " + computerChoice;
    humanScore++;
  }
  else if (humanChoice == computerChoice) {
    console.log("It's a draw");
    roundResult.textContent = "It's a draw";
  }
  else {
    console.log("You Lose! " + computerChoice + " beats " + humanChoice);
    roundResult.textContent = "You Lose! " + computerChoice + " beats " + humanChoice;
    computerScore++;
  }

  hscore.textContent = "Your score: " + humanScore;
  cscore.textContent = "Puter score: " + computerScore;

  if (humanScore >= 5) {
    console.log("You won, Score: " + humanScore + "-" + computerScore);
    finalResult.textContent = "You won, Score: " + humanScore + "-" + computerScore;
    // TODO: reset scores
  }
  else if (computerScore >= 5) {
    console.log("You lost, Score: " + humanScore + "-" + computerScore);
    finalResult.textContent = "You lost, Score: " + humanScore + "-" + computerScore;
    // TODO: reset scores
  }

}

// button event listeners
rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
})

paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

sciButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
