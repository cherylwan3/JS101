let title = "Flintstone Family Members";

let padLength = (Math.floor((40 - title.length) / 2));

let str = title.padStart(padLength + title.length);
console.log(str);
