function areSimilar(a, b) {
  if (a.length !== b.length) return false;

  if (a.toString() === b.toString()) {
    return true;
  }

  let c = [],
    d = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      c.push(a[i]);
      d.push(b[i]);
    }
  }
  d = d.reverse();

  if (c.length === 2 || c.toString() == d.toString()) {
    return true;
  }

  return false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(
  areSimilar([1, 2, 4, 3, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9])
);

function areSimilar2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let mismatchingPairs = [];

  for (let i = 0; i < arr1.length; i++) {
    mismatchingPairs.push([arr1[i], arr2[i]]);
  }
  //   console.log(mismatchingPairs);
  for (let i = mismatchingPairs.length - 1; i >= 0; i--) {
    if (mismatchingPairs[i][0] === mismatchingPairs[i][1]) {
      mismatchingPairs.pop();
    }
  }

  return mismatchingPairs.length <= 2;
}

console.log(areSimilar2([1, 2, 3], [1, 2, 3]));
console.log(areSimilar2([1, 2, 3], [2, 1, 3]));
console.log(areSimilar2([1, 2, 2], [2, 1, 1]));
console.log(
  areSimilar2([1, 2, 4, 3, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9])
);
