/**
 * @param {number[]} numArr
 * @param {number} target
 * @return {number}
 */

var search = function(numArr, target) {
  let leftIdx = 0, rightIdx = numArr.length - 1, midIdx; 

  while(leftIdx <= rightIdx){
    midIdx = Math.floor((leftIdx + rightIdx) / 2);

    const leftNum = numArr[leftIdx], rightNum = numArr[rightIdx], midNum = numArr[midIdx];

    if(midNum === target) return midIdx;

    // The left part is sorted.
    if(leftNum <= midNum){
      // This sorted range doesn't cover the target value.
      if(leftNum > target || midNum < target) leftIdx = midIdx + 1;
      else rightIdx = midIdx;
    }else{
      if(midNum > target || rightNum < target) rightIdx = midIdx - 1;
      else leftIdx = midIdx;
    }
  }

  return -1;
};