const canPartition = (nums) => {
  if (nums.reduce((a, b) => a + b, 0) % 2) return false;

  const target = nums.reduce((a, b) => a + b, 0) / 2;
  const dp = Array(target + 1).fill(false);

  dp[0] = true;

  for (let i = 0; i < nums.length; i++) 
    for (let j = target; j >= nums[i]; j--) 
      dp[j] = dp[j] || dp[j - nums[i]];

  return dp[target];
};