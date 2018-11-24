// SOLUTION 1
function adjacentElementsProduct(inputArray) {
  let largestProd = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length - 1; i++) {
    let prod = inputArray[i] * inputArray[i + 1];
    largestProd = largestProd < prod ? prod : largestProd;
  }
  return largestProd;
}

// SOLUTION 2
function adjacentElementsProduct2(inputArray) {
  let largestProd = [];

  for (let i = 0; i < inputArray.length - 1; i++) {
    largestProd.push(inputArray[i] * inputArray[i + 1]);
  }
  return Math.max(...largestProd);
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct2([3, 6, -2, -5, 7, 3]));
