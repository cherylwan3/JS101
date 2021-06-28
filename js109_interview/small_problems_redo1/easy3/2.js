/**
 * str = 'hi'
 * topBot = `+${'-'.repeat(str.length + 2)}+`
 * mid = `|${' '.repeat(str.length + 2)}|`
 * midStr = ` |${str}| `
 */

logInBox('To boldly go where no one has gone before.');
logInBox('');

function logInBox(str) {
  let topBot = `+${'-'.repeat(str.length + 2)}+`;
  let mid = `| ${' '.repeat(str.length)} |`;
  let midStr = `| ${str} |`;

  console.log(topBot);
  console.log(mid);
  console.log(midStr);
  console.log(mid);
  console.log(topBot);
}
// book's method
function logInBox1(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}
