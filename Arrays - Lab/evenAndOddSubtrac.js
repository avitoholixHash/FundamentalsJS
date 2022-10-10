function arrSubtact(arrofNumner) {

    let result = 0;
    let sumOfEven = 0;
    let sumOfOdd = 0;

    for (let i = 0; i < arrofNumner.length; i++) {

        if (arrofNumner[i] % 2 === 0) {

            sumOfEven += arrofNumner[i];

        } else if (arrofNumner[i] % 2 !== 0) {

            sumOfOdd += arrofNumner[i];

        }

    }

    result = sumOfEven - sumOfOdd;
    console.log(result);

}
arrSubtact([1, 2, 3, 4, 5, 6]);