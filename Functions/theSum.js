function theSumOfint(numOneForAdd, numTwoForAdd, numForSubtract) {

    let sumFromAdd = numOneForAdd + numTwoForAdd;
    return printResult(subtract(sumFromAdd, numForSubtract));
}

function subtract(numOne,numTwo){
    return numOne - numTwo;
}

function printResult(somePrint){
    console.log(somePrint);
}
theSumOfint(23,
    6,
    10);
