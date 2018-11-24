function almostIncreasingSequence(sequence: number[]): boolean {
  let count = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i - 1] > sequence[i]) {
      count++;
      if (count > 1) {
        return false;
      }
    }
  }
  return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([10, 3, 2]));
