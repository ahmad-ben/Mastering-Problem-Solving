var canJump = function(nums) {
  // Store the closest valid index.
  let closestValidIdx = nums.length - 1;

  for(let currIdx = nums.length - 2; currIdx >= 0; --currIdx)
    // If the current index can reach the closest valid index. 
    // Make the closest valid index the current index.
    if(nums[currIdx] + currIdx >= closestValidIdx) closestValidIdx = currIdx;

  // If the closest valid index is 0 return true, else return false.
  return !closestValidIdx;
};