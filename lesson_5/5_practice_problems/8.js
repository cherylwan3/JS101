let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(numArr => {
  numArr.forEach(word => {
    let wordArr = word.split('');
    wordArr.forEach(char => {
      if ('aeiouAEIOU'.includes(char)) console.log(char);
    })
  })
});


/* Object.entries(obj)

[
  [ 'first', [ 'the', 'quick' ] ],
  [ 'second', [ 'brown', 'fox' ] ],
  [ 'third', [ 'jumped' ] ],
  [ 'fourth', [ 'over', 'the', 'lazy', 'dog' ] ]
] */