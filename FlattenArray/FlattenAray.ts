function flattenArray(arr: any[]): any[] {
  let holderArr = [];
  flatten(arr);
  function flatten(arr) {
    arr.forEach(num => {
      if (Array.isArray(num)) {
        flatten(num);
      } else {
        holderArr.push(num);
      }
    });
  }
  return holderArr;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
