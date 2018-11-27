// SOLUTION 1
function containsDuplicates(arr: number[]): boolean {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
  return false;
}

// SOLUTION 2
function containsDuplicates2(arr: number[]): boolean {
  if (arr.length <= 1) return false;
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      return true;
    } else {
      obj[arr[i]] = arr[i];
    }
  }
  return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
console.log(containsDuplicates2([1, 2, 3, 1]));
console.log(containsDuplicates2([3, 1]));
