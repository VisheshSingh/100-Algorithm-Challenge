// SOLUTION 1
function alphabeticShift(inputString: string): string {
  let newStr = inputString.replace(/[a-z]/gi, char => {
    if (char === "z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt(0) + 1);
    }
  });

  return newStr;
}

// SOLUTION 2
function alphabeticShift2(inputString) {
  let alphabets = {
    a: "b",
    b: "c",
    c: "d",
    d: "e",
    e: "f",
    f: "g",
    g: "h",
    h: "i",
    i: "j",
    j: "j",
    k: "l",
    l: "m",
    m: "n",
    n: "o",
    o: "p",
    p: "q",
    q: "r",
    r: "s",
    s: "t",
    t: "u",
    u: "v",
    v: "w",
    w: "x",
    x: "y",
    y: "z",
    z: "a"
  };

  let inputShifted = inputString.split("");

  for (let i = 0; i < inputShifted.length; i++) {
    inputShifted[i] = alphabets[inputString[i]];
  }
  return inputShifted.join("");
}

// SOLUTION  3
function alphabeticShift3(inputString) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  let inputShifted = inputString.split("");

  for (let i = 0; i < inputShifted.length; i++) {
    let index = 0;
    if (inputShifted[i] !== "z") {
      index = alphabets.indexOf(inputShifted[i]) + 1;
    }
    inputShifted[i] = alphabets[index];
  }
  return inputShifted.join("");
}

console.log(alphabeticShift("crazy"));
console.log(alphabeticShift2("hello world"));
console.log(alphabeticShift3("abcd"));
