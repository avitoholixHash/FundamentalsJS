let multiply = (numOne, numTwo) => numOne * numTwo;
let divide = (numOne, numTwo) => numOne / numTwo;
let add = (numOne, numTwo) => numOne + numTwo;
let subtract = (numOne, numTwo) => numOne - numTwo;


function simpleCalculator(numOne, numTwo, operator) {

    let result = 0;
    
    switch (operator) {
        case 'multiply': result = multiply(numOne, numTwo); break;
        case 'divide': result = divide(numOne, numTwo); break;
        case 'add': result = add(numOne, numTwo); break;
        case 'subtract': result = subtract(numOne, numTwo); break;

        default: console.log('Something wrong...');
            break;
    }
    console.log(result);
}