function wordsTracker(input){
    let words = {};

    for (const line of input) {
        let theWords = line.shift().split(' ');
        let getWords = line.split(', ');
        console.log(theWords);
    }
}
wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 
    'count', 'the', 'occurrences', 'of', 'the', 'words', 
    'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);