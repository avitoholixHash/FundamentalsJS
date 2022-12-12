function registration(input) {
    let userName = input.shift();

    let line = input.shift();

    while (line !== 'Registration') {

        let instruction = line.split(' ');
        let command = instruction.shift();

        switch (command) {
            case 'Letters': {
                let command = instruction[0];
                if (command === 'Lower') {
                    userName = userName.toLowerCase();
                    console.log(userName);
                } else if (command === 'Upper') {
                    userName = userName.toUpperCase();
                    console.log(userName);
                }
            }
                break;

            case 'Reverse': {
                let stratIndex = Number(instruction[0]);
                let endIndex = Number(instruction[1]);

                if (stratIndex < 0 && endIndex > userName.length) {
                    break;
                } else {
                    let getSubString = userName.substring(stratIndex, endIndex + 1).split('').reverse().join('');
                    console.log(getSubString);
                }
            }
                break;

            case 'Substring': {
                let getSubString = instruction[0]

                if(userName.includes(getSubString)){
                    userName = userName.replace(getSubString, '');
                    console.log(userName);
                }else{
                    console.log(`The username ${userName} doesn't contain ${getSubString}.`);
                }
            }
                break;

            case 'Replace': {
                let char = instruction[0]
                while (userName.includes(char)) {
                    userName = userName.replace(char, '-');
                }
                console.log(userName);
            }
                break;

            case 'IsValid': {
                let char = instruction[0];
                if(userName.includes(char)){
                    console.log(`Valid username.`);
                }else{
                    console.log(`${char} must be contained in your username.`);
                }
            }
                break;

        }




        line = input.shift();
    }
}
// registration(["John",
//     "Letters Lower",
//     "Substring SA",
//     "IsValid @",
//     "Registration"]);

    registration(["ThisIsSoftUni",
    "Reverse 1 3",
    "Replace S",
    "Substring hi",
    "Registration"])
