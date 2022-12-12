function pirates(input) {
    //get input
    let towns = {};
    let sailLine = input.shift();

    //Get our towns
    while (sailLine !== 'Sail') {
        let instruction = sailLine.split('||');
        let [city, people, gold] = instruction;
        //Chck th city exist
        if (towns.hasOwnProperty(city)) {
            //Update town of exist
            towns[city].people += Number(people);
            towns[city].gold += Number(gold);
        } else {
            towns[city] = {
                people: Number(people),
                gold: Number(gold),
            }
        }

        sailLine = input.shift();
    }

    //get instructions 
    while (sailLine !== 'End') {
        let instruction = sailLine.split('=>');
        let command = instruction.shift();

        switch (command) {
            case 'Plunder': {
                //Get instruction for the atack 
                let city = instruction.shift();
                let [people, gold] = instruction.map(a => Number(a));
                //get plunder from citys after atack
                towns[city].people -= people;
                towns[city].gold -= gold
                //Print towns atack and plunder
                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                //Town is destroyed 
                if (towns[city].people == 0 || towns[city].gold == 0) {
                    delete towns[city];
                    console.log(`${city} has been wiped off the map!`);
                }

            }
                break

            case 'Prosper': {
                //Get instruction for prosper the city
                let city = instruction.shift();
                let gold = Number(instruction.shift());
                //Put the gold in treasury 
                if (gold < 0) {
                    console.log('Gold added cannot be a negative number!');
                } else {
                    towns[city].gold += gold;
                    console.log(`${gold} gold added to the city treasury. ${city} now has ${towns[city].gold} gold.`);
                }
            }
                break
        }
        sailLine = input.shift();
    }
    //The cities that remained after the attack
    let citiesRemained = Object.keys(towns).length;
    //Print result
    console.log(`Ahoy, Captain! There are ${citiesRemained} wealthy settlements to go to:`);
    for (const town in towns) {
        console.log(`${town} -> Population: ${towns[town].people} citizens, Gold: ${towns[town].gold} kg`);
    }
    //console.table(towns);
}
// pirates(["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"])

pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",//update
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);