function needForSpeed(input) {
    let garage = {};
    let myGarage = Number(input.shift());
    //Get my garage
    for (let i = 0; i < myGarage; i++) {
        let myCar = input.shift().split('|');
        let name = myCar.shift();

        let [mileage, fuel] = myCar
        garage[name] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        }

    }

    let getLine = input.shift();

    while (getLine != 'Stop') {
        let instructions = getLine.split(' : ');
        let command = instructions.shift();
        let carName = instructions.shift();

        switch (command) {
            case 'Drive':
                let [distance, requiredFuel] = instructions.map(n => Number(n));
                //Distans add
                garage[carName].mileage += distance;
                if (garage[carName].mileage >= 100000) {
                    delete garage[carName];
                    console.log(`Time to sell the ${carName}!`);
                } 
                    
                
                //Enough fuel
                if (garage[carName].fuel > requiredFuel) {
                    garage[carName].fuel -= requiredFuel;
                    console.log(`${carName}} driven for ${distance} kilometers. ${requiredFuel} liters of fuel consumed.`);
                } else {
                    console.log('Not enough fuel to make that ride');
                }
                break;
            case 'Refuel':
                let reFuelLiters = instructions[0];
                garage[carName].fuel += Number(reFuelLiters);
                let result = 0;
                let sumFuel = 0;

                if (garage[carName].fuel > 75) {
                    result = garage[carName].fuel - 75;
                    sumFuel = reFuelLiters - result;
                    console.log(`${carName} refueled with ${sumFuel} liters`);
                } else {
                    console.log(`${carName} refueled with ${reFuelLiters} liters`);
                }
                break;
                case 'Revert':
                    let reVertKilometers = instructions[0]
                    garage[carName].mileage -= Number(reVertKilometers);
                    if(garage[carName].mileage < 10000){
                        garage[carName].mileage = 10000;
                    }else{
                        console.log(`${carName} mileage decreased by ${reVertKilometers} kilometers`);
                    }
                    break;
        }

        getLine = input.shift();
    }

    for (const car in garage) {
        console.log(`${car} -> Mileage: ${garage[car].mileage} kms, Fuel in the tank: ${garage[car].fuel} lt.`);
     }
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])
console.log('------------------------------------');
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])