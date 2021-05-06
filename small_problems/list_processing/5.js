/**
 * P---------------------
 * input: func(string)
 * output: array of substrings
 * rules:
 * - Order the returned list by where in the string the substring begins
 *  all substrings that start at index position 0 should come first
 *  then all substrings that start at index position 1, and so 
 * Since multiple substrings will occur at each position, 
 *  return the substrings at a given index from shortest to longest.
 * - You may (and should) use the 
 *  leadingSubstrings function you wrote in the previous exercise:
 * D/A-------------------
 * - declare func
 * - set @stringArr to []
 * - start a loop to iterate over string from @idx 0 to string.length - 1 
 *   - append str.slice(idx) to stringArr
 *   - end loop
 * - start a loop to iterate over stringArr
 *   - call leadingSubstrings on every element -> @elemArr
 *   - append @elemArr to empty array [] -> @resultArr
 *    - end loop
 * - return resultArr
 */

function leadingSubstrings(str) {
  return [...str].map((_, idx) => str.slice(0, idx + 1));
}

function substrings(str) {
  return [...str].reduce((arr, _, idx) => {
    return arr.concat(leadingSubstrings(str.slice(idx)));
  }, []);
}


// ex 
console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]