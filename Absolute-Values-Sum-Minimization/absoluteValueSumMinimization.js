function absoluteValuesSumMinimization(a) {
  a.sort((n1, n2) => n1 - n2);
  const isEven = a.length % 2 === 0;
  let Median = Math.floor(a.length / 2);
  return isEven ? a[Median - 1] : a[Median];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
