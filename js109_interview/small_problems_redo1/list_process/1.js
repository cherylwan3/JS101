sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

function sum(num) {
  let total = [...String(num)].reduce((sum, digit) => sum + Number(digit), 0);

  console.log(total);
  return total;
}