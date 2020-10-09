let marksScore = [110, 103, 120];
let johnsScore = [116, 94, 123];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

let johnsSum = johnsScore.reduce(reducer);
let marksSum = marksScore.reduce(reducer);
let johnsAverage = johnsSum / 3 ;
let marksAverage = marksSum / 3;

console.log(`John's team average is ${johnsAverage}\nMark's team average is ${marksAverage}`);

/**
 * Ternary operator usage
 */

 if(johnsAverage > marksAverage) {
    console.log(`John's is the winner with ${johnsAverage}`);
 } else if(johnsAverage < marksAverage) {
    console.log(`Mark's is the winner with ${marksAverage}`);
 }else{
     console.log(`Both averrages are equal and average is ${marksAverage}`);
 }
