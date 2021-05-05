/**
 * P-------------------------
 * input: func(str)
 * output: string
 * rules:
 * 
 * D/A------------------------
 */

// 
swapName('Joe Roberts');    // "Roberts, Joe"

function swapName(name) {
  //console.log(name.split(' ').reverse().join(', '));
  return name.split(' ').reverse().join(', ');
}

// further exploration

function swapName2(name) {
  let reversedArr = name.split(' ').reverse();
  reversedArr.splice(0, 1, `${reversedArr[0]},`)

  //console.log(reversedArr.join(' '));
  return reversedArr.join(' ');
}

swapName2('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"
