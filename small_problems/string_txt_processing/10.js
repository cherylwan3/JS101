/**
 * P-------------------
 * input: func (string, string)
 * output:
 * rules:
 * -func (word, string of text)
 * - returns the text with every instance of the word highlighted.
 * - enclose the word with two asterisks ('**') on each side and 
 *  change every letter of the word to uppercase
 * - (e.g., '**HIGHLIGHTEDWORD**').
 * D/A----------------------------
 * - iterate over @strArr
 *  - if @strWord matches word,
 *    - return '**' + @strWord.toUpperCase + '**'
 * - join @strArr back to @string
*/

// ex
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

searchWord('sed', text);
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem 
// accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
// illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
// explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
//  odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione 
// voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum 
// quia dolor sit amet, consectetur, adipisci velit, **SED** quia non
//  numquam eius modi tempora incidunt ut labore et dolore magnam aliquam 
// quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem 
// ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
// consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea 
// voluptate velit esse quam nihil molestiae consequatur. Ut enim ad 
// minima veniam, quis nostrum exercitationem ullam corporis suscipit
// laboriosam, nisi ut aliquid ex ea commodi consequatur? blasedbla"


function searchWord(word, string) {
  word = word.toLowerCase()
  let result = string
    .split(' ')
    .map(strWord => {
      testWord = strWord.toLowerCase();
      if (testWord === word) {
        return '**' + strWord.toUpperCase() + '**';
      } 
      return strWord;
    })
    .join(' ');
 console.log(result);
}

function searchWord(word, text) {
  let regex = new RegExp(`\\b${word}\\b`, "gi");
  return text.replace(regex, `**${word.toUpperCase()}**`);
}