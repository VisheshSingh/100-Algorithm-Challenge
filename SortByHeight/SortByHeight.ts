function sortByHeight(arr: number[]): number[] {
  let arr1 = [];
  let arr2 = [];

  arr.forEach((val, index) => {
    if (val === -1) {
      arr1.push(index);
    } else {
      arr2.push(val);
    }
  });
  const sortedArr = arr2.sort((a, b) => a - b);
  arr1.forEach((val, i) => sortedArr.splice(arr1[i], 0, -1));

  return sortedArr;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
