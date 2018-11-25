// SOLUTION 1
function avoidObs(arr): number {
  let minJump: number = 2;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % minJump === 0) {
      minJump++;
    }
  }
  return minJump;
}

// SOLUTION 2
function avoidObs2(arr: number[]): number {
  arr = arr.sort((a, b) => a - b);
  let largest = arr[arr.length - 1];

  for (let i = 1; i < largest + 1; i++) {
    if (arr.every(item => item % i !== 0)) {
      return i;
    }
  }
}
console.log(avoidObs([5, 3, 6, 7, 9]));
console.log(avoidObs2([5, 3, 6, 7, 9]));
