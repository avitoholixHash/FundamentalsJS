function palindromeIntegers(intsArr) {

    let intsArrlength = intsArr.length;
    let intoToString = '';
    let intoToStringlength = 0;

    let getFromString = '';

    for (let indexCurentInts = 0; indexCurentInts < intsArrlength; indexCurentInts++) {

        intoToString = intsArr[indexCurentInts].toString();
        intoToStringlength = intoToString.length;

        for (let indexFromString = 0; indexFromString < intoToStringlength; intoToStringlength++) {

            getFromString += intoToString[indexFromString];


        }
    }

}
palindromeIntegers([123, 323, 421, 121]);