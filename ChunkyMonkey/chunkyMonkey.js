function chunkyMonkey(arr, size) {
  let chunky = [];
  let count = 0;

  while (count < arr.length) {
    chunky.push(arr.slice(count, (count += size)));
  }
  return chunky;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
