let tipCost = [ ];
let finalCost = [ ];
let billCost = [124, 48, 268, 180, 42];


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

for (let i =0; i < billCost.length; i++){
    tipAmount = tipCalculator(billCost[i]);
    tipCost.push(tipAmount);
    finalCost.push( billCost[i] + tipAmount);
};

console.log(`tip amount is [${tipCost}]`);
console.log(`total trip cost is [${finalCost}]`);