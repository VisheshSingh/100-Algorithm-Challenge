// SOLUTION 1
function allLongestStrings(inputArray: string[]): string[] {
  let longestLength = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i].length > inputArray[i + 1].length) {
      longestLength = inputArray[i].length;
    }
  }

  const longestWords = inputArray.filter(word => word.length == longestLength);
  return longestWords;
}

function allLongestStrings2(inputArray) {
  const longestWords = [];
  let longestlength = 0;

  inputArray.forEach(word => {
    longestlength = longestlength < word.length ? word.length : longestlength;
  });

  inputArray.forEach(word => {
    if (word.length == longestlength) {
      longestWords.push(word);
    }
  });
  return longestWords;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings2(["aba", "aa", "ad", "vcd", "aba"]));
