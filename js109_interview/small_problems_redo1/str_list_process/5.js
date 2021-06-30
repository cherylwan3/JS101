swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

function swapCase(str) {
  let result = [...str].map(char => {
    return char === char.toLowerCase()
          ? char.toUpperCase() 
          : char.toLowerCase();
  }).join('');

  console.log(result);
  return result;
}