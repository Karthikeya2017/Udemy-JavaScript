// Mark's trip details
let MarktipCost = [ ];
let MarkfinalCost = [ ];
let MarkbillCost = [77, 375, 110, 45];

// Joph's trip details
let JohntipCost= [ ];
let JohnfinalCost = [ ];
let JohnbillCost = [124, 48, 268, 180, 42];


// this is function declaration.

function tipCalculator(cost) {
    if (cost < 50){
        return 0.2 * Math.round((cost + Number.EPSILON) * 100) / 100
    } else if( 50 >= cost < 200){
        return 0.15 * Math.round((cost + Number.EPSILON) * 100) / 100 ;
    }else{
        return 0.1 * Math.round((cost + Number.EPSILON) * 100) / 100 ;
    }
};

// I did a mistake is that - in line 22 adding element to billcost array, which leads infinite loop and memory crash
// Initally tried to declare tipamount variable which doesn't require to declare.

function billCalculator(billArr, tipCost, finalCost){
    for (let i =0; i < billArr.length; i++){
        tipAmount = tipCalculator(billArr[i]);
        tipCost.push(tipAmount);
        finalCost.push( billArr[i] + tipAmount);
    }
};

billCalculator(MarkbillCost, MarktipCost, MarkfinalCost);
billCalculator(JohnbillCost,JohntipCost, JohnfinalCost);

console.log(`Mark tip costs are: [${MarktipCost}]`);
console.log(`Mark total trip cost is [${MarkfinalCost}]`);
console.log(`John tip costs are: [${JohntipCost}]`);
console.log(`John total trip cost is [${JohnfinalCost}]`);

// by using reduce method

function average(tipArr) {
    return tipArr.reduce((a, b) => (a + b)) / tipArr.length;
}

MarkTipAvg = average(MarktipCost);
JohnTipAvg = average(JohntipCost);

console.log(`Mark's family Avg tip cost: ${MarkTipAvg}`);
console.log(`John's family Avg tip cost: ${JohnTipAvg}`);

(MarkTipAvg > JohnTipAvg) ? console.log(`Mark paid high tip;`):console.log(`John paid high tip`);

// without any methods
function averageTripCal(tipArr){
    // if we declare sum variable outside function, first array sum became sum for initial value for second array.
    let sum = 0;
    for (let i = 0; i < tipArr.length; i++) {
         sum += tipArr[i];
    }
    return sum / tipArr.length;
};

MarkTipAvg1 = averageTripCal(MarktipCost);
JohnTipAvg1 = averageTripCal(JohntipCost);

console.log(`Mark's family Avg tip cost: ${MarkTipAvg1}`);
console.log(`John's family Avg tip cost: ${JohnTipAvg1}`);
