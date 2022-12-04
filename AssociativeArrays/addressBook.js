function addressBook(input){
    let contacts = {};
    for (const line of input) {
        let [name, address] = line.split(':');
        contacts[name] = address;
    }

    let sortArr = Object.entries(contacts);
    sortArr.sort((a,b) => a[0].localeCompare(b[0]));

    //print
    for (const name of sortArr) {

        console.log(`${name[0]} -> ${name[1]}`);
    }
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);