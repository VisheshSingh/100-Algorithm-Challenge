function sumOfTwo(a: number[], b: number[], v: number): boolean {
  let hashmap = {};

  for (let num of a) {
    let diff = v - num;
    hashmap[diff] = diff;
  }
  console.log(hashmap);
  for (let num of b) {
    if (hashmap.hasOwnProperty(num)) {
      return true;
    }
  }
  return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
