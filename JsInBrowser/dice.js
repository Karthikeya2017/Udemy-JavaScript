let playerAscore = 0;
let playerBscore = 0;
let gameScore = 0;
let number = 0;
let hold = false;
let currentPlayer = 'playerA';

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question('Hey do you want pause the game?', name => {
    hold = true;
    readline.close();
  });

if(gameScore < 100){
        while(number !== 1){
            gameScore = gameScore + number;
            (currentPlayer === 'playerA')? playerAscore += gameScore : playerBscore += gameScore;
            if(!hold){
                (currentPlayer === 'playerA')? currentPlayer = 'playerB ': currentPlayer = 'playerA';
            }
            number = Math.floor((Math.random() * 6) + 1);
            console.log(`number: ${number}`);
            console.log(`gameScore: ${gameScore}`);
            readline;
        }
}

console.log(currentPlayer);
