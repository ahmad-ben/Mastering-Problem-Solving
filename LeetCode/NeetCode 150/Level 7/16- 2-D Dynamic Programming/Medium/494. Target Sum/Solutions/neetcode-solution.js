const findTargetSumWays = (numArr, target) => {
  const backtrack = (i, total) => {
    if (i === numArr.length) return total === target ? 1 : 0;

    return (
      backtrack(i + 1, total + numArr[i]) + 
      backtrack(i + 1, total - numArr[i])
    )    
  }

  return backtrack(0, 0);
};