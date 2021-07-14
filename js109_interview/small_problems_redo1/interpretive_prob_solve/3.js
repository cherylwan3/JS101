/**
 B:O   X:K   D:Q   C:P   N:A
 G:T   R:E   F:S   J:W   H:U
 V:I   L:Y   Z:M

 words can spell w/o using any both letters of any given block 
 can also only use each block once

 func (str)
 returns true: word can be spelled using set of blocks
 - use a single letter from blocks 
 return false: otherwise

 D--------------
 ['BObo', 'XKxk', 'DQdq', 'CPcp', 'NAna', 'GTgt', 'REre', 'FSfs', 'JWjw', 'HUhu', 'VIvi', 'LYly', 'ZMzm']

 A------------

 numCharInArr = 0;
 iterate over each char of word -> char
    iterate over lettersArr from lettersIdx 0 to < lettersArr.length
     -> let letters = letterArr[lettersIdx]
      if [...letters] includes char, 
        charInArr += 1;

  check if word.length === numCharInArr


*/

const LETTERS = [
  'BObo', 'XKxk', 'DQdq', 'CPcp', 'NAna', 'GTgt', 
  'REre', 'FSfs', 'JWjw', 'HUhu', 'VIvi', 'LYly',
  'ZMzm'
];

function isBlockWord(word) {
  let numCharInArr = 0;
  let lettersArr = LETTERS.slice();

  [...word].forEach(char => {
    lettersArr.forEach(letter => {
      if ([...letter].includes(char)) numCharInArr += 1;
    });
  });

  let result = (numCharInArr === word.length);
  console.log(result);
  return result;
}

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
isBlockWord('floW');       // true
isBlockWord('APPLE');      // false
isBlockWord('apple');      // false
isBlockWord('apPLE');      // false
isBlockWord('Box');        // false
