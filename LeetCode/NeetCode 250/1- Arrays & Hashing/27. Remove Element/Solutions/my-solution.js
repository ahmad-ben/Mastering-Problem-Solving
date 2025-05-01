var removeElement = function(nArr, val) {
  let validNum = nArr.length, cIdx = 0;

  while(cIdx < validNum)
    if(nArr[cIdx] !== val) ++cIdx;
    else{
      [nArr[cIdx], nArr[validNum - 1]] = [nArr[validNum - 1], nArr[cIdx]];
      --validNum;
    }

  return validNum;
};