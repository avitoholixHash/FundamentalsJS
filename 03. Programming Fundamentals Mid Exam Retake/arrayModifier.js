function arrayModifier(input) {
    //get input data
    let arrToModifai = input.shift().split(' ').map(Number);
    let command = input.shift().split(' ');
    let curentCommand = command.shift();

    while (curentCommand !== 'end') {
        let getIndexOne = Number(command.shift());
        let getIndexTwo = Number(command.shift());

        switch (curentCommand) {
            case 'swap': swap(arrToModifai, getIndexOne, getIndexTwo);
                break;
            case 'multiply': multiplyAtArr(arrToModifai, getIndexOne, getIndexTwo);
                break;
            case 'decrease': decraseAllElementsInArr(arrToModifai);
                break;

        }
        command = input.shift().split(' ');
        curentCommand = command.shift();

    }
    let print = arrToModifai.join(', ')
    console.log(print);

    function swap(arr, indexOne, indexTwo) {
        arr[indexOne] = arr.splice(indexTwo, 1, arr[indexOne])[0];
        return arr;
    }

    function multiplyAtArr(arr, indexOne, indexTwo) {
        let result = arr[indexOne] * arr[indexTwo];
        arr.splice(indexOne, 1, result)[indexOne];
        return arr;

    }

    function decraseAllElementsInArr(arr) {

        for (let i = 0; i < arr.length; i++) {
            arr[i] -= 1;
        }
        return arr;
    }
}



arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);



