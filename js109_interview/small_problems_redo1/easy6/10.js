function reverseWords(str) {
  return str.split(' ').map(word => {
    return word.length >= 5 ? [...word].reverse().join('') : word;
  }).join(' ');
}


console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"