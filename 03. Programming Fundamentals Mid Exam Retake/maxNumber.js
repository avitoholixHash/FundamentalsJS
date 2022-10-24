function maxNumber(arr) {
    arr.sort().reverse();
    console.log(arr.slice(0, 3).join(' '));
}
maxNumber([1, 4, 3, 2]);