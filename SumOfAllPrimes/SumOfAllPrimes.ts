function sumAllPrimes(num: number): number {
  let total = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      total += i;
    }
  }
  return total;
}
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(9));
console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));
