/**
 * @param {number[]} numArr
 * @return {number}
 */

var findMin = function(numArr) {
  let leftEdge = 0, rightEdge = numArr.length - 1, minNum = 5000, midIdx;

  while(leftEdge <= rightEdge){
    midIdx = Math.floor((leftEdge + rightEdge) / 2);

    const leftNum = numArr[leftEdge], midNum = numArr[midIdx];

    if(leftNum <= midNum){
      minNum = Math.min(minNum, leftNum);
      leftEdge = midIdx + 1;
    }else{
      minNum = Math.min(minNum, midNum);
      rightEdge = midIdx - 1;
    }
  };

  return minNum;
};