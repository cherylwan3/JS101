/**
 * print longest sentence
 * endings-> . || ! || ?
 * any char not space or endings as word 
 * 
 * output: longest string, longest string's word count
 *
 * A------
 * let startIdx = 0
 * let obj = {}
 * iterate over string Idx from 1 to string's length 
 *  if str[idx] === endings, 
 *   get the str from startIdx to current idx to arrStrings
 *   get the length of strings
 *    obj[length] = str
 * 
 *     new startIdx = current idx
 * 
 * get the obj's keys as an array
 * sort the array from least to greatest
 * get the array[array.length - 1] key
 * 
 * log the obj[key] to console
 * log the key length to console
 *
*/
function longestSentence(str) {
  const END_PUNC = ['.', '!', '?'];
  let obj = {};
  let startIdx = 0;

  for (let idx = 1; idx < str.length; idx += 1) {
    if (END_PUNC.includes(str[idx])) {
      let subStr = str.slice(startIdx, idx + 1);
      let wordCount = subStr.split(' ').length;
      obj[wordCount] = subStr;
      startIdx = idx + 2;
    }
  }
  //console.log(obj);
  let keyArr = Object.keys(obj).sort((a, b) => +a - +b);
  let longestKey = keyArr[keyArr.length - 1];

  let longText = obj[longestKey];
  let longWordCount = longText.split(' ').length;

  console.log(longText + '\n');
  console.log(`The longest sentence has ${longWordCount} words.\n`);
}



let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.