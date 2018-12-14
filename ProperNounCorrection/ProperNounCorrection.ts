function properNounCorrection(noun: string): string {
  const firstLetter = noun[0].toUpperCase();
  const restOfTheWord = noun.slice(1).toLowerCase();

  return firstLetter + restOfTheWord;
}

console.log(properNounCorrection("pARiS"));
console.log(properNounCorrection("John"));
