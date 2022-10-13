function theSumOfAllOddEven(arg) {

    let inputToString = String(arg);
    let arrNumsFromString = [];

    let stringLength = inputToString.length;//Дължинатра на стринга. Слеага се на промнлива цилкала де върти всеки път

    let getDigetsFromString = 0;

    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < stringLength; i++) {

        arrNumsFromString.push(inputToString[i]);
        getDigetsFromString = arrNumsFromString[i];

        if (getDigetsFromString % 2 === 0) {
            sumEven += Number(getDigetsFromString);

        } else if (getDigetsFromString % 2 !== 0) {
            sumOdd += Number(getDigetsFromString);

        }

    }

    console.log(` Odd sum = ${sumOdd}, Even sum = ${sumEven}`);

}
theSumOfAllOddEven(3495892137259234);