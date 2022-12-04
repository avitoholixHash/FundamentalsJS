function phoneBook(input){

    let phonesBook = {};

    for (const line of input) {
        let [name, phoneNumber] = line.split(' ');
        phonesBook[name] = phoneNumber;
    }
    
    for (const key in phonesBook) {
       console.log(`${key} -> ${phonesBook[key]}`);
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);