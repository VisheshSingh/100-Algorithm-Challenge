function electionsWinners(votes: number[], k: number): number {
  let count = 0;
  let mostVotes = Math.max(...votes);
  let sortedVotes = votes.sort((a, b) => b - a);

  if (sortedVotes[0] !== sortedVotes[1] && k === 0) {
    return 1;
  }
  sortedVotes.forEach(voteCount => {
    if (mostVotes - voteCount < k) {
      count++;
    }
  });
  return count;
}

console.log(electionsWinners([2, 3, 5, 2], 3));
