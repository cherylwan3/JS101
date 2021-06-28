/**
 * func input: array and object
 * func output: returns greeting
 * 
 * A:
 * - log a sentence with the variables
*/ 


console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// Hello, John Q Doe! Nice to have a Master Plumber around.

function greetings(nameArr, obj) {
  let s1 = `Hello, ${nameArr.join(' ')}! `;
  let s2 = `Nice to have a ${obj.title} ${obj.occupation} around.`;
  return s1 + s2;
}