function condenseArrayToNumber(arrNum) {

    let curentArrOfNumbers = [];
    let firstItration = [];

    let counter = 0;
    let sumOfNum = 0;

    for (let i = 0; i < arrNum.length; i++) {

        counter++;
        curentArrOfNumbers[i] = Number(arrNum[i]);
        sumOfNum += curentArrOfNumbers[i];

        if(counter === 2){

            curentArrOfNumbers[i] = sumOfNum;
        }

    }
    console.log(firstItration);

}
condenseArrayToNumber([5,0,4,1,2]);