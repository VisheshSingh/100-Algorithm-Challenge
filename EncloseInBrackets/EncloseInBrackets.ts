function encloseInBrackets(inputString: string): string {
  return `(${inputString})`;
}
function encloseInBrackets2(inputString: string): string {
  return "(" + inputString + ")";
}

console.log(encloseInBrackets("abacaba"));
console.log(encloseInBrackets2("abacaba"));
