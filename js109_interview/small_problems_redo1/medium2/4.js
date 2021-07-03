/**
 * func (year)
 * output: num, number of friday the 13th
 * 
 * let numFriday13 = 0;
 * iterate from 0 to 11 (month index) 
 * create @date = new Date(year, monthIdx, 13)
 * let dayOfWeek = date.getDay()
 * let fridayIdx = 5;
 * if dayOfWeek === 5, numFriday13 += 1
 * 
 * return numFriday13
*/

function fridayThe13ths(year) {
  let numFriday13 = 0;
  let fridayIdx = 5;

  for (let monthIdx = 0; monthIdx <= 11; monthIdx += 1) {
    let date = new Date(year, monthIdx, 13);
    let dayOfWeek = date.getDay();
    if (dayOfWeek === fridayIdx) numFriday13 += 1;
  }

  console.log(numFriday13);
  return numFriday13;
}

function fridayThe13ths1(year) {
  let thirteenths = [];

  for (let month = 0; month < 12; month += 1) {
    thirteenths.push(new Date(year, month, 13));
  }

  return thirteenths.reduce((count, date) => {
    return date.getDay() === 5 ? (count + 1) : count;
  }, 0);
}



fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

