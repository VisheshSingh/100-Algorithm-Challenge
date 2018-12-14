function reflectString(inputString: string): string {
  let chars = inputString.split("");

  let alphabets = {
    a: "z",
    b: "y",
    c: "x",
    d: "w",
    e: "v",
    f: "u",
    g: "t",
    h: "s",
    i: "r",
    j: "q",
    k: "p",
    l: "o",
    m: "n",
    n: "m",
    o: "l",
    p: "k",
    q: "j",
    r: "i",
    s: "h",
    t: "g",
    u: "f",
    v: "e",
    w: "d",
    x: "c",
    y: "b",
    z: "a"
  };

  let reflectedWord = "";

  chars.forEach(char => {
    reflectedWord += alphabets[char];
  });

  //   return chars.map(el => {
  //       return alphabets[el]
  //   }).join('')

  return reflectedWord;
}

console.log(reflectString("name"));
