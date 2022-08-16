// Ask for user input for bill, tip percentage and number of people and store in a variable
// parsefloat converts the user input from string to float
let billAmount = parseFloat(prompt("Please enter your bill amount"));

let tip = parseFloat(prompt("Please enter your percentage tip"));


let people = parseFloat(prompt("Please enter the number of people")); 


// function to calculate tip percentage
function calculateTipPercentage(tip) {
    return tip / 100;
}
// store the invoked function to a variable
let tipPercentage = calculateTipPercentage(tip);


// function to calculate actual tip 
function calculateTotalTip(billAmount, tipPercentage) {
    return billAmount * tipPercentage;
}

// calls tip function and then adds it to bill amount, saves to a variable totalBill
let totalBill = calculateTotalTip(billAmount, tipPercentage) + billAmount;

// calculates the tip per person and converts it to 2 decimal point with .toFixed() method.
let tipPerPerson = calculateTotalTip(billAmount, tipPercentage) / people;
tipPerPerson = tipPerPerson.toFixed(2);

// function to calculate bill per person
function calculateBillPerPerson(totalBill, people) {
    return totalBill / people;
}

// calls billperson function and converts it to a 2 decimal point and then saves in variable.
let billPerPerson = calculateBillPerPerson(totalBill, people).toFixed(2);

// alert results
alert(`Bill per person will be: ${billPerPerson} and Tip per person will be ${tipPerPerson}`);
