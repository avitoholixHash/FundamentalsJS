function numbers(input) {
    //Get the input
    let arrNumbers = input.shift().split(' ').map(Number);
    let getLength = arrNumbers.length;

    let averageSum = 0;

    //Calculation of average on the array
    for (let i = 0; i < getLength; i++) {

        averageSum += arrNumbers[i];

    }

    let result = averageSum / getLength;

    console.log(greater(arrNumbers, result));

    //Basic function
    function greater(arr, num) {
        let greaterNum = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > num) {
                greaterNum.push(arr[i]);
            }
        }
        let print = greaterNum.sort().reverse().join(' ').slice(0,14);
        return print; 
    }


}
numbers(['-1 -2 -3 -4 -5 -6']);