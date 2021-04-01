let statement = "The Flintstones Rock";
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let finalObj = {};

// let lettersArr = statement.split('').filter(letter => letter !== ' ');

/* 
  method 1: 
  lettersArr.forEach(letter => {
  finalObj[letter] = finalObj[letter] || 0;
  finalObj[letter] += 1;
}); */

// method 2:
/* lettersArr.forEach(letter => {
  if (finalObj[letter] === undefined) {
    finalObj[letter] = 0;
    finalObj[letter] += 1;
  } else {
    finalObj[letter] += 1;
  }
});  */

// method 3:
for (let counter = 0; counter < statement.length; counter += 1) {
  let letter = statement[counter];
  if (letter === ' ') continue;

  finalObj[letter] = finalObj[letter] || 0;
  finalObj[letter] += 1;
}


console.log(finalObj);