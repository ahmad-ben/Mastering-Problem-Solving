var jump = function(nums) {
  // Initialize the left edge, right edge, minimum jumps number, and farthest index.
  let leftEdge = rightEdge = minimumJumpsNum = farthestIdx = 0;

  // While the right edge is less than the last index of the array.
  while(rightEdge < nums.length - 1){
    // Iterate from the left edge to the right edge and update the farthest index.
    for(let currIdx = leftEdge; currIdx <= rightEdge; ++currIdx)
      farthestIdx = Math.max(farthestIdx, currIdx + nums[currIdx]);

    // Update the left edge, right edge, and increment the minimum jumps number.
    leftEdge = rightEdge + 1, rightEdge = farthestIdx, ++minimumJumpsNum; 
  }

  return minimumJumpsNum;
};