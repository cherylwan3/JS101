let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

Object.entries(munsters).forEach(personArr => {
  let name = personArr[0]; 
  let age = personArr[1].age;
  let gender = personArr[1].gender;
  console.log(`${name} is a ${age}-year-old ${gender}.`);
});

// Object.entries(munsters)
/* [
  [ 'herman', { age: 32, gender: 'male' } ],
  [ 'lily', { age: 30, gender: 'female' } ],
  [ 'grandpa', { age: 402, gender: 'male' } ],
  [ 'eddie', { age: 10, gender: 'male' } ],
  [ 'marilyn', { age: 23, gender: 'female' } ]
] */



