function arrayPreviousLess(items: number[]): number[] {
  let temp = -1;
  let holderArr = [];
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < i; j++) {
      temp = items[j] < items[i] ? items[j] : -1;
    }
    holderArr.push(temp);
  }
  return holderArr;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
