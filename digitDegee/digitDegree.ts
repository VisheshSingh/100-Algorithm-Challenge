function digitDegree(n: number): number {
  let count = 0;
  let strNum: any = n.toString();

  while (strNum.length > 1) {
    strNum = strNum
      .split("")
      .reduce((total, num) => +total + +num)
      .toString();
    count++;
  }
  return count;
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
