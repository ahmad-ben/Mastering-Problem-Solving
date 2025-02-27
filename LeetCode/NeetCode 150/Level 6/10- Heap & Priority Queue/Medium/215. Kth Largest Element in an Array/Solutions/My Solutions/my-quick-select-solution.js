const quickSelect = (startIdx, endIdx, numArr) => {
  let pivotVal = numArr[startIdx]; closestBigNumIdx = startIdx + 1;

  for(let i = startIdx + 1; i < endIdx; i++){
      if(numArr[i] > pivotVal) continue;

      [numArr[closestBigNumIdx], numArr[i]] = [numArr[i], numArr[closestBigNumIdx]];
      closestBigNumIdx++;
  }

  [numArr[closestBigNumIdx - 1], numArr[startIdx]] = [numArr[startIdx], numArr[closestBigNumIdx - 1]] ;
  
  return closestBigNumIdx - 1;
}

var findKthLargest = function(numArr, k) {
  const performQuickSelect = (startIdx, endIdx) => {
      const pivotPosition = quickSelect(startIdx, endIdx, numArr);

      if(pivotPosition === numArr.length - k) return numArr[pivotPosition];
      if(pivotPosition < numArr.length - k) return performQuickSelect(pivotPosition + 1, endIdx);
      return performQuickSelect(startIdx, pivotPosition);
  }
  
  return performQuickSelect(0, numArr.length);
};