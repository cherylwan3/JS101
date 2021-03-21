/** 
  * The following function unnecessarily uses two return statements to 
  * return boolean values. Can you rewrite this function so it only has
  * one return statement and does not explicitly use either true or false?
  */
 
// solution1
function isColorValid1(color) {
  return color === "blue" || color === "green";
}

// simplified solution 1
const isColorValid2 = color => color === "blue" || color === "green";


// solution2
const isColorValid3 = color => ["blue, green"].includes(color);

// log this 
console.log(isColorValid1("hi"));
console.log(isColorValid2("hi"));
console.log(isColorValid3("hi"));