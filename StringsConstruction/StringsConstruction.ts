function stringsConstruction(a: string, b: string): number {
  let aCount = getCharCount(a);
  let bCount = getCharCount(b);

  let count = [];
  for (let char in aCount) {
    if (bCount.hasOwnProperty(char)) {
      count.push(Math.floor(bCount[char] / aCount[char]));
    } else {
      return 0;
    }
  }
  return Math.min(...count);
}

function getCharCount(n) {
  let chars = n.split("");
  let alphabets = {};

  chars.forEach(char => {
    if (alphabets.hasOwnProperty(char)) {
      alphabets[char]++;
    } else {
      alphabets[char] = 1;
    }
  });
  return alphabets;
}

console.log(stringsConstruction("abc", "abccba"));
