function counterStrike(input) {
    let index = 0;
    let energy = Number(input[index]);
    index++;

    let getNumFromInput = 0;
    let sumOfPoint = 0;
    let counter = 0;

    let won = 0;
    


    while (input !== "End of battle") {

        counter++;
        getNumFromInput = Number(input[index]);
        sumOfPoint += getNumFromInput;
       

        if (counter % 3 == 0) {

            energy += counter;
            
        }

        if(energy < sumOfPoint){
            won = index;
            energy = 0;
            console.log(`Not enough energy! Game ends with ${won} won battles and ${energy} energy.`);
            break;
        }else if(energy > sumOfPoint){
            won = index;
            energy -= sumOfPoint;
            console.log(`Won battles: ${won}. Energy left: ${energy}`);
        }
        index++;
    }
}
counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);