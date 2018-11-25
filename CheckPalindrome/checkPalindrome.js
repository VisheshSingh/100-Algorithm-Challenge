function checkPalindrome(inputString) {
  let original = inputString.toLowerCase();
  let reversed = inputString
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  return original === reversed;
}

console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("a"));
