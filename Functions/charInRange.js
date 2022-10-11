function charInRange(start, end) {

    let charStart = Math.min(start.charCodeAt(), end.charCodeAt());
    let endChar = Math.max(start.charCodeAt(), end.charCodeAt());

    let printArr = [];

    for (let i = charStart + 1; i < endChar; i++) {

        printArr.push(String.fromCharCode(i));
        
    }
    console.log(printArr.join(' '));
}
charInRange('C',
'#')