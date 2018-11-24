function maxConsecutiveSum(arr) {
  let holderArray = [];

  for (let i = 0; i < arr.length - 1; i++) {
    holderArray.push(arr[i] + arr[i + 1]);
  }
  return Math.max(...holderArray);
}

console.log(maxConsecutiveSum([2, 3, 5, 1, 6]));
