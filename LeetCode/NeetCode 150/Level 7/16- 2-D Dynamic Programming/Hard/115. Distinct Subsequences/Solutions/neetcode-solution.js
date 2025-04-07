const numDistinct = (s, t) => {
  let m = s.length, n = t.length;
  let dp = Array.from({ length: m + 1 }, () => 
    Array(n + 1).fill(0)
  );

  for (let i = 0; i <= m; i++) dp[i][n] = 1;

  for (let i = m - 1; i >= 0; i--) 
    for (let j = n - 1; j >= 0; j--){ 
      dp[i][j] = dp[i + 1][j];
      if (s[i] === t[j]) dp[i][j] += dp[i + 1][j + 1];
    };

  return dp[0][0];
};