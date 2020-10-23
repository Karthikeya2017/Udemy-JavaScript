const prompt = require('prompt-sync')();

let playerScores = [0, 0];
let activePlayer = 0;
let score = 0;

const dice = Math.floor((Math.random() * 6) + 1);

async function rollDice() {
  console.log(`---- active player is: ${activePlayer} ----`);
  const diceTurnValue = Math.floor((Math.random() * 6) + 1);
  console.log(`diceTurnValue: ${diceTurnValue}`);
  if(diceTurnValue !== 1){
    score += diceTurnValue;
    const hold = prompt('do you want hold?');
    if(hold === 'true'){
      playerScores[activePlayer]+=score;
      (activePlayer === 0)? activePlayer = 1: activePlayer =0;
      score = 0;
    }
  }else{
    (activePlayer === 0)? activePlayer = 1: activePlayer =0;
    console.log(`----> ${activePlayer} is became active player <----`);
    score = 0;
  }
  console.log(`score: ${score}`);
  console.log(playerScores);
  console.log('**************END******************');
};

while (playerScores[0] < 100 && playerScores[1] < 100) {
    rollDice()
}

console.log(`First player score is : ${playerScores[0]}`);
console.log(`Second player score is : ${playerScores[1]}`);
console.log(playerScores);
console.log(score);