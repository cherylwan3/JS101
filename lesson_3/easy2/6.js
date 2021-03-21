// my method
let flintstones = ["Fred", "Wilma"];

let newArr = [...flintstones,["Barney", "Betty"],["Bambam", "Pebbles"]].flat();
console.log(newArr);

// using concat method
flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

flintstones = [].concat(...flintstones);
console.log(flintstones);