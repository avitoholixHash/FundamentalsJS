function manOWar(stratGame) {
    //get the ships
    let pirateShip = stratGame.shift().split('>');
    let warShip = stratGame.shift().split('>');
    //get the health
    let maxHealth = Number(stratGame.shift());

    //the game beginning
    let cutrrentLine = stratGame.shift();

    while (cutrrentLine !== 'Retire') {
        let commandLine = cutrrentLine.split(' ');
        let command = commandLine.shift();

        switch (command) {
            case 'Fire': {
                let index = commandLine[0];
                let damage = Number(commandLine[1]);
                let getLength = warShip.length;
                if (getLength < index) {
                    break;
                }
                else {
                    warShip[index] -= damage;
                    if (warShip[index] <= 0) {
                        console.log('You won! The enemy ship has sunken.');
                        break;
                    }
                }
            }
                break;

            case 'Defend': {
                let startIndex = Number(commandLine[0]);
                let endIndex = Number(commandLine[1]);
                let damage = Number(commandLine[2]);

                for (let i = startIndex; i <= endIndex; i++) {
                   let getLength = pirateShip.length;
                    if (getLength < endIndex) {
                        break;
                    } 
                        pirateShip[i] -= Number(damage);
                        if (pirateShip[i] <= 0) {
                            console.log('You lost! The pirate ship has sunken.');
                            break;
                        }
                    
                }
            }
                break;

            case 'Repair': {
                let index = Number(commandLine[0]);
                let health = Number(commandLine[1]);

                pirateShip[index] += Number(health);

                if (pirateShip[index] > maxHealth) {
                    pirateShip[index] = maxHealth;
                }
            }
                break;

            case 'Status':{
                let count = 0;
                let procent = (20 * 70) / 100; 
                for(let i = 0; i <= pirateShip.length; i++){
                    if(pirateShip[i] < procent){
                        count++;
                    }
                }
                console.log(`${count} sections need repair.`);
            }
            break;

        }



        cutrrentLine = stratGame.shift();
    }
    //print status-points on both ship
    let piratShipStatus = 0;
    pirateShip.forEach(element => {
        piratShipStatus += Number(element);
    });
    console.log(`Pirate ship status: ${piratShipStatus}`);

    let worShipStatus = 0;
    warShip.forEach(element => {
        worShipStatus += Number(element);
    });
    console.log(`Warship status: ${worShipStatus}`);

    

    console.log(pirateShip);
    console.log(warShip);

}
manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])

    manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])