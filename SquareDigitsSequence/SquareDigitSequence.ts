function squareDigitsSequence(a0: number): number {
  let count = 1;
  let uniqueNums = [a0];

  while (true) {
    count++;
    a0 = digitPower(a0);

    if (uniqueNums.includes(a0)) {
      return count;
    }
    uniqueNums.push(a0);
  }
  return count;
}

function digitPower(n) {
  const digits = n
    .toString()
    .split("")
    .map(element => element ** 2);
  const sum = digits.reduce((a, b) => a + b, 0);
  return sum;
}

console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));
