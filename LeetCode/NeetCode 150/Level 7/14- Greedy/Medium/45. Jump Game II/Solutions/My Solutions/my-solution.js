/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if(nums.length === 1) return 0;
  let currIdx = 0, minimumJumpsNum = 0;

  while(true){
    ++minimumJumpsNum;
    const currIdxVal = nums[currIdx], limit = nums[currIdx] + currIdx;
    let betterNextIdx, betterNextIdxLimit = 0;

    for(let i = currIdx + 1; i <= limit; ++i){
      if(i + 1 === nums.length) return minimumJumpsNum;

      const currIdxLimit = nums[i] + i;

      if(currIdxLimit >= betterNextIdxLimit){
        betterNextIdxLimit = currIdxLimit;
        betterNextIdx = i;
      }
    }

    currIdx = betterNextIdx;
  };
};