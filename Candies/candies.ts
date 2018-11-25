// SOLUTION 1
function candies(n: number, m: number): number {
  let remainder = m % n;
  return m - remainder;
}

// SOLUTION 2 {
function candies2(n: number, m: number): number {
  let candy = Math.floor(m / n);
  return candy;
}
console.log(candies(3, 10));
console.log(candies2(4, 10));
