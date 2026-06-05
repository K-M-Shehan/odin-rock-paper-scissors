const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  let choice = prompt("Enter your choice (rock, paper or scissors): ");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock") {
    console.log("You Win! " + humanChoice + " beats " + computerChoice);
    humanScore++;
  }
  else if (humanChoice == computerChoice) {
    console.log("Its a draw");
  }
  else {
    console.log("You Lose! " + computerChoice + " beats " + humanChoice);
    computerScore++;
  }
}

const human = getHumanChoice();
const puter = getComputerChoice();

console.log(human);
console.log(puter);

playRound(human, puter);
