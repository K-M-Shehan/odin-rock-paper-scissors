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

function displayScore() {
  hscore.textContent = "Your score: " + humanScore;
  cscore.textContent = "Puter score: " + computerScore;
}

function resetScores() {
  humanScore = 0;
  computerScore = 0;
}

function playRound(humanChoice, computerChoice) {
  finalResult.textContent = ""; // resets the final score once the next round starts

  if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock") {
    roundResult.textContent = "You Win! " + humanChoice + " beats " + computerChoice;
    humanScore++;
  }
  else if (humanChoice == computerChoice) {
    roundResult.textContent = "It's a draw";
  }
  else {
    roundResult.textContent = "You Lose! " + computerChoice + " beats " + humanChoice;
    computerScore++;
  }

  displayScore();

  if (humanScore >= 5) {
    finalResult.textContent = "You won, Score: " + humanScore + "-" + computerScore;
    resetScores();
    displayScore();
  }
  else if (computerScore >= 5) {
    finalResult.textContent = "You lost, Score: " + humanScore + "-" + computerScore;
    resetScores();
    displayScore();
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
