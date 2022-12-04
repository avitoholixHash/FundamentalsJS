function wordsTracker(input){

    const words = {};

    let getWordsToChck = input.shift().split(' ');
    //Get first two words for
    for (const word of getWordsToChck) {
        words[word] = 0;
    }

    for (const word of input) {
        if(words.hasOwnProperty(word)){
            words[word]++;
        }
    }
    //Sort Obj (words)
    let sortArr = Object.entries(words).sort(function compareFn(kvpA, kvpB){
        kvpA[0] - kvpB[0];
    });
    //Convert back to Obj
    const sortObj = Object.fromEntries(sortArr);

    for (const key in sortObj) {
        console.log(`${key} - ${sortObj[key]}`);
    } 
    
}
wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])