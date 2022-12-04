function scretChat(input) {
    let concealedMessage = input.shift();

    let line = input.shift();

    while (line !== 'Reveal') {

        let instruction = line.split(':|:');
        let command = instruction.shift();
        switch (command) {
            case 'InsertSpace':
                let index = instruction[0];
                concealedMessage = concealedMessage.substr(0, index) + ' ' + concealedMessage.substr(index);
                console.log(concealedMessage);
                break;
            case 'Reverse':
                let substring = instruction[0];
                if (concealedMessage.includes(substring)) {
                    let subArr = substring.split('').reverse();
                    concealedMessage = concealedMessage.replace(substring, '');
                    console.log(concealedMessage = concealedMessage + subArr.join(''));
                } else {
                    console.log('error');
                }
                break;
            case 'ChangeAll':
                let getSubstring = instruction[0];
                let insertElement = instruction[1];

                for (const element of concealedMessage) {
                    if (element === getSubstring) {
                        concealedMessage = concealedMessage.replace(element, insertElement);
                    }
                }
                console.log(concealedMessage);

                break;

        }


        line = input.shift();
    }
    console.log(`You have a new text message: ${concealedMessage}`);

}
scretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);