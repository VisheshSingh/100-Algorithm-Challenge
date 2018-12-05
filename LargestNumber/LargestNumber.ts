// SOLUTION 1
function largestNumber(n: number): number {
  let num = "9".repeat(n);

  return parseInt(num);
}

// Solution 2
function largestNumber2(n: number): number {
  let num = "";

  for (let i = 0; i < n; i++) {
    // num += '9';
    num = num.concat("9");
  }
  return parseInt(num);
}

console.log(largestNumber(2));
console.log(largestNumber2(4));
