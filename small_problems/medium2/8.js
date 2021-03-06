/* eslint-disable max-lines-per-function */
/**
 * P---------------------
 * input: func (str)
 * output: 
 * 1) longest sentence
 * 2) The longest sentence as @numOfWords words.
 * rules:
 * - program prints the longest sentence in a string 
 *  based on the number of words.
 * - sentences may end with : period . exclamation ! questionMark ? 
 * - any sequence of char that aren't space or sentencing ending is a word
 * - '--' is a word
 * - Log the longest sentence and its word count to the console. 
 * - be sure you preserve the punctuation from the end of the sentence.
 * - this problem is about manipulating and processing strings
 * - every detail about the string matters 
 *  (e.g., case, punctuation, tabs, spaces, etc.).
 * D------------------
 * ex. "To be or not to be! Is that the question?"
 * // To be or not to be!
 * // The longest sentence has 6 words.
 * 
 * sentenceEnd  = ['.', '!', '?']
 * 
 * A-----------------
 * - function longText (str)
 * - declare @longSent, @wordCount = 0
 * - start loop: iterate over every @str's char from @idx 0 to str.length
 *  - if @sentenceEnd includes @char 
 *    - set @currentSentence to :slice a portion of the str from 0 to @idx + 1 
 *    - set @currentWordCount to calling @getWordCount on @currentSentence
 *      - if @currentWordCount > @wordCount , 
 *          @wordCount = @currentWordCount
 *          @longSent = @currentSentence
 *      - end if 
 *  - end if 
 * - end loop
 * - log @longSent
 * - log `The longest sentence has ${wordCount} words.`
 * 
 * --------------------------------------
 * - function getWordCount (sentence)
 *   - split sentence by (' ') to an array
 *   - return length of the array
 * - end function
*/

// my original solution
function longestSentence1(str) {
  const END_PUNCTUATION = ['.', '!', '?']; 
  let longSentence; 
  let wordCount = 0;
  let previousIdx = 0;

  [...str].forEach((char, idx) => {
    if (END_PUNCTUATION.includes(char)) {
      let currentSentence = str.slice(previousIdx, idx + 1);
      let currentWordCount = currentSentence.split(' ').length;
      
      if (currentWordCount > wordCount) {
        wordCount = currentWordCount;
        longSentence = currentSentence;
      } 

      previousIdx = idx + 2;
    }
  })
  console.log(longest.sentence + '\n');
  console.log(`The longest sentence has ${longest.wordCount} words. \n`); 
}

// longer way: using reduce 
function longestSentence(str) {
  const END_PUNCTUATION = ['.', '!', '?']; 

  let longest = [...str].reduce(
    function(longest, char, endIdx) {
      if (END_PUNCTUATION.includes(char)) {
        let currentSentence = str.slice(longest.startIdx, endIdx + 1);
        let currentWordCount = currentSentence.split(' ').length;
        
        if (currentWordCount > longest.wordCount) {
          return { 
            startIdx: endIdx + 2, 
            sentence: currentSentence, 
            wordCount: currentWordCount
          } 
        } else {
          longest.startIdx = endIdx + 2;
          return longest;
        }
      }

      return longest;
    }, 
    { startIdx: 0, sentence: '', wordCount: 0 }
  );
  console.log(longest.sentence + '\n');
  console.log(`The longest sentence has ${longest.wordCount} words. \n`); 
}

// E: test cases
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



/* //test
function longestSentence1(str) {
  const END_PUNCTUATION = ['.', '!', '?']; 

  let obj = [...str].reduce(
    function(obj, char, endIdx) {
      if (END_PUNCTUATION.includes(char)) {
        let currentSentence = str.slice(obj.startIdx, endIdx + 1);

        return { startIdx: endIdx + 2, sentence: currentSentence }       
      } else {
        return obj;
      }
    }, 
    { startIdx: 0, sentence: '' }
  );

  console.log(obj.sentence);
  console.log(obj.startIdx);
} 

//longestSentence('Cat! Hi.'); */