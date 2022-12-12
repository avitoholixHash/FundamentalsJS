function zoo(input) {
    let zoo = {}

    let line = input.shift();

    while (line !== 'EndDay') {
        let instruction = line.split(': ');
        let command = instruction.shift();
        let lineInstruction = instruction.shift().split('-')

        switch (command) {
            case 'Add': {
                let [name, neddFood, area] = lineInstruction;
                if (zoo.hasOwnProperty(name)) {
                    zoo[name].neddFood += Number(neddFood);
                } else {
                    zoo[name] = {
                        neddFood: Number(neddFood),
                        area: area,
                    }
                }

            }
                break;
            case 'Feed': {
                let name = lineInstruction[0];
                let feed = Number(lineInstruction[1]);
                if (zoo[name]) {
                    zoo[name].neddFood -= feed;
                    if (zoo[name].neddFood <= 0) {
                        zoo[name].neddFood = 0;
                        delete zoo[name];
                        console.log(`${name} was successfully fed`);
                    }
                }
            }
                break;

        }


        line = input.shift();
    }

    for (const name in zoo) {
       console.log(zoo[name].neddFood);
    }


    console.table(zoo);
}
// zoo(["Add: Adam-4500-ByTheCreek",
//     "Add: Maya-7600-WaterfallArea",
//     "Add: Maya-1230-WaterfallArea",
//     "Feed: Jamie-2000",
//     "EndDay"])

zoo(["Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"]);