function isTandemRepeat(inputString: string): boolean {
  const wordLength = inputString.length;

  if (wordLength % 2 === 0) {
    let first = inputString.slice(0, wordLength / 2);
    let second = inputString.slice(wordLength / 2, wordLength);

    return first === second;
  }

  return false;
}

console.log(isTandemRepeat("tandemtandem"));
console.log(isTandemRepeat("qqq"));
console.log(isTandemRepeat("2w2ww"));
