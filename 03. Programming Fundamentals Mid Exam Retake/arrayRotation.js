function arrayRotation(arr, indexRotation) {

    for (let i = 0; i < indexRotation; i++) {
        let getFirstItem = arr.shift();
        arr.push(getFirstItem);
    }
    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);