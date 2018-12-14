function seatsInTheater(
  nCols: number,
  nRows: number,
  col: number,
  row: number
): number {
  let totalCols = nCols - col + 1;
  let totalRows = nRows - row;
  return totalCols * totalRows;
}

console.log(seatsInTheater(16, 11, 5, 3));
