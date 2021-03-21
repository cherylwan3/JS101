let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new strArring that swaps the case of all of the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

// my answer
let str = munstersDescription.split('').map(letter => {
  if (letter === 'T' || letter === 'M') { 
    return letter.toLowerCase();
  } else {
    return letter.toUpperCase();
  }
}).join('');
console.log(str);


// books answer
let str1 = munstersDescription.split('').map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join('');
console.log(str1)


