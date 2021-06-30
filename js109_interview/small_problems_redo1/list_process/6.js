palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]


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

/**
 *  call substrings on the str argument
 * iterate through substringArr, if palindromic,
 *    - reverse the substring, and compare to original
 *    return palindromic 
 * return substringArr
 */

function palindromes(str) {
  let substrArr = substrings(str);
  substrArr = substrArr.filter(subStr => {
    return ([...subStr].reverse().join('') === subStr) && subStr.length >= 2;
  });

  console.log(substrArr);
  return substrArr;
}