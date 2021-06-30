console.log(swapName('Joe Roberts'));    // "Roberts, Joe"


function swapName(string) {
  return string.split(' ').reverse().join(', ');
}