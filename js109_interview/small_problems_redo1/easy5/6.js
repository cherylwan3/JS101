/**
 * func (arr of integers)
 * 
 * - multiplies all 
 * - divide result by number of entries
 * - returns as string rounded to three decimal places.
 * 
 * A-----
 * - use reduce to mult
 * - divide by number of entries
 * - round result as string to 3 decimal places
*/

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

function multiplicativeAverage(arr) {
  return (arr.reduce((total, num) => total * num) / arr.length).toFixed(3);
}