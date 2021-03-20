let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

let indexNum = advice.indexOf('house');

// sol 1
let str = advice.substring(0, indexNum);
console.log(str);

// sol 2
let str2 = advice.slice(0, indexNum);
console.log(str2);