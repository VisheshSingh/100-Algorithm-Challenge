function differentSymbolsNaive(s: string): number {
  let uniqueChar = [];
  let inputChars = s.split("");

  inputChars.forEach(char => {
    if (!uniqueChar.includes(char)) {
      uniqueChar.push(char);
    }
  });

  return uniqueChar.length;
}

function differentSymbolsNaive2(s: string): number {
  let uniqueChar = {};
  let inputChars = s.split("");

  inputChars.forEach(char => {
    uniqueChar[char] = 1;
  });

  return Object.keys(uniqueChar).length;
}

function differentSymbolsNaive3(s: string): number {
  let uniqueChar = new Set();
  let inputChars = s.split("");

  inputChars.forEach(char => {
    uniqueChar.add(char);
  });

  return uniqueChar.size;
}

console.log(differentSymbolsNaive("cabca"));
console.log(differentSymbolsNaive2("cabca"));
console.log(differentSymbolsNaive3("cabca"));
