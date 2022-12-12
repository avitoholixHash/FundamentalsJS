function regPass(input) {

    let length = input.shift();
    let getElements = '';
    let count = 0;

    for (let i = 0; i < length; i++) {
        getElements = input.shift();

        if (getElements.match(/(U\$)(?<username>[A-Za-z]{3,})\1(P@\$)(?<passward>[A-Za-z]{5,}[1-9]{1,})(P@\$)/gm)) {
            let re = getElements.matchAll(/(U\$)(?<username>[A-Za-z]{3,})\1(P@\$)(?<passward>[A-Za-z]{5,}[1-9]{1,})(P@\$)/gm);
            console.log('Registration was successful');
            for (const name of re) {
                count++;
                console.log(`Username: ${name.groups.username}, Password: ${name.groups.passward}`);
            }
        } else {
            console.log('Invalid username or password');
        }
    }
    console.log(`Successful registrations: ${count}`);

}
regPass(["3",
    "U$MichaelU$P@$asdqwe123P@$",
    "U$NameU$P@$PasswordP@$",
    "U$UserU$P@$ad2P@$"]);
