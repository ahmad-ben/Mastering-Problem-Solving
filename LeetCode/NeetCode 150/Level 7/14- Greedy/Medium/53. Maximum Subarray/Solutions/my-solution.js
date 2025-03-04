var maxSubArray = function(nums) {
  // Initialize the maxSum and currIdxMaxSum to the first element in the array.
  let maxSum = currIdxMaxSum = nums[0];

  for(let numIdx = 1; numIdx < nums.length; ++numIdx){
    // Get the current number value.
    const currNumVal = nums[numIdx];

    // Update the current index max sum.
    // If the current index max sum is less than 0:
      // Then the max sum is the current number value.
      // Otherwise, the max sum is the current index max sum plus the current number value.
    currIdxMaxSum = Math.max(currIdxMaxSum + currNumVal, currNumVal);
    // Update the max sum.
    maxSum = Math.max(maxSum, currIdxMaxSum);
  };

  return maxSum;
};