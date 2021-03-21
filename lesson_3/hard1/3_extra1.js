function messWithVars(arr1, arr2, arr3) {
  arr1 = ["two"];
  arr2 = ["three"];
  arr3 = ["one"];
}
let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // "one is: one"
console.log(`two is: ${two}`); // "two is: two"
console.log(`three is: ${three}`);  // "three is: three"