var longestConsecutive = function(numArr) {
  if(numArr.length <= 1) return numArr.length;

  numArr = numArr.sort((a, b) => a - b);
  let biggestSpace = 1, currentSpace = 1;

  for (let i = 1; i < numArr.length; i++) {
    if(numArr[i - 1] + 1 < numArr[i]){
      if(biggestSpace < currentSpace) biggestSpace = currentSpace;
      currentSpace = 1;
    }else if(numArr[i - 1] + 1 === numArr[i]) currentSpace++;
  };

  if(biggestSpace < currentSpace) biggestSpace = currentSpace;

  return biggestSpace;
};