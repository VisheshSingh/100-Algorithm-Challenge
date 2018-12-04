function firstNotRepeatingCharacter(s: string): string {
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = obj.hasOwnProperty(s[i]) ? obj[s[i]] + 1 : 0;
  }

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === 0) {
      return s[i];
    }
  }

  return "_";
}

console.log(firstNotRepeatingCharacter("abacabad"));
console.log(firstNotRepeatingCharacter("abacabaabacaba"));
