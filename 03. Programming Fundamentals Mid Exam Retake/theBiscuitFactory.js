function theBiscuitFactory(input){
    //get input
    let biscuitPerday = Number(input.shift());
    let workars = Number(input.shift());
    let otherFactory = Number(input.shift());

    //
    let biscuitPerWorking = biscuitPerday * workars;
    let thirdDay = (Math.floor(biscuitPerWorking * 0.25)) * 10;

    let getMountProduce = ((biscuitPerday * workars) * 30) - thirdDay;

    let getProcent = ((getMountProduce - otherFactory)/otherFactory) * 100;


    console.log(`You have produced ${getMountProduce} biscuits for the past month.`);
    if(getMountProduce > otherFactory){
        console.log(`You produce ${getProcent.toFixed(2)} percent more biscuits.`);
    }else{
        console.log(`You produce ${Math.abs(getProcent).toFixed(2)} percent less biscuits.`);
    }

}

theBiscuitFactory(["65",
"12",
"26000"]);