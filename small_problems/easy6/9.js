/**
 * P-------------------------
 * input: func (string)
 * output: string
 * rules:
 * - returns a new string containing the words from the string argument in reverse order.
 * D/A------------------------
 */

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

// ex
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"