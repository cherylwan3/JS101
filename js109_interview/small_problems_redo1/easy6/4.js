/**
 * E--------
 * length = 2.5
 * middle = Math.floor(array.length /2) = 2
 * 0, 1, 2, 3, 4,
 * 
 * middle = Math.floor(array.length /2) = 2
 * 0, 1, 2, 3
 * 
 * odd: str[mid]
 * even: (middle - 1, middle + 1)
 *
*/

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

function centerOf(str) {
  let mid = Math.floor(str.length / 2);

  return str.lengthlength % 2 === 0 
         ? str.slice(mid - 1, mid + 1) 
         : str[mid]; 
}