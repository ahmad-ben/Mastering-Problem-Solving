var combinationSum2 = function(candidates, target) {
  let combinationsSet = new Set(), visitedNum = new Set();
  let combinationsSum = 0, combinationsArr = [], outputArr = [];

  const calculate = (idx) => {
      const currCandidate = candidates[idx];

      let alreadyVisited = new Set();

      combinationsArr.push(currCandidate), combinationsSum += currCandidate;

      if(combinationsSum === target){
          const arrCopy = [...combinationsArr], sortedArrStr = arrCopy.sort().join();

          if(!combinationsSet.has(sortedArrStr)){
              combinationsSet.add(sortedArrStr)
              outputArr.push(arrCopy)
          }

      }else if(combinationsSum < target)
          for(let i = idx + 1; i < candidates.length; i++) {
              if(alreadyVisited.has(candidates[i])) continue;

              alreadyVisited.add(candidates[i]);
              calculate(i);
          }

      combinationsArr.pop(), combinationsSum -= currCandidate;
  };

  for(let i = 0; i < candidates.length; i++) { //O(n) O(1)
      if(visitedNum.has(candidates[i])) continue; // O(1) O(1)

      visitedNum.add(candidates[i]); //O(1) O(n)
      calculate(i);
  }

  return outputArr;
};