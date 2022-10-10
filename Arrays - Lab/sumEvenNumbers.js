function sumEvenNumbers(arr) {

    let evenSum = 0;
    let curentArr = [];

    for (let i = 0; i < arr.length; i++) {

        curentArr[i] = Number(arr[i]);

        if(curentArr[i] % 2 === 0){
            evenSum += curentArr[i];
        }

    }

    
    console.log(evenSum);

}
sumEvenNumbers(['3','5','7','9']);