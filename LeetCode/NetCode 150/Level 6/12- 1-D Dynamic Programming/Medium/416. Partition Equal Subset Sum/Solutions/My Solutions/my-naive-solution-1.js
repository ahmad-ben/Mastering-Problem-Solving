/**
 * @param {number[]} numArr
 * @return {boolean}
 */
var canPartition = function(numArr) {
  const arrTotalSum = numArr.reduce((partialSum, a) => partialSum + a, 0);
  if(arrTotalSum % 2 !== 0) return false;

  const combinationArr = [];

  let subsetWantedSum = arrTotalSum / 2;

  const calculateIdxSum = (currIdx) => {
      const currNumVal = numArr[currIdx];
      const size = combinationArr.length;

      for(let idx = 0; idx < size; ++idx){
          let newCombinationVal = combinationArr[idx] + currNumVal;

          if(newCombinationVal === subsetWantedSum) return true;

          combinationArr.push(newCombinationVal);
      }
  
      combinationArr.push(currNumVal);
      if(currNumVal === subsetWantedSum) return true;
  };

  for(let numIdx = numArr.length - 1; numIdx >= 0; --numIdx){
      if(calculateIdxSum(numIdx)) return true;
  }

  return false;
};