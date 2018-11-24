// SOLUTION 1
function addBorder(picture) {
  let wallLength = picture[0].length + 2;
  let wall = "";

  for (let i = 0; i < wallLength; i++) {
    wall += "*";
  }

  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < wallLength - 2; i++) {
    picture[i] = "*" + picture[i] + "*";
  }

  return picture;
}

// SOLUTION 2
function addBorder2(picture) {
  let width = picture.length;
  let frame = "";

  for (let i = 0; i <= width; i++) {
    frame += "*";
  }

  picture = [frame, ...picture, frame];
  return picture.map(x => `*${x}*`);
}

console.log(addBorder(["abc", "ded"]));
console.log(addBorder2(["abc", "ded"]));
