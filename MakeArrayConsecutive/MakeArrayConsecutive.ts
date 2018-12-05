function makeArrayConsecutive2(statues: number[]): number {
  let count = 0;
  let sorted = statues.sort((a, b) => a - b);

  const min = sorted[0];
  const max = sorted[sorted.length - 1];

  for (let i = min; i < max; i++) {
    if (!statues.includes(i)) {
      count++;
    }
  }
  return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
