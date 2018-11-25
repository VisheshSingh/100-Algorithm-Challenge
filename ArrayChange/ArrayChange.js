function Arraychange(arr) {
  let count = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      let temp = arr[i - 1] + 1 - arr[i];
      arr[i] = arr[i - 1] + 1;
      count += temp;
    }
  }
  return count;
}

console.log(Arraychange([1, 1, 1]));
