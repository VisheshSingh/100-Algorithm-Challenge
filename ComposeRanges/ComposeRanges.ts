function composeRanges(nums: number[]): string[] {
  let range = [],
    subrange = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      subrange.push(nums[i]);
    } else {
      subrange.push(nums[i]);
      range.push(subrange);
      subrange = [];
    }
  }

  for (let i = 0; i < range.length; i++) {
    let start = range[i][0],
      end = range[i][range[i].length - 1];
    range[i] = range[i].length > 1 ? `${start} -> ${end}` : `${start}`;
  }
  return range;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
