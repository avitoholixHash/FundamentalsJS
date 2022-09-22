function solve(base, increment) {

    let stone = 0;
    let mramor = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let height= 0;
    let counter = 0;

    for (let i = base; i > 0; i -= 2) {
        counter++;
        stone += (i * i) * increment;
        mramor += (i * 4 - 4) * increment;
        height = counter * increment;

        if (counter === 5) {
            lapisLazuli = (i * 4 - 4) * increment;
        }

        if(counter === 1){
            gold = counter;
            
        }
    }


    console.log(`Stone required: ${Math.ceil(stone - mramor - gold)}`);
    console.log(`Marble required: ${mramor-lapisLazuli}`);
    console.log(`Lapis Lazuli required: ${lapisLazuli}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`)


}
solve(11,1);