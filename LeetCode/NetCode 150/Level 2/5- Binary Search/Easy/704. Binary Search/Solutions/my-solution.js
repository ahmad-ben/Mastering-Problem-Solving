/**
 * @param {number[]} numArr
 * @param {number} target
 * @return {number}
 */

var search = function(numArr, target) {
  let leftEdge = 0, rightEdge = numArr.length - 1, midIdx;

  while(leftEdge <= rightEdge){
    midIdx = Math.floor((leftEdge + rightEdge) / 2);

    if(numArr[midIdx] === target) return midIdx;
    if(numArr[midIdx] > target) rightEdge = midIdx - 1;
    else leftEdge = midIdx + 1;
  };

  return -1;
};