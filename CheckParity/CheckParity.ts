function characterParity(symbol: string): string {
  let num = parseInt(symbol);

  return isNaN(num) ? "not a digit" : num % 2 === 0 ? "even" : "odd";
}

console.log(characterParity("5"));
console.log(characterParity("8"));
console.log(characterParity("q"));
