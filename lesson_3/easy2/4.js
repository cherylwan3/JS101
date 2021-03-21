// show two different ways to put
// the expected "Four score and " in front of it.

let famousWords = "seven years ago...";

let str1 = "Four score and " + famousWords;
console.log(str1);

let str2 = 'Four score and '.concat(famousWords);
console.log(str2);