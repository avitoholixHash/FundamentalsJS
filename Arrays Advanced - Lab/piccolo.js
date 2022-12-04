function piccolo(inputCar) {
    let parking = {};

    for (const line of inputCar) {
        let [direction, carNumber] = line.split(',');
        if (direction === 'IN') {
            parking[carNumber] = direction;
        } else if (parking.hasOwnProperty(carNumber)) {
            delete parking[carNumber];
        }
        const isEmpty = Object.keys(parking).length === 0;
        if (isEmpty) {
            console.log('Parking Lot is Empty');
        }

    }

    let sorted = Object.entries(parking).sort((a, b) =>
        a[0].match(/\d+/g) - b[0].match(/\d+/g));

    for (const car of sorted) {
        console.log(car[0]);
    }

}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);