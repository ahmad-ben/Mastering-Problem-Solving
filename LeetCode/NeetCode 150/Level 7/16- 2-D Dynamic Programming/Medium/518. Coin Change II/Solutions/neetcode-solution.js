const change = (amount, coins) => {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let i = coins.length - 1; i >= 0; i--) 
    for (let a = 1; a <= amount; a++) 
      dp[a] += (coins[i] <= a ? dp[a - coins[i]] : 0);

  return dp[amount];
};