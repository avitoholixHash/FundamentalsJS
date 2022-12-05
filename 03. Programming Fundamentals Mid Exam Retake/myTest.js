//Swap elemets in array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let x = 0;
// let y = 1;
// arr[x] = arr.splice(y, 1, arr[x])[0];
// console.log(arr);// alerts "2,1,3,4,5,6,7,8,9"

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);
// console.log(swap(0, 1));

//Convert arr from streing to arr from numbers!

// const array1 = ['1', '4', '9', '16'];
// let getNumber = array1.map(Number);
// console.log(getNumber);

//Decrase arr for 1 point
// for (let i = 0; i < getNumber.length; i++) {

//     getNumber[i] -= 1;
// }
// console.log(getNumber);

//sort array 

// const array = ['-16', '-4', '-9', '-17'];
// array.sort((a, b) => a - b);
// console.log(array);


//cut elements from array

//const array = ['-16', '-4', '-9', '-17'];
// let index = array.indexOf('-16');
// array.splice(index, 1);
// console.log(array);

//rotation arr
// const array = ['-16', '-4', '-9', '-17'];

// for (let i = 0; i < 2; i++) {
//     let getArrLength = array.length;
//     let getFirstItem = array.shift();

//     array.push(getFirstItem);

//     //array.splice(getArrLength, 1, getFirstItem);

// }
// console.log(array);


// let arr = [2, 4, 2, 4, 2, 4]
// function sumPairs(arr) {
//     let sum = 0;
//     let counter = 0;
//     let index = 0;

//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         counter++
//         sum += arr[i];
//         if (counter === 2) {

//             arr2.push(sum);
//             index++
//             sum = 0;
//             counter = 0;

//         }

//     }

//     return arr2;
// }
// console.log(sumPairs(arr));

//chek if there is entry
// if(phonesBook.hasOwnProperty('iwan')){
    
// }

let person = {};

person['fmaly'] = ['Vanq', 'Angel', 'Stoqn']

console.log(person['fmaly']);

