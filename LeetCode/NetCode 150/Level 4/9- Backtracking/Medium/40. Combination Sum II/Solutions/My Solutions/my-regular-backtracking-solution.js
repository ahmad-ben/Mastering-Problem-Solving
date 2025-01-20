/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const outputArr = [], currCandidates = [], existCombination = new Set(); visitedVal = new Set();
  let sum = 0; 

  const calculate = (idx) => {
      if(sum === target) {
          const sortedArr = [...currCandidates].sort(), sortedArrStr = sortedArr.join();

          if(existCombination.has(sortedArrStr)) return;

          outputArr.push(sortedArr);
          return existCombination.add(sortedArrStr);
      }

      if(sum > target || idx === candidates.length) return;

      const valIsExist = visitedVal.has(candidates[idx]);

      if(!valIsExist){
          currCandidates.push(candidates[idx]), sum += candidates[idx];
          calculate(idx + 1);            
      }

      visitedVal.add(candidates[idx]);
      if(!valIsExist) currCandidates.pop(), sum -= candidates[idx];

      calculate(idx + 1);

      visitedVal.delete(candidates[idx]);

  };

  calculate(0);

  return outputArr;
};