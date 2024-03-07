//The length property returns the length of a string:

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

//slice() extracts a part of a string and returns the extracted part in a new string.
let text1 = "Bread, Cake, Chocolate";
let part = text1.slice(7);
console.log(part)

//A string is converted to upper case with toUpperCase():
let sentence1 = "Hello World!";
let sentence2 = sentence1.toUpperCase();
console.log(sentence2)

//A string is converted to lower case with toLowerCase():
let text2 = "Hello World!";       // String
let text3 = text2.toLowerCase();  // text2 is text1 converted to lower
console.log(text3)