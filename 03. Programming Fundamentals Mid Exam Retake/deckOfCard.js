function deckOfCards(input) {
    //Get input
    let theDeck = input.shift().split(',');
    let getComandslength = Number(input.shift());


    for (let i = 0; i < getComandslength; i++) {
        let getComands = input.shift().split(',');
        let comands = getComands.shift();



        switch (comands) {
            case 'Add':
                let getCards = getComands.shift().trim();
                if (theDeck.includes(getCards)) {
                    console.log('Card is already in the deck');
                } else {
                    theDeck.push(getCards);
                    console.log('Card successfully added');
                }
                break;

            case 'Remove':
                let getCards2 = getComands.shift().trim();
                if (theDeck.includes(getCards2)) {
                    let indexCut = theDeck.indexOf(getCards2);
                    theDeck.splice(indexCut, 1);
                    console.log('Card successfully removed');
                }else{
                    console.log('Card not found');
                }
                break;

            case 'Remove At':
                
                
                let getIndexToCut = Number(getComands.shift());
                if (getIndexToCut < 0 || getIndexToCut > theDeck.length) {
                    console.log('Index out of range');
                } else  {
                    theDeck.splice(getIndexToCut, 1);
                    console.log('Card successfully removed');
                }

                break;
            case 'Insert':

                let getIndexToPushCards = Number(getComands.shift());
                let getCard = getComands.shift().trim();
                if (getIndexToPushCards < 0 || getIndexToPushCards > theDeck.length) {
                    console.log('Index out of range');
                } else if (!theDeck.includes(getCard)) {
                    theDeck.splice(getIndexToPushCards, 0, getCard)[0];
                    console.log(`Card successfully added`);
                } else {
                    console.log('Card is already added');
                }
                break;
        }


    }
    let print = theDeck.join(',').trim();
    console.log(print.trim());

}
deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs",
    "2",
    "Insert, -1, Queen of Spades",
    "Remove At, 1"]);