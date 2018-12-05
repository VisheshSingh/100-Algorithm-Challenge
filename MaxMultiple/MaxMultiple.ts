function maxMultiple(divisor: number, bound: number): number {
  let rem = bound % divisor;

  return bound - rem;
}

console.log(maxMultiple(3, 10));
