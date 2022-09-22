function oddNumbers(n) {

    let result = 0;
    for (let i = 1; i <= n * 2; i++) {
        if (i % 2 !== 0) {
            result += i;
            console.log(i);
        }
    }
    console.log(`Sum: ${result}`);
}
oddNumbers(5);