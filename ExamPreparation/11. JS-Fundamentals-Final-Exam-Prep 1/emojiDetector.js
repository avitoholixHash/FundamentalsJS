function emojiDetector(text) {
    //get digits from text
    let digitsPatern = /\d/g;
    let digits = text.matchAll(digitsPatern);

    let sumFromDigits = 1;
    //Our cool threshold
    for (const digit of digits) {
        sumFromDigits *= Number(digit[0]);
    }
    //Get emoji
    let pattrnForEmoji = /(\*{2}|:{2})(?<name>[A-Za-z]{3,})\1/gm;
    let emojis = text.matchAll(pattrnForEmoji);
    let coolEmojis = [];

    let getSum = 0;
    
    for (const emoji of emojis) {
        
        
        for(let i = 0; i < emojiArr.length;i++){
            
        }


    }
   
        

}
emojiDetector('In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**');