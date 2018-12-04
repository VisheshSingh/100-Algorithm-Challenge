function growingPlant(
  upSpeed: number,
  downSpeed: number,
  desiredHeight: number
): number {
  let currentHeight = 0;
  let days = 0;

  while (currentHeight < desiredHeight) {
    days++;
    currentHeight += upSpeed;

    if (currentHeight < desiredHeight) {
      currentHeight -= downSpeed;
    }
  }
  return days;
}

console.log(growingPlant(100, 10, 910));
