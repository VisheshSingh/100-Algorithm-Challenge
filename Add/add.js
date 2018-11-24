function add(param1, param2) {
  return param1 + param2;
}

function add2() {
  let args = Array.prototype.slice.call(arguments);
  let result = args.reduce((total, acc) => total + acc);
  return result;
}

function add3(...param1) {
  let total = 0;
  for (let i = 0; i < param1.length; i++) {
    total += param1[i];
  }
  return total;
}

console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));

console.log(add3(4, 5, 6));
console.log(add3(1, 2, 3));
