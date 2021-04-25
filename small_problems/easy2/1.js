/**
 * P -------------------------
 * Rules:
 * input: function with 2 arguments: array and object
 * output: greeting that uses person's full name, 
 *        and mentions the person's title.
 * 
 * - write a function with 2 arguments: array and object
 *  - array: 
 *      - 2+ elements, 
 *      - when combined with spaces, produce a person's name
 *  - object:
 *    - 2 keys: 'title' and 'occupation'
 *    - appropriate values
 * E---------------------------------
 console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
 );
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
 * A-----------------------------------------------
 * - declare a function named 'greetings' with parameters: 'arr' and obj'
 *  - declare a variable called 'name' 
 *  - append arr's elements together and set it to 'name'
 *  - Log the sentence "Hello, 'name'! Nice to have a obj[title] and obj[occupation]
 *    around."
 * 
 */

function greetings(arr, obj) {
  let name = arr.join(' ');
  let str = `Hello, ${name}! Nice to have a ${obj['title']} ${obj['occupation']} around.`;
  return str;
}
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.