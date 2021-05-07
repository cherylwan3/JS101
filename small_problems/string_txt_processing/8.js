/**
 * P-------------------
 * input: func(str)
 * output: array
 * rules:
 * - returns array that contains every word from the string
 * - with each word followed by a space and the word's length
 * - If the argument is an empty string or if no argument is passed, 
 *    the function should return an empty array.
 * D/A----------------------------
 * - if @str's length is 0 OR argument's length is zero
 * - split the string into an array by (' ') -> @strArr
 * - set @result to []
 * - start loop: iterate over @strArr , 
 *  - return @word + ' ' + word.length
 * - end loop
 * - return @strArr
*/

function wordLengths1(str) {
  if (arguments.length === 0 || str.length === 0) {
    //console.log([]);
    return [];
  }

  let result = str.split(' ').map(word => word + ' ' + word.length);
  // console.log(result);
  return result;
}


// arrow function
const wordLengths = (...args) => {
  if (args.length === 0 || args[0].length === 0) {
    console.log([]);
    return [];
  }
  let result = args[0].split(' ').map(word => word + ' ' + word.length);
  console.log(result);
  return result;
}


// ex
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