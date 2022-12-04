function emojiDetector(input) {
    let text = input.shift();

    let digitResults = text.matchAll(/\d/g);
    let coolThreshold = 1;

    for (const digitResult of digitResults) {

        coolThreshold *= digitResult[0];

    }

    console.log(coolThreshold);

}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);