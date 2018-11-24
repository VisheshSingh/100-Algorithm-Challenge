// SOLUTION 1
function alphabetSubsequence(s: string): boolean {
  let chars = s.split(""),
    charValues = [];

  chars.forEach(char => charValues.push(char.charCodeAt(0)));
  // console.log(charValues)
  if (new Set(charValues).size !== charValues.length) {
    return false;
  }

  for (let i = 0; i < charValues.length - 1; i++) {
    if (charValues[i] >= charValues[i + 1]) {
      return false;
    }
  }

  return true;
}

// SOLUTION 2
function alphabetSubsequence2(s) {
  let i = 0;
  do {
    if (s.charCodeAt(i) >= s.charCodeAt(i + 1) || s.length === 0) {
      return false;
    }
    i++;
  } while (i < s.length);
  return true;
}

function alphabetSubsequence3(s) {
  let word = s.toLowerCase(),
    pointer = 0,
    alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alphabet.length; i++) {
    if (word[pointer] == alphabet[i]) {
      pointer++;
    }
  }

  return pointer == word.length;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
console.log(alphabetSubsequence("zab"));

console.log(alphabetSubsequence2("zab"));
console.log(alphabetSubsequence2("effg"));
console.log(alphabetSubsequence2("cdce"));
console.log(alphabetSubsequence2("ace"));
console.log(alphabetSubsequence2("bxz"));
console.log(alphabetSubsequence2("zab"));

console.log(alphabetSubsequence3("zab"));
console.log(alphabetSubsequence3("effg"));
console.log(alphabetSubsequence3("cdce"));
console.log(alphabetSubsequence3("ace"));
console.log(alphabetSubsequence3("bxz"));
console.log(alphabetSubsequence3("zab"));
