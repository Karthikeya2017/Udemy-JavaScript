let john ={
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function(){
        this.tips = [ ];
        this.finalValue = [ ];
        for (i =0; i < this.bills.length; i++){
            let bill = this.bills[i];
            if (bill < 50){
                tip = 0.2 * bill;
            }else if (50 <= bill < 200){
                tip =0.15 * bill;
            }else{
                tip = 0.1 * bill;
            }
            this.tips.push(parser(tip));
            this.finalValue.push( parser(tip) + bill );
        }
    }
};
// stepOver - goes line by line; ->
// stepin --> goes to nested functions
//stepout -> exit from nested functions
// Start --> goes next break point
// Breakpoint -> pause the execution

function parser(cost){
    return Math.round((cost + Number.EPSILON) * 100) / 100
};

john.calcTips();

console.log(john.tips);
console.log(john.finalValue);