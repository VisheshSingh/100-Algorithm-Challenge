// SOLUTION 1
function commonCharacterCount(word1, word2) {
  let wordArray = [];
  let word1Array = word1.split("");
  let word2Array = word2.split("");

  for (let i = 0; i < word1Array.length; i++) {
    for (let j = 0; j < word2Array.length; j++) {
      if (word1Array[i] === word2Array[j]) {
        wordArray.push(word1Array[i]);
        i++;
      }
    }
  }

  return wordArray.length;
}

console.log(commonCharacterCount("aabcc", "adcaa"));
console.log(commonCharacterCount("Hello", "World"));
console.log(commonCharacterCount("Hello", "Hello"));
