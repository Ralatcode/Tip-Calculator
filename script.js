// Ask for user input for bill, tip percentage and number of people and store in a variable
let billAmount = parseFloat(prompt("Please enter your bill amount"));

let tip = parseFloat(prompt("Please enter your percentage tip"));


let people = parseFloat(prompt("Please enter the number of people")); 

function calculateTipPercentage(tip) {
    return tip / 100;
}

let tipPercentage = calculateTipPercentage(tip);



function calculateTotalTip(billAmount, tipPercentage) {
    return billAmount * tipPercentage;
}


let totalBill = calculateTotalTip(billAmount, tipPercentage) + billAmount;

let tipPerPerson = calculateTotalTip(billAmount, tipPercentage) / people;
tipPerPerson = tipPerPerson.toFixed(2);


function calculateBillPerPerson(totalBill, people) {
    return totalBill / people;
}

let billPerPerson = calculateBillPerPerson(totalBill, people).toFixed(2);

alert(`Bill per person will be: ${billPerPerson} and Tip per person will be ${tipPerPerson}`);
