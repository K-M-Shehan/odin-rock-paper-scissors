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
      choice = 0;
      break;
    case PAPER:
      choice = 1;
      break;
    case SCISSORS:
      choice = 2;
      break;
  }

  return choice;
}

function getHumanChoice() {
  let choice = prompt("Enter your choice (rock = 0, paper = 1, scissors = 2): ");
  return choice;
}

console.log(getHumanChoice());
console.log(getComputerChoice());
