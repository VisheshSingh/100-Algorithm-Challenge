// SOLUTION 1
function arrayMaximalAdjacentDifference(arr: number[]): number {
  let holderArray = [];
  for (let i = 0; i < arr.length - 1; i++) {
    holderArray.push(Math.abs(arr[i] - arr[i + 1]));
  }
  return Math.max(...holderArray);
}

// SOLUTION 2
function arrayMaximalAdjacentDifference2(arr) {
  let maxDiff = Math.abs(arr[0] - arr[1]);

  for (let i = 0; i < arr.length; i++) {
    let absDiff = Math.abs(arr[i] - arr[i + 1]);
    maxDiff = absDiff > maxDiff ? absDiff : maxDiff;
  }
  return maxDiff;
}
console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference2([2, 4, 1, 10]));
