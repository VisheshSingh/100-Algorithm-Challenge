// SOLUTION 1
function alternatingSums(a: number[]): number[] {
  let evenSum = 0,
    oddSum = 0;

  a.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));
  return [evenSum, oddSum];
}

// SOLUTION 2
function alternatingSums2(arr) {
  let even = 0,
    odd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      even += arr[i];
    } else {
      odd += arr[i];
    }
  }

  return [even, odd];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
console.log(alternatingSums2([50, 60, 60, 45, 70]));
