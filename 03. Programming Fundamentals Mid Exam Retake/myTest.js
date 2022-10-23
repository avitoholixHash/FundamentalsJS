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
const array = ['-16', '-4', '-9', '-17'];
let index = array.indexOf('-16');
array.splice(index,1);
console.log(array);
