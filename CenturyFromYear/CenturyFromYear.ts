// SOLUTION 1
function centuryFromYear(year: number): number {
  let century = year / 100;
  if (year % 100 === 0) {
    return century;
  }
  return Math.floor(century) + 1;
}
// SOLUTION 2
function centuryFromYear2(year: number): number {
  return Math.ceil(year / 100);
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));

console.log(centuryFromYear2(1905));
console.log(centuryFromYear2(1700));
