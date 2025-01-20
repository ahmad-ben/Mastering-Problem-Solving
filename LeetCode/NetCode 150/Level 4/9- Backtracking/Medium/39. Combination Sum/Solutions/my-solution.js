var combinationSum = function(candidates, target) {
  // valid combinations sum up to the target || Temporarily stores current combination.
  const outputArr = [], valuesArr = [];

  // Tracks the current sum of the numbers in valuesArr.
  let currSum =  0; 

  /**
   * Recursive helper function to explore all possible combinations.
   * @param {number} idx - The index of the current candidate being considered.
   */
  const countPossibleCombination = (idx) => {
    const currCandidate = candidates[idx]; // Get the current candidate.

    // Add the current candidate to the combination and update the current sum.
    valuesArr.push(currCandidate), currSum += currCandidate;

    // If the current sum equals the target, store a copy of the current combination.
    if (currSum === target)  outputArr.push([...valuesArr]);
    // If the current sum is less than the target, continue exploring further combinations.
    else if (currSum < target) 
      for (let i = idx; i < candidates.length; ++i) 
        countPossibleCombination(i); // Recurse with the current candidate.

    // Backtrack: Remove the last added candidate and adjust the current sum.
    valuesArr.pop(), currSum -= currCandidate;
  };

  // Start exploring combinations by iterating over all candidates.
  for (let i = 0; i < candidates.length; ++i) countPossibleCombination(i);

  // Return all valid combinations found.
  return outputArr;
};
