function employees(arr) {
    //With object
    let employeesList = {};

    arr.forEach(person => {
        employeesList[person] = person.length; 
    });
    for (const key in employeesList) {
        console.log(`Name: ${key} -- Personal Number: ${employeesList[key]}`);
    }
    

 //with forEach
// arr.forEach(element => {
//     console.log(`Name: ${element} -- Personal Number: ${element.length}`);
// });

//With for

//     let employeeName = arr.slice(0);
//     let getLength = employeeName.length;

//     for (let i = 0; i < getLength; i++) {

//         let lengthOfNames = employeeName[i].length;
//         console.log(`Name: ${employeeName[i]} -- Personal Number: ${lengthOfNames}`);
//     }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);