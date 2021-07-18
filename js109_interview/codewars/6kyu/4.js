// Where is my parent!?(cry)
// https://www.codewars.com/kata/58539230879867a8cd00011c/train/javascript

/**
 * func input: string - only letters, 
 * func output: string - alphabet order, Mother then children
 *
 * A----------
 * filter array for lowercase letters
 * 
 * initialize letter obj to {}
 * iterate over lower case array
 *    for each lower case letter, 
 *    obj[lowercase letter.toUpperCase] = obj[lowercase letter.toUpperCase] || 0;
 *    obj[lowercase letter.toUpperCase] += 1;
 * 
 * initialize resultStr
 * iterate over the letter obj
 *  for each key, append key + key.toLowerCase repeated value number of times
 *  append this to the resultstr
 * 
 * return resultstr
 * 
*/


function findChildren(str) {
  let lowerCaseArr = [...str]
    .map(char => char.toLowerCase())
    .sort();

  let obj = {};
  lowerCaseArr.forEach(child => {
    let parent = child.toUpperCase();
    obj[parent] = obj[parent] || parent;
    obj[parent] += child;
  });

  let result = '';
  for (let parent in obj) {
    result += obj[parent].slice(0, -1);
  }

  return result;
}

console.log("BbbEeee" == findChildren("beeeEBb"));
console.log(findChildren("beeeEBb"));

console.log("EeeUuuWww" == findChildren("uwwWUueEe"));
console.log(findChildren("uwwWUueEe"));


function findChildren1(str){
  let parents = [...str].filter(n => n.toUpperCase() === n).sort();
  let childs = [...str].filter(n => n.toLowerCase() === n).sort();
  
  return parents.map(p => p + childs.filter(c => c.toUpperCase() === p).join('')).join('')
}