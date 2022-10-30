function arrayManipulator(numArr, stringArr) {
    //Get input
    let numbers = numArr.slice(0);

    //Task Logic
    for (let i = 0; i < numbers.length; i++) {
        let getCommandLine = stringArr.shift().split(' ');

        //Get command line and they options
        let command = getCommandLine.shift();
        let getIndex = Number(getCommandLine.shift());
        let getElement = getCommandLine.slice(0);//it's must be array 

        //Seraching command
        switch (command) {
            case 'add':
                addMany(numbers, getIndex, getElement);
                break;
            case 'addMany':
                addMany(numbers, getIndex, getElement);
                break;
            case 'contains':
                console.log(contains(numbers, getIndex));
                break;
            case 'remove':
                remove(numbers, getIndex);
                break;
            case 'shift':
                shiftMore(numbers, getIndex);
                break;
            case 'sumPairs':
                sumPairs(numbers);
                break;
        }
        if (command === 'print') {
            let print = numbers.join(', ');
            console.log(`[ ${print} ]`);
            break;
        }
    }
    let print = numbers.join(',');
    //Functions for base logic
    function addMany(arr, index, elementsArr) {
        for (let i = 0; i < elementsArr.length; i++) {
            arr.splice(index++, 0, elementsArr[i]);
        }
        return arr;
    }

    function contains(arr, elements) {
        if (arr.includes(elements)) {
            return arr.indexOf(elements);
        } else {
            return -1;
        }
    }

    function remove(arr, index) {
        arr.splice(index, 1);
        return arr;
    }

    function shiftMore(arr, positionShift) {
        let getArrLength = arr.length;
        for (let i = positionShift; i > 0; i--) {
            //rotation arr! cool!
            arr.splice(getArrLength, 0, arr.shift());
        }
        return arr;
    }

    function sumPairs(arr) {
        let sum = 0;
        let counter = 0;
        let index = 0;

        let arr2 = [];
        for (let i = 0; i < arr.length; i++) {
            counter++
            sum += arr[i];
            if (counter === 2) {

                arr.splice(index, 1, sum);
                index++
                sum = 0;
                counter = 0;

            }

        }

        return arr2;
    }
}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
console.log('-------------------');
arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);

arrayManipulator([2, 2, 4, 2, 4],
    ["add 1 4", "sumPairs", "print"]);