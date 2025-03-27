var findTargetSumWays = function(numArr, target) {
  numArr.sort((a,b) => b - a);
  let expressionsNum = 0;

  const calculateCurr = (currIdx, currSum) => {
    if(currIdx === numArr.length){
      if(currSum === target) ++expressionsNum;
      return;
    };

    const currValue = numArr[currIdx];

    if(currSum > target && numArr[currIdx] > numArr[currIdx - 1]) return;

    calculateCurr(currIdx + 1, currSum + currValue);
    calculateCurr(currIdx + 1, currSum - currValue);
    return expressionsNum;
  };

  return calculateCurr(0, 0);
};