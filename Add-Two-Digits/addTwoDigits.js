// SOLUTION 1

function addTwoDigits(n) {
  let [n1, n2] = n.toString().split("");
  return +n1 + +n2;
}

function addTwoDigits2(n) {
  let num = n.toString().split("");

  return parseInt(num[0]) + parseInt(num[1]);
}

console.log(addTwoDigits(29));
console.log(addTwoDigits2(34));
