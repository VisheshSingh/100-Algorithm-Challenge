function factorializeANumber(num: number): number {
  let count = num;
  if (count < 2) {
    return 1;
  }
  for (let i = 1; i < count; i++) {
    num *= i;
  }
  return num;
}

function factorializeANumber2(num: number): number {
  return num < 2 ? 1 : num * factorializeANumber2(num - 1);
}

function factorializeANumber3(num: number): number {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));

console.log(factorializeANumber2(5));
console.log(factorializeANumber2(10));

console.log(factorializeANumber3(5));
console.log(factorializeANumber3(10));
