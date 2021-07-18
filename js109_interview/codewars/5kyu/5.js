//  https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
// The Hashtag Generator

/**
 * " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
  "    Hello     World   "                  =>  "#HelloWorld"
  ""                                        =>  false

 func (string)
 output: string 
 - hashtag symbol and string with no spaces
 - output string have all words with first letter capitalized
 - if str > 140 char OR empty string, return false

 A---
  split the str into arrWords=> str.split(' ')
  - filter arrWords for not empty strings
    => arr.filter(char => char !== '')
    -if filtered arrWords's length is 0, return false
  - use map on arrWord, capitalize first char
  - join arrWord together, add Hashtag in front of it 
  - return this string
*/

function generateHashtag(str) {
  let arrWords = str.split(' ');
  arrWords = arrWords.filter(char => char !== '');
  if (arrWords.length === 0) return false;

  arrWords = arrWords.map(word => capitalize(word));
  let result = '#' + arrWords.join('');
  if (result.length > 140) return false;

  return result;
}

function capitalize(word) {
  let capitalChar = word[0].toUpperCase();
  return capitalChar + word.slice(1);
}

console.log(generateHashtag("")); //, false, "Expected an empty string to return false")
console.log(generateHashtag(" ".repeat(200))); //, false, "Still an empty string")
console.log(generateHashtag("Do We have A Hashtag")) //, "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
console.log(generateHashtag("Codewars")) //, "#Codewars", "Should handle a single word.") //
console.log(generateHashtag("Codewars Is Nice")) //, "#CodewarsIsNice", "Should remove spaces.")
console.log(generateHashtag("Codewars is nice"))// , "#CodewarsIsNice", "Should capitalize first letters of words.")
console.log(generateHashtag("code" + " ".repeat(140) + "wars")) //, "#CodeWars") 
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")) //, false, "Should return false if the final word is longer than 140 chars.")
console.log(generateHashtag("a".repeat(139), "#A" + "a".repeat(138)))// "Should work")
console.log(generateHashtag("a".repeat(140))) //, false, "Too long") 


