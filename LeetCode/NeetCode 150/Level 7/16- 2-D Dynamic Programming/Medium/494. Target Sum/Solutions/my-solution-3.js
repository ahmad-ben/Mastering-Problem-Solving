var findTargetSumWays = function(numArr, target) {
  const valuesCount = 
    numArr.reduce((accumulator, currentValue) => accumulator + currentValue);

  let prevSum = new Array(valuesCount * 2 + 1).fill(0);
  prevSum[valuesCount] = 1;

  let nextSum = new Array(valuesCount * 2 + 1).fill(0);

  for(let num of numArr){
    for(let prevSumIdx = 0; prevSumIdx < prevSum.length; ++prevSumIdx){
      const prevSumVal = prevSum[prevSumIdx];
      if(prevSumVal === 0) continue;

      nextSum[prevSumIdx - num] += prevSumVal;
      nextSum[prevSumIdx + num] += prevSumVal;
    };

    prevSum = [...nextSum];
    nextSum = new Array(valuesCount * 2 + 1).fill(0);
  };

  return prevSum[valuesCount + target] || 0;
};