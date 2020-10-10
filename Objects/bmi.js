let detailsJohn = {
    name: 'John',
    height: 1.7,
    weight: 75,
    calculateBMI: calcBMI
};


let detailsMarks = {
    name: 'Marks',
    height: 1.9,
    weight: 90,
    calculateBMI: calcBMI
};
// below code looks not good. Because using this outside of Object
function calcBMI(){
    return this.BMI  = this.weight / (this.height * this.height);
};

detailsJohn.calculateBMI();
detailsMarks.calculateBMI();

(detailsJohn.BMI > detailsMarks.BMI) ?  console.log(`John's BMI is higger than Marks: ${detailsJohn.BMI}`) : console.log(`Marks's BMI is higger than John: ${detailsMarks.BMI}`);
console.log(detailsJohn);
console.log(detailsJohn.calculateBMI());