var canJump = function(nums) {
  if(nums.length === 1) return true;

  let currIdx = 0;

  while(nums[currIdx] > 0){
    const currNumLimit = nums[currIdx] + currIdx;

    let properNextIdx, nextIdxFarthestPoint = 0;

    for(let idx = currIdx + 1; idx <= currNumLimit; ++idx){
      if(idx > nums.length - 2) return true;

      const currFarthestPoint = nums[idx] + idx;

      if(currFarthestPoint >= nextIdxFarthestPoint) {
        nextIdxFarthestPoint = currFarthestPoint;
        properNextIdx = idx;
      };
    }

    currIdx = properNextIdx;
  };

  return false;
};