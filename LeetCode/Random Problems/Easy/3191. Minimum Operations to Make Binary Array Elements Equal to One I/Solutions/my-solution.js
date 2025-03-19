/**
 * @param {number[]} numArr
 * @return {number}
 */
var minOperations = function(numArr) {
  let miniNum = 0;

  for(let numIdx = 0; numIdx < numArr.length - 2; ++numIdx){
      if(numArr[numIdx] === 0){
          ++miniNum;
          for(let currIdx = numIdx; currIdx < numIdx + 3; ++currIdx){
              if(numArr[currIdx] === 1) numArr[currIdx] = 0;
              else numArr[currIdx] = 1;
          }
      }
  }

  return (
      numArr[numArr.length - 1] === numArr[numArr.length - 2] && 
      numArr[numArr.length - 2] === 1 
  ) ? miniNum : -1;
};