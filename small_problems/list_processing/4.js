/**
 * P---------------------
 * input: func(string)
 * output: array containing string
 * rules:
 * - returns a list of substrings of that string
 * - each substring should begin with the first letter of the word
 * - list should be ordered from shortest to longest.
 * D/A-------------------
 * - declare func (str)
 * - set @result to empty array
 * - split str to array -> @strArr
 * - set @idx to 1
 * - start loop, while @result . length < @strArr . length
 *  - append @strArr.slice(0, idx) to @result
 *  - increment @idx by 1
 * - end loop
 * - sort @result 
*/

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function leadingSubstrings1(str) {
  let result = [];
  for (let idx = 1; idx <= str.length; idx += 1) {
    result.push(str.slice(0, idx));
  }

  console.log(result);
  return result;
}

// using list processing functions

// using reduce
function leadingSubstrings2(str) {
  let result = [...str].reduce((array, _, idx) => { 
                return array.concat(Array(str.slice(0, idx + 1)));
              }, []);

  console.log(result);
  return result;
}

// using map
function leadingSubstrings(str) {
  let result = [...str].map((_, idx) => str.slice(0, idx + 1));

  //console.log(result);
  return result;
}