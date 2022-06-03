/*
Create a number guessing game to generate a number between the range of 1 and 2. The game should prompt users for their username (saved in cookie).

Set range as function parameter and prompt the player to predict the generated number between the given range, 
at a correct guess, the game should award the player a point , and move them to stage 2 by increasing the range limit value by 1, 
e.g range is from 1 and 3 for stage 2 and so on. 
Connect replit account to github and save your program in github.
* range[ 1,2 ]
*/

let player = {
  name: '',
  stage: 0,
  score: 0
}

let username = prompt("Enter name")

function game() {
  player = { ...player, name: username }
  let stage = 1;
  for (; ;) {
    let max = generateRandomNumber(1, stage + 1)
    console.log(max)
    let playerGuess = prompt(`Level ${stage}: Guess a number`)
    if (parseInt(playerGuess) >= 1 && parseInt(playerGuess) <= max) {
      stage++;
      player = { ...player, score: stage, stage }
    } else {
      break;
    }
  }
}

function generateRandomNumber(min=1, max=2) {
  return Math.floor(Math.random() * max) + min;
}

// launch the game
game();
console.log(`${player.name} scored ${player.score} at Level ${player.stage}`)