function reversArray(count, arrayOfNum) {

    let curentArray = [];
    let reversArray = [];

    for (let i = 0; i < count; i++) {

        curentArray[i] = arrayOfNum[i];

    }
    for (let i = curentArray.length - 1 ; i >= 0; i--) {

        reversArray[curentArray.length] = curentArray[i]

    }

    console.log(reversArray);
}

reversArray(3, [10, 20, 30, 40, 50]);