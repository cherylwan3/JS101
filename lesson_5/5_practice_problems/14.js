let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// return value 
// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]


/* [
  { type: 'fruit', colors: [ 'red', 'green' ], size: 'small' },
  { type: 'vegetable', colors: [ 'orange' ], size: 'medium' },
  { type: 'fruit', colors: [ 'red', 'green' ], size: 'medium' },
  { type: 'fruit', colors: [ 'orange' ], size: 'medium' },
  { type: 'vegetable', colors: [ 'green' ], size: 'large' }
] */


let capitalize = word => word[0].toUpperCase() + word.slice(1);

let arr = Object.values(obj).map(obj => {
  if (obj.type === 'fruit') {
    return obj['colors'].map(color => capitalize(color));
  } else {
    return obj['size'].toUpperCase();
  }
});

console.log(arr); 


