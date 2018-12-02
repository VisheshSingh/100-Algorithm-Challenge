function evenDigitsOnly(n: number): boolean {
  let nDigit = n.toString().split("");

  return nDigit.every(n => parseInt(n) % 2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
