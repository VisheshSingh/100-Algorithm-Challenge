function companyBotStrategy(trainingData: number[][]): number {
  let times = 0,
    correctness = 0;

  trainingData.forEach(data => {
    if (data[1] === 1) {
      times += data[0];
      correctness += data[1];
    }
  });

  return times / correctness || 0;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy([[4, -1], [0, 0], [5, -1]]));
