/**
 * func (str)
 * returns obj{
 * lowercase: 5, 
 * uppercase: 1, 
 * neither: 4 
 * }
 * 
 * create obj
 * iterate over string,
 *  for each char, check if alphabetical, if it is, check if lower or upper case
 *  
 *  if not alphabetical, obj.neither = obj.neither || 0
 *                        obj.neither += 1;
 * 
 */
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }


function isLowerCase(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCase(char) {
  return char >= 'A' && char <= 'Z';
}

function letterCaseCount(str) {
  let obj = { lowercase: 0, uppercase: 0, neither: 0 };
  [...str].forEach(char => {
    if (isLowerCase(char)) {
      obj.lowercase += 1;
    } else if (isUpperCase(char)) {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    }
  });

  console.log(obj);
  return obj;
}

