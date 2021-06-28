// function input: string
// function output: UTF-16 string value 
// - UTF-16 string value: sum of UTF16 values of every character in string

// A:
// iterate over string, get the UTF-16 value of each character
// add it all together

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

function utf16Value(str) {
  let sum = 0;
  for (let idx = 0; idx < str.length; idx += 1) {
    sum += str.charCodeAt(idx);
  }
  console.log(sum);
  return sum;
}

function utf16Value(str) {
  let sum = str.split('')
    .reduce((accum, char) => {
      return accum + char.charCodeAt(0);
      }, 0
    );
  console.log(sum);
  return sum;
}