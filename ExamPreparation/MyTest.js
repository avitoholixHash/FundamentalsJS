// // // let stringNew = "abcdefghijklmnopqrstuvwxyz";
// // // console.log(stringNew.search('def'));

// // const city = 'instanbul';
// // //PRACTIS TOLOWERCASE AND UPPERCASE
// // if (city === city.toLowerCase()) {
// //     console.log(city[1].toUpperCase());
// // } else {
// //     console.log(city.toLowerCase());
// // }

// // city == city.toLowerCase() ? console.log(city.toUpperCase())
// //     : console.log(city.toLowerCase());

// // //TOSTRING
// // //The substring() method returns the part of the string 
// // // between the start and end indexes, or to the end of the string.
// // let getPartFromString = city.substring(2, 4);

// // let text = 'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'

// // let getDigits = text.matchAll('/\d/g');
// // for (const digit of getDigits) {
// //     console.log(digit);
// // }




// // //console.log(getDigits);



// // const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// // let getPart = p.substring(0,2);
// // console.log(p.replace(0, getPart).trim());
// // console.log(p);



// // //Here is a method I wrote that behaves like all other programming languages:
// // String.prototype.insert = function(index, string) {
// //     if (index > 0) {
// //       return this.substring(0, index) + string + this.substr(index);
// //     }

// //     return string + this;
// //   };

// //   //Example of use:
// //   let something = "How you?";
// //   something = something.insert(3, " are");
// //   console.log(something)


// //   //Just make the following function:
//   function insert(str, index, value) {
//     return str.substr(0, index) + value + str.substr(index);
// }

// // console.log(insert("foo baz", 4, "bar "));

// // //Insert spase(or any value) in string with slice();
// // let p2 = 'Thequick' 

// // let getSlice = p2.slice(0,3) + ' ';
// // let part =p2.substring(0,3);
// // p2 = p2.replace(part, getSlice)
// // console.log(p2);

// // //reverse string 

// // let  string = "fol";
// // let substring = "ol";
// // let arr = substring.split('');//push on ondex convert string to arr
// // let patr2 = arr.reverse().join('')

// // string = string.replace(substring, patr2)
// // console.log(string);
// // //console.log(string.includes(substring)); // true

// // //repalce any simbols in our string
// // let textStrring = 'Novo';
// // let tempText = '';
// // let substringP = 'o';
// // let rePlaceString = 'x';

// // // while(textStrring.includes(substringP)){
// // // 	tempText = textStrring.replace(substringP, rePlaceString);
// // // 	textStrring = tempText;
// // // }

// // const re = new RegExp(`${substringP}`, 'g');//with placeholder only in new RegExp(`${let}`, 'flag')
// // textStrring = textStrring.replace(re, rePlaceString);

// // console.log(textStrring)

// // //search valid index in array

// // if(typeof arrayName[index] === 'undefined') {
// //     // does not exist
// // }
// // else {
// //     // does exist
// // }


// console.log('>>>>>>>>>>>>');
// let arr1 = [1, 2, 3];
// let obj2 = {};

// let obj = {
//     key1: arr1,
//     key2: obj2 = {
//         key3: [4, 5, 6],
//     },
// }
// let sum = 0;
// for (const key in obj) {
//     sum = 0;
//     for (const iterator of obj.key2.key3) {
//         let getLength = obj.key2.key3.length;
//         sum+=iterator / getLength;
        
//     }
//     console.log(`${obj[key]} -> ${sum}`);
// }

// //console.log(sum);
// //console.table(obj);

// let reg = /[A-z0-9_]/g;
// let stringPass = 'abcdfG6pwE_'

// if(stringPass.match(reg)){
//     console.log('are');
// }



// let text = 'Hawai::RomeCyprys-Greece'
  
// let startIndex = 11;
// let endindex = 16;
  
// let subString = text.substring(startIndex, endindex + 1);
// text = text.replace(subString, '');

// console.log(text); 


// let text = '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|';
// let pattern = /(#{1}|\|{1})(?<items>[A-z ]{1,})\1(?<data>\d+\/\d+\/\d+)\1(?<calaory>\d{1,})\1/gm;

// let exec = pattern.exec(text);
// //console.log(exec[0])
// while(exec){
// 	console.log(exec.groups['items']);
//     exec = pattern.exec(text);
// }

// function change(string, value, newValue){
// 	let re = new RegExp('\\' + `${value}`, 'g');
// 	return string = string.replace(re, newValue);
// }

// let result = change('vandal','v','V' );
// console.log('------');
// console.log(result);


let string = 'John Lennon, George Harrison, Ringo Starr';
let sub = string.split(', ');
console.log(sub);