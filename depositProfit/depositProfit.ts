function depositProfit(
  deposit: number,
  rate: number,
  threshold: number
): number {
  let year = 0;
  while (threshold > deposit) {
    deposit = (deposit * rate) / 100 + deposit;
    year++;
  }
  return year;
}

console.log(depositProfit(100, 20, 170));
