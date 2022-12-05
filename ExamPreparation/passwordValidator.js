function passwordValidator(input) {
    let passWord = input.shift();
    let tempPass = '';

    let line = input.shift();

    while (line != 'Complete') {
        let instruction = line.split(' ');
        let command = instruction.shift();
        //mod for command line
        if (instruction[0] === 'Upper' || instruction[0] === 'Lower') {
            command += ` ${instruction[0]}`;
        }
        //rite command line
        switch (command) {
            case 'Make Upper': {
                let index = Number(instruction[1]);
                tempPass = passWord.split('');
                tempPass = tempPass[index].toUpperCase();
                passWord = insert(passWord, index, tempPass);
                console.log(passWord);
            }
                break;

            case 'Make Lower': {
                let index = Number(instruction[1]);
                tempPass = passWord.split('');
                tempPass = tempPass[index].toLowerCase();
                passWord = insert(passWord, index, tempPass);
                console.log(passWord);
            }
                break;

            case 'Insert': {
                let index = Number(instruction[0]);
                let value = instruction[1];

                passWord = insert(passWord, index, value)
                console.log(passWord);
            }
                break;
            case 'Replace': {
                let char = (instruction[0]);
                let value = Number(instruction[1]);

                if (passWord.includes(char)) {
                    let getIndexOnChar = passWord.indexOf(char)
                    let getValuFromChar = char.charCodeAt(getIndexOnChar);

                    let result = getValuFromChar + value;
                    let newChar = String.fromCharCode(result);

                    let re = new RegExp(`${char}`, 'g');
                    passWord = passWord.replace(re, newChar);
                    console.log(passWord);
                }
            }
                break;
                case 'Validation':{
                    let reg = /[A-z0-9_]/g;
                    let regUpperCase = /[A-Z]/g;
                    let regLowerCase = /[a-z]/g;
                    let regDigit = /[0-9]/g;

                    if(passWord.length < 8){
                        console.log('Password must be at least 8 characters long!');
                    }else if(passWord !== reg){
                        console.log('PassworDAd must consist only of letters, digits and _!');
                    }else if(passWord !== regUpperCase){
                        console.log('Password must consist at least one uppercase letter!');
                    }else if(passWord !== regLowerCase){
                        console.log('Password must consist at least one lowercase letter!');
                    }else if(passWord !== regDigit){
                        console.log('Password must consist at least one digit!');
                    }

                }
                break;

        }

        line = input.shift();
    }
    function insert(str, index, value) {
        return str.substr(0, index) + value + str.substr(index);
    }

}
passwordValidator(['invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete']);