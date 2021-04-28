/**
 * P-------------------
 * input: function, string argument
 * output: new string 
 * rules:
 * - new string contains value of original string with all consecutive duplicate characters
 *   collapsed into a single character 
 * A ---------------------------
 * within the function crunch with argument 'string'
 * - split the string into an array of each character with '' as the seperator 
 *  called 'stringArray'
 * - make a new array 'resultArray'
 * - start a loop with counter called 'index' at 0 of 'singleCharArray'
 *    - if element at current 'index' already exists in 'singleCharArray', skip the iteration 
 *    - add element at current 'index' of 'stringArray' to 'resultArray'
 * - join the elements of 'resultArray' together to 'resultString'
 * -return 'resultString'
 */

function crunch1(string) {
  let stringArray = string.split('');
  let crunchArray = [];

  stringArray.forEach((char, idx) => {
    if (stringArray[idx] !== stringArray[idx + 1]) {
      crunchArray.push(char);
    } 
  });
  
  let crunchText = crunchArray.join('');
  
  console.log(crunchText)
  return crunchText;
}

// books method 
function crunch(text) {
  let crunchText = '';

  for (let index = 0; index <= text.length - 1; index += 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }
  }

  return crunchText;
}


// ex
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""