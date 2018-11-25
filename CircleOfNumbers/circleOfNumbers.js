function circleOfNumbers(n, firstNumber) {
  let halfway = n / 2;
  let numArray = [];
  for (let i = 0; i < n; i++) {
    numArray.push(i);
  }

  if (firstNumber < halfway) {
    return numArray[firstNumber + halfway];
  } else {
    return numArray[firstNumber - halfway];
  }
}

console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(10, 4));
