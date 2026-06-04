const ROCK = 0
const PAPER = 1
const SCISSORS = 2

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

console.log(getComputerChoice())
