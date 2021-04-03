let words = ['go', 'ahead', 'and', 'jump'];

let sortedWords = words.sort((letterA, letterB) => {
  return letterA.length - letterB.length;
});

console.log(sortedWords);