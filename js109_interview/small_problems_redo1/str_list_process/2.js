function removeVowels(arrayOfStr) {
  let result = arrayOfStr.map(str => [...str].filter(char => {
    return !'aeiouAEIOU'.includes(char);
  }).join(''));

  console.log(result);
  return result;
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]