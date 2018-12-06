function palindromeRearranging(inputString: string): boolean {
  const chars = inputString.split("");
  let letterobj = {};
  let oddCount = 0;

  for (let char of chars) {
    if (letterobj.hasOwnProperty(char)) {
      letterobj[char]++;
    } else {
      letterobj[char] = 1;
    }
  }

  for (let key in letterobj) {
    if (letterobj[key] % 2 !== 0) {
      oddCount++;
    }
  }

  return oddCount > 1 ? false : true;
}

console.log(palindromeRearranging("aabb"));
