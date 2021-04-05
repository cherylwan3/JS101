 /* function returnUUID() {
  let possibleChar = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sections = [8, 4, 4, 4, 12];

  function getChar() {
    let indexOfChar = Math.floor(Math.random() * possibleChar.length);
    return possibleChar[indexOfChar];
  }
  
  function getSectionString(numOfChar) {
    let charSectionArr = [];
    for (let counter = 0; counter < numOfChar; counter += 1) {
      charSectionArr.push(getChar());
    }
    return charSectionArr.join('');
  }

  let sections = [8, 4, 4, 4, 12];
  let secStrArr = sections.map(secNum => getSectionString(secNum));

  let UUID = `${secStrArr[0]}-${secStrArr[1]}-${secStrArr[2]}-${secStrArr[3]}-${secStrArr[4]}`;
  return UUID; 
}
console.log(returnUUID()); 
 */


// function returnUUID() {
  let charArr = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sections = [8, 4, 4, 4, 12];
  debugger;
   
  let uuid = '';  
  sections.forEach((num, sectionIndex) => { 
    for (let index = 0; index < num; index += 1) {
      let indexOfChar = Math.floor(Math.random() * charArr.length);
      uuid += charArr[indexOfChar];
    }
    
    if (sectionIndex < sections.length - 1 ){
      uuid += '-';
    } 
  });

  return uuid;
//}
// console.log(returnUUID()); 