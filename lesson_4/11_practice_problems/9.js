let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesValues = Object.values(ages); 
let munsterFamilyTotalAge = agesValues.reduce((totalAge, currAge) => totalAge+ currAge);

console.log(munsterFamilyTotalAge);

