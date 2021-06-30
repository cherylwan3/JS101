/**
 * declare resultArr
 * 
 * iterate over str's length from 0 to str.length - 1
 * pass each string of str.slice(idx, str.length)
 * push array to resultArr
 * flatten resultArr
*/


function leadingSubstrings(str) {
  let resultArr = [...str].map((_,idx) => str.slice(0, idx + 1));

  return resultArr;
}

function substrings(str) {
  let resultArr = [...str].reduce((accumArr,_,idx) => {
    return accumArr.concat(leadingSubstrings(str.slice(idx, str.length)));
  }, []);

  return resultArr.flat();
}

console.log(substrings('abcde'));

// returns
/* [ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
 */