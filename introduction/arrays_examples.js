let array = [1, 2, 3, 4, "Fola"];
let array2 = ["9KICKS", "Folahan", "Joshua", "Omisakin"];
let array3 = new Array (12);

console.log(array);
console.log(array2.length);
console.log(array3.length);

Array.prototype.lol = function () {
    for(let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
    return this;
}

Array.prototype.arrToString = function () {
    sentence = "";
    for(i = 0; i < this.length; i++) {
        sentence += this[i] + " ";
    }
    return sentence;
}

Array.prototype.lmao = "hehehehehehehehe";


let result = array2.lol();
result.push("ISHOLA")
result.pop();
result.shift();
result.unshift("YE");
console.log(result);
let newResult = result.splice(1, 2);

let badWords = [
    "fuck",
    "fucking",
    "bastard",
    "bitch",
    "bullshit",
    "motherfucker"
];
let sentence = "I fucking love you bitch";
let sentenceBreak = sentence.split(" ");
console.log(sentenceBreak);
for (let i = 0; i < sentenceBreak.length; i++) {
    if (badWords.includes(sentenceBreak[i])) {
        sentenceBreak[i] =
            sentenceBreak[i][0] +
            "*".repeat(sentenceBreak[i].length - 2) +
            sentenceBreak[i][sentenceBreak[i].length - 1];
    }
}
console.log(sentenceBreak.arrToString());