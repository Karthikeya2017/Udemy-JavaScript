let detailsJohn = {
    name: 'John',
    height: 1.7,
    weight: 75,
    calculateBMI: calcBMI(this.weight, this.height)
};


let detailsMarks = {
    name: 'Marks',
    height: 1.9,
    weight: 90,
    calculateBMI: calcBMI(this,this.weight, this.height),
};
// below code looks not good. Because using this outside of Object
function calcBMI(context,weight, height){
    console.log(`context: ${JSON.stringify(context)}`);
    console.log(`weight: ${weight}`);
    console.log(`height: ${height}`);
    return weight / (height * height);
};
// bind method 
function calcBMI2(){
    return this.weight / (this.height * this.height);
};
detailsJohn.calculateBMI;
console.log(detailsJohn);

// detailsMarks.calculateBMI();

// calling directly Obj.method ; this is nice improvement of code

/**
 * Ternary operator for conditional check
 */
// (detailsJohn.calculateBMI() > detailsMarks.calculateBMI()) ?  console.log(`John's BMI is higger than Marks: ${detailsJohn.BMI}`) : console.log(`Marks's BMI is higger than John: ${detailsMarks.BMI}`);

// if (detailsJohn.calculateBMI() > detailsMarks.calculateBMI()){
//     console.log(`John having higger BMI:  ${detailsJohn.BMI}`);
// }else if (detailsJohn.BMI < detailsMarks.BMI){
//     console.log(`John having higger BMI:  ${detailsJohn.BMI}`);
// }else {
//     console.log('John and Mark having equal BMIs');
// }