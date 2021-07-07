/**
 * in: func (nth)
 * output: nth fibnum
 * 
 * 
 */


// previous recursive
function fibonacci(num) {
  if (num <= 2) {
    return 1;
  } else if (memo[num]) {
    return memo[num];
  } else {
    memo[num] = fibonacci(num - 1) + fibonacci(num - 2);
    return memo[num];
  }
}