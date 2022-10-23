function softUniReception(input) {
    //Get input data
    let employeeOne = Number(input[0]);
    let employeeTwo = Number(input[1]);
    let employeeThree = Number(input[2]);
    let studentAsk = Number(input[3]);
    //Тask logic
    let answarPerHour = employeeOne + employeeTwo + employeeThree;

    let result = Math.ceil(studentAsk / answarPerHour);

    let total = Math.floor(result / 4);
    //Print
    console.log(`Time needed: ${result + total}h.`);
}

softUniReception(['1', '2', '3', '45']);
