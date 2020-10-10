 function tipCalculator(billAmount) {
    if (billAmount < 50){
        return billAmount * 0.2 ;
    } else if(billAmount >= 50 && billAmount < 200){
        return billAmount * 0.15
    }else{
        return billAmount * 0.1
    }
};

function parseRoundoff(number){
    return Math.round((number + Number.EPSILON) * 100) / 100
};

// Function expressions , which will return some value is declared as variable
let finalAmount = function(billAmount){
    if (billAmount < 50){
        return parseRoundoff(billAmount * 0.2) + billAmount ;
    } else if(billAmount >= 50 && billAmount < 200){
        return parseRoundoff(billAmount * 0.2) + billAmount ;
    }else{
        return parseRoundoff(billAmount * 0.1) + billAmount ;
    }
};

let tipArr = [];
let finalTripcost = [];

tipArr.push(parseRoundoff(tipCalculator(124)));
tipArr.push(parseRoundoff(tipCalculator(48)));
tipArr.push(parseRoundoff(tipCalculator(268)));
console.log(tipArr);

finalTripcost.push(finalAmount(124));
finalTripcost.push(finalAmount(48));
finalTripcost.push(finalAmount(268));
console.log(finalTripcost);