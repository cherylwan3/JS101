let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// book's method
let totalAgeMale = 0;
let memberDetails = Object.values(munsters);

memberDetails.forEach(memberObj => { 
  if (memberObj.gender === 'male') {
    totalAgeMale += memberObj.age;
  } 
}); 
  
console.log(totalAgeMale);

/* 
// My method: 

let totalAgeMale = 0;

maleNestedArr = Object.entries(munsters).filter(arr => arr[1]['gender'] === 'male');

maleNestedArr.forEach(personArr => { 
  totalAgeMale += personArr[1]['age'];
}); */


