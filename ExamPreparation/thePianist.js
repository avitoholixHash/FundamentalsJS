function thePianist(input) {

    //get input
    let myPlayList = {};
    let length = Number(input.shift());
    //get my play list 
    for (let i = 0; i < length; i++) {
        let line = input.shift().split('|');
        let [name, composerName, gamma] = line;

        myPlayList[name] = {
            composerName: composerName,
            gamma: gamma,
        }

    }

    //task logic and get next instructions
    let getLine = input.shift();

    while (getLine !== 'Stop') {
        //take instructions form getline with split - and command 
        let instructions = getLine.split('|');
        let command = instructions.shift();
        //using different commands
        switch (command) {
            case 'Add': {
                let [name, composer, gamma] = instructions;
                if (myPlayList.hasOwnProperty(name)) {
                    console.log(`${name} is already in the collection!`);
                } else {
                    myPlayList[name] = {
                        composerName: composer,
                        gamma: gamma,
                    };
                    console.log(`${name} by ${composer} in ${gamma} added to the collection!`);
                }
            }
                break;

            case 'Remove': {
                let name = instructions[0];
                if (myPlayList.hasOwnProperty(name)) {
                    delete myPlayList[name];
                    console.log(`Successfully removed ${name}!`);
                } else {
                    console.log(`Invalid operation! ${name} does not exist in the collection.`);
                }
            }
                break;

            case 'ChangeKey': {
                let [name, gamma] = instructions;
                if (!myPlayList.hasOwnProperty(gamma)) {
                    myPlayList[name].gamma = gamma;
                    console.log(`Changed the key of ${name} to ${gamma}!`);
                } else {
                    console.log(`Invalid operation! ${name} does not exist in the collection.`);
                }
            }
                break;

        }

        getLine = input.shift();
    }
    //print
    for (const name in myPlayList) {
        console.log(`${name} -> Composer: ${myPlayList[name].composerName}, Key: ${myPlayList[name].gamma}`);
    }
    //console.table(myPlayList);

}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])