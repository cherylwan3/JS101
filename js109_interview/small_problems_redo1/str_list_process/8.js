wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []
/** 
 * split str into array of words
 * iterate over array using map => word
 *   return: append ` ${word.length}` to word
 * join array back to string with ' '
*/
function wordLengths(str) {
  if (arguments.length === 0 || arguments[0].length === 0) {
    console.log([]);
    return [];
  }

  let result = str.split(' ').map(word => {
    return word + ` ${word.length}`;
  });

  console.log(result);
  return result;
}