/**
 * P---------------------
 * input: func (number)
 * output: numer
 * rules:
 * - function (year)
 * - returns the number of Friday the 13ths in that year. 
 * - ou may assume that the year is greater than 1752,
 *   which is when the United Kingdom adopted the modern Gregorian Calendar
 * - same calendar will remain in use

 * D------------------
  const DAY_OF_WEEK = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  if idx = 5, day is friday
 * 
 * A-----------------
 * - set count to 0
 * -Iterate over number of months per year 
    - for let @month = 1, @month <= 12, @month ++
      - set @date to: new Date(year, @month , 13)
      - get the day of @dayOfWeek for that @date
      - if DAY_OF_WEEK[dayOfWeek] is equal to 'friday', 
        - set @friday13ths to  @friday13ths + 1 
    end loop
 - return @count
  - end fucntion
 * 
*/

// my solution
function fridayThe13ths(year) {
  let count = 0;
  
  for (let month = 0; month < 12; month += 1) {
    let date = new Date(year, month, 13);
    if (date.getDay() === 5) {
      count += 1;
    }
  }

  return count;
}


// books method
function fridayThe13ths1(year) {
  let thirteenths = [];

  for (let month = 0; month < 12; month += 1) {
    thirteenths.push(new Date(year, month, 13));
  }

  return thirteenths.reduce((count, date) => {
    return date.getDay() === 5 ? (count + 1) : count;
  }, 0);
}




// E: test cases
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3 
console.log(fridayThe13ths(2017));      // 2
