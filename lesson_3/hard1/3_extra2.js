function messWithVars(arr1, arr2, arr3) {
  arr1 = arr2;
  arr2 = arr3;
  arr3 = arr1;
}
let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // "one is: one"
console.log(`two is: ${two}`); // "two is: two"
console.log(`three is: ${three}`);  // "three is: three"