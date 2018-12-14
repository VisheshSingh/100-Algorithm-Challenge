function sortByLength(inputArray: string[]): string[] {
  return inputArray.sort((word1, word2) => word1.length - word2.length);
}

console.log(sortByLength(["abc", "", "aaa", "a", "zz"]));
