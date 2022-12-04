function activationKeys(input) {
    let rowActivatinKey = input.shift();

    let getLineWithInstructions = input.slice();

    let getCommand = getLineWithInstructions.shift();

    while (getCommand !== 'Generate') {
        let splitCommand = getCommand.split('>>>');
        let cutTheCommand = splitCommand.shift();

        switch (cutTheCommand) {

            case 'Contains':
                let models = splitCommand[0];
                if (rowActivatinKey.includes(models)) {
                    console.log(rowActivatinKey);
                } else {
                    console.log('Substring not found!');
                }
                break;
            case 'Flip':
                let command = splitCommand[0];
                let firstIndex = splitCommand[1];
                let secondIndex = splitCommand[2];

                let getPart = rowActivatinKey.substring(firstIndex, secondIndex);
                let getNewPart = command == 'Upper' ? getPart.toUpperCase() : getPart.toLowerCase();
                rowActivatinKey = rowActivatinKey.replace(getPart, getNewPart);
                console.log(rowActivatinKey);
                break;
            case 'Slice':
                let getFirstIndex = splitCommand[0];
                let getSecondIndex = splitCommand[1];

                let part = rowActivatinKey.substring(getFirstIndex,getSecondIndex);
                rowActivatinKey = rowActivatinKey.replace(part,'');

                break;

        }

        getCommand = getLineWithInstructions.shift();
    }
    console.log(`Your activation key is: ${rowActivatinKey}`);



}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);