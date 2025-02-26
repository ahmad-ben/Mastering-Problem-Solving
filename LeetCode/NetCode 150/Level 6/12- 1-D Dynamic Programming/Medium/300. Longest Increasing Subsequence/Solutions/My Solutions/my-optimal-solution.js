var lengthOfLIS = function(numArr) {
  const memArr = Array.from({length: numArr.length + 1}, () => -Infinity);
  memArr[0] = Infinity;

  for(let currNumIdx = numArr.length - 1; currNumIdx >= 0;  --currNumIdx){
    const currNumVal = numArr[currNumIdx];

    for(let idx = memArr.length - 1; idx >= 0; --idx)
      if(currNumVal < memArr[idx] && currNumVal > memArr[idx + 1]){
        memArr[idx + 1] = currNumVal;
        break;
      }

  }

  for(let idx = memArr.length - 1; idx >= 0; --idx)
    if(memArr[idx] !== -Infinity) return idx;
};