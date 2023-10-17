function reverseWords(sentence) {
    let reversedSentence = '';
    let word = '';
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== ' ') {
            word = sentence[i] + word;
        } else {
            reversedSentence += word + ' ';
            word = '';
        }
        if (i === sentence.length - 1) {
            reversedSentence += word;
        }
    }
    return reversedSentence;
}
let inputSentence = "This is a sunny day";
let reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);