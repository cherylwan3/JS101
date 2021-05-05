/**
 * P-------------------------
 * input: func (string)
 * output: string
 * rules:
 * - returns a new string containing the words from the string argument
 * - All five-or-more letter words should have their letters in reverse order. 
 * - The string argument will consist of only letters and spaces. 
 * - Words will be separated by a single space
 * D/A------------------------
 * - declare function name 
 * - split the string into an array -> @stringArray
 * - start a loop to iterate over @stringArray 
 *     - if current @word 's length >= 5, 
 *        - split @word into @wordArray and reverse the @wordArray
 *        - return @wordArray joined  into a string

 *  - end loop
 *  - join @stringArray back into a string and return it 
 */

function reverseWords(string) {
  let result = string.split(' ').map(word => {
    if (word.length >= 5) return word.split('').reverse().join('');
    return word;
  }).join(' ');

  console.log(result);
  return result;
}


// ex
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"