/**
 * @param {number[]} firstArr
 * @param {number[]} secondArr
 * @return {number}
 */
var findMedianSortedArrays = function(firstArr, secondArr) {
  const mergedArrLength = firstArr.length + secondArr.length;

  const leftPartLength = Math.floor(mergedArrLength / 2);
  const isMedianTwoVal = (mergedArrLength % 2) === 0;

  let smallestArr = firstArr.length <= secondArr.length ? firstArr : secondArr; 
  let bigArr = firstArr === smallestArr ? secondArr : firstArr; 

  let leftEdgeIdx = 0, rightEdgeIdx = smallestArr.length - 1, midIdx;

  while(true){
    midIdx = Math.floor((leftEdgeIdx + rightEdgeIdx) / 2);

    const smallArrBigLeftPorVal = smallestArr[midIdx] ?? -Infinity;
    const smallArrSmallRightPorVal = smallestArr[midIdx+ 1] ?? Infinity; 

    const smallArrPortion = midIdx + 1;
    const bigArrPortion = leftPartLength - smallArrPortion;

    const bigArrBigLeftPorVal = bigArr[bigArrPortion - 1] ?? -Infinity;
    const bigArrSmallRightPorVal = bigArr[bigArrPortion] ?? Infinity;

    if(
      smallArrBigLeftPorVal <= bigArrSmallRightPorVal && 
      smallArrSmallRightPorVal >= bigArrBigLeftPorVal
    ){
      const rightPartitionsSmallerVal = Math.min(smallArrSmallRightPorVal, bigArrSmallRightPorVal);

      if(!isMedianTwoVal) return rightPartitionsSmallerVal;
      else{
        const leftPartitionsBiggerVal = Math.max(smallArrBigLeftPorVal, bigArrBigLeftPorVal);
        return (rightPartitionsSmallerVal + leftPartitionsBiggerVal) / 2;
      }
    }
    else if(smallArrBigLeftPorVal > bigArrSmallRightPorVal) rightEdgeIdx = midIdx - 1;
    else leftEdgeIdx = midIdx + 1;
  }

};