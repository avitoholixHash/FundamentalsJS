function wildZoo(input) {
    let zooLine = input.slice();
    let line = zooLine.shift();

    //create object
    let animals = {};
    let areaArray = [];

    while (line !== 'EndDay') {
        let command = line.split(': ');
        // depends on command
        if (command[0] === 'Add') {
            let [name, food, area] = command[1].split('-');
            // IF animal didn't exist -> create
            if (!animals[name]) {
                animals[name] = {
                    food: Number(food),
                    area,
                }
                if (!areaArray.includes(area)) {
                    areaArray.push(area, 1)
                } else {
                    areaArray[areaArray.indexOf(area) + 1]++;
                }
            }
            // IF exist add additional food to it quantity
            else {
                animals[name].food += Number(food);
            }
        }
        //IF command is FEED
        else if (command[0] === 'Feed') {
            let [name, portion] = command[1].split('-');
            //IF animal exist -> feed
            if (animals[name]) {
                //reduce food quantity
                animals[name].food -= Number(portion);
                //IF fed
                if (animals[name].food <= 0) {
                    console.log(`${name} was successfully fed`);
                    //find index in area array
                    let currentArea = animals[name].area;
                    let index = areaArray.indexOf(currentArea);
                    areaArray[index + 1]--;
                    //IF area has no hungry animals -> exclude it
                    if (areaArray[index + 1] === 0) {
                        areaArray.splice(index, 2)
                    }
                    delete animals[name];
                }
            }
        }
        line = zooLine.shift();
    }
    //print output
    console.log('Animals:');
    for (const name of Object.keys(animals)) {
        console.log(`${name} -> ${animals[name].food}g`);
    }
    //print hungry animals areas
    console.log('Areas with hungry animals:');
    for (let i = 0; i < areaArray.length; i += 2) {
        console.log(`${areaArray[i]}: ${areaArray[i + 1]}`);
    }
}