/**
 * @param {number[]} numArr
 * @return {number[][]}
 */

const threeSum = function(numArr) {
  let numArrSorted = numArr.sort((a, b) => a - b);
  let leftIdx, rightIdx;
  let arr = [];

  for(i = 0; i < numArrSorted.length - 2; i++){
    leftIdx = i + 1, rightIdx = numArrSorted.length - 1;

    let currentVal = numArrSorted[i], prevVal = numArrSorted[i - 1];

    if(currentVal === prevVal) continue;
    else{
      while(leftIdx < rightIdx){
        const leftItem = numArrSorted[leftIdx], rightItem = numArrSorted[rightIdx];

        if(leftIdx - 1 !== i && leftItem === numArrSorted[leftIdx - 1]){
          ++leftIdx;
          continue;
        }

        const result = currentVal + leftItem + rightItem;
        if(result < 0) ++leftIdx;
        else if(result > 0) --rightIdx;
        else{
          arr.push([currentVal, leftItem, rightItem]);
          ++leftIdx;
          --rightIdx; 
        }
      }
    }

  }

  return arr;
};