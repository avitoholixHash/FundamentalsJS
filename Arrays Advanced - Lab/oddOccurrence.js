function oddOccurrence(input) {
    let resultObj = {};
    let allWords = input
        .split(' ')
        .map(w => w.toLowerCase());
    let getLength = allWords.length;

    for (let i = 0; i < getLength; i++) {
        if (!resultObj.hasOwnProperty(allWords[i])) {
            resultObj[allWords[i]] = [];
        }
        resultObj[allWords[i]].push(i);
    }

    let sorted = Object.entries(resultObj).sort((a, b) => a[0][1] - b[0][1]);
    let result = '';

    for (const element of sorted) {
        if (element[1].length % 2 !== 0) {
            result += `${element[0]} `
        }
    }
    console.log(result);

}
oddOccurrence('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');