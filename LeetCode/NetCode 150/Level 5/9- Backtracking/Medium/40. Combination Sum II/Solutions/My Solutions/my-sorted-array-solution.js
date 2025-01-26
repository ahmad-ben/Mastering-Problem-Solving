var combinationSum2 = function(candidates, target) {
  const outputArr = [], combinationArr = [];
  candidates.sort((a, b) => a - b);
  let currSum = 0, lastVal = 0;

  const calculate = (idx) => {
    if(currSum === target) return outputArr.push([...combinationArr]);

    if(currSum > target || idx === candidates.length) return;

    if(lastVal !== candidates[idx]){
      combinationArr.push(candidates[idx]), currSum += candidates[idx];
      calculate(idx + 1);

      if(currSum > target) return combinationArr.pop(), currSum -= candidates[idx];

      combinationArr.pop(), currSum -= candidates[idx];
      lastVal = candidates[idx];
    }

    calculate(idx + 1);
  }

  calculate(0);
  return outputArr;
};