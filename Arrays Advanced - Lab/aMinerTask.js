function aMinerTask(input) {
    let collection = {};

    for (let i = 0; i < input.length; i += 2) {
        const resurce = input[i];
        const quantity =Number(input[i + 1])

        if(!collection.hasOwnProperty(resurce)){
            collection[resurce] = 0;
        }
        collection[resurce] += quantity;
    }
     for (const item in collection) {
        console.log(`${item} -> ${collection[item]}`);
     }
}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])