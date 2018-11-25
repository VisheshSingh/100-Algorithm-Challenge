// SOLUTION 1
function isCaseInsensitivePalindrome(inputString: string): boolean {
  let original = inputString.toLowerCase();
  return (
    inputString
      .toLowerCase()
      .split("")
      .reverse()
      .join("") === original
  );
}

// SOLUTION 2
function isCaseInsensitivePalindrome2(inputString: string): boolean {
  return (
    inputString
      .toLowerCase()
      .split("")
      .reverse()
      .join("") === inputString.toLowerCase()
  );
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abac"));

console.log(isCaseInsensitivePalindrome2("AaBaa"));
console.log(isCaseInsensitivePalindrome2("abac"));
