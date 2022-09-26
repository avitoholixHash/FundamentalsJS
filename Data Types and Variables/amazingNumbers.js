
function amazingNumbers(numBer) {

    let numToString = String(numBer);

    let sumOfNum = 0;

    for (let i = 0; i < numToString.length; i++) {

        sumOfNum += Number(numToString[i]);
    }
    let print = sumOfNum === 9? `${numBer} Amazing? True`: `${numBer} Amazing? False`;
    console.log(print);
}
amazingNumbers(54);