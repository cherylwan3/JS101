function isUppercase(str) {
  let result = [...str].every(char => {
    if (char.toLowerCase() >= 'a' && char.toLowerCase <= 'z') {
      return char >= 'A' && char <= 'Z';
    }

    return true;
  });

  console.log(result);
  return result;
}

// shortest
function isUppercase(string) {
  return string.toUpperCase() === string;
}


isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true