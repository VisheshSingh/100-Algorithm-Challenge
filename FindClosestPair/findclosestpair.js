function findClosestPair(numbers, sum) {
  let distance = -1;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length - 1; j++) {
      let distanceSum = numbers[i] + numbers[j];
      let absSum = Math.abs(i - j);

      if (sum == distanceSum) {
        if (distance === -1 || absSum < distanceSum) {
          distance = absSum;
        }
      }
    }
  }
  return distance;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));
