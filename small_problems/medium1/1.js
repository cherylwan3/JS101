/**
 * P---------------------
 * input: array
 * output: new array
 * rules:
 * - function rotates array by: moving first element to end of array
 *  -> slice off first element and append it to end of array
 * - if input isn't array, return @undefined
 * - if input is empty array return empty array
 * D------------------
 * - 
 * A-----------------
 * - declare @resultArr and set it to a copy of @array /
 * - remove the first element of @resultArr and set it to @firstElem 
 * - append @firstElem to end of @resultArr
 * - return @resultArr
 * 
*/

// E: test cases
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

function rotateArray(array) {
  if(!Array.isArray(array)) {
    //console.log(undefined);
    return undefined;
  }

  if (array.length === 0) {
    //console.log([]);
    return [];
  }

  //console.log(array.slice(1).concat(array[0]));
  return array.slice(1).concat(array[0]);
}