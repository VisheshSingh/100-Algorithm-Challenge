function uniqueDigitProducts(a: number[]): number {
  let products = [];

  a.forEach(num => {
    const product = digitsProd(num);
    if (!products.includes(product)) {
      products.push(product);
    }
  });
  return products.length;
}

function digitsProd(digit) {
  let num = digit.toString().split("");
  let product = 1;

  num.forEach(digit => {
    product *= digit;
  });
  return product;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
