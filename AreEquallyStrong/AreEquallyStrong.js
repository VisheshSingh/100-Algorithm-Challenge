function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  let yourWeakest = yourLeft < yourRight ? yourLeft : yourRight;
  let yourStrongest = yourLeft > yourRight ? yourLeft : yourRight;
  let friendsWeakest = friendsLeft < friendsRight ? friendsLeft : friendsRight;
  let friendsStrongest =
    friendsLeft > friendsRight ? friendsLeft : friendsRight;

  return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest;
}

function areEquallyStrong2(yourLeft, yourRight, friendsLeft, friendsRight) {
  return yourLeft + yourRight === friendsLeft + friendsRight;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));

console.log(areEquallyStrong2(10, 15, 15, 10));
console.log(areEquallyStrong2(15, 10, 15, 10));
console.log(areEquallyStrong2(15, 10, 15, 9));
console.log(areEquallyStrong2(15, 10, 24, 1));
