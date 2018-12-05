//SOLUTION 1
function longestDigitsPrefix(inputString: string): string {
  let digits = "0123456789".split("");
  let input = inputString.split("");
  let prefix = "";

  for (let char of input) {
    if (digits.indexOf(char) === -1) {
      break;
    }
    prefix += char;
  }
  return prefix;
}
//SOLUTION 2
function longestDigitsPrefix2(inputString: string): string {
  let input = inputString.split("");
  let prefix = "";

  for (let char of input) {
    const num = parseInt(char);
    if (isNaN(num)) {
      break;
    }
    prefix += char;
  }
  return prefix;
}

console.log(longestDigitsPrefix("123aa1"));
console.log(longestDigitsPrefix2("123aa1"));
