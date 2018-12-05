function integerToStringOfFixedWidth(number: number, width: number): string {
  let numAsStr = number.toString();
  let numLength = numAsStr.length;

  if (numLength < width) {
    const widthDiff = width - numLength;
    let padZero = "";
    for (let i = 0; i < widthDiff; i++) {
      padZero = padZero.concat("0");
    }
    return padZero + numAsStr;
  }

  if (numLength === width) {
    return numAsStr;
  }

  if (numLength > width) {
    // let widthDiff = width - numLength
    return numAsStr.slice(numLength - width);
  }
}

// SOLUTION 2
function integerToStringOfFixedWidth2(digits: number, size: number): string {
  let strDigits: string = digits.toString();

  if (strDigits.length < size) {
    return addDigits(strDigits, size);
  } else if (strDigits.length > size) {
    return removeDigits(strDigits, size);
  } else {
    return strDigits;
  }

  function addDigits(str: string, targetLength: number): string {
    let padding: string = "";
    for (let i = 0; i < targetLength - str.length; i++) {
      padding += "0";
    }
    return padding + str;
  }

  function removeDigits(str: string, targetLength: number): string {
    return str.slice(str.length - targetLength);
  }
}

console.log(integerToStringOfFixedWidth(1234, 3));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));

console.log(integerToStringOfFixedWidth2(1234, 2));
console.log(integerToStringOfFixedWidth2(1234, 4));
console.log(integerToStringOfFixedWidth2(1234, 5));
