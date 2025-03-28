const isInterleave = (s1, s2, s3) => {
  let m = s1.length, n = s2.length;
  if (m + n !== s3.length) return false;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
  dp[m][n] = true;

  for (let i = m; i >= 0; i--) 
    for (let j = n; j >= 0; j--) 
      if (i < m && s1[i] === s3[i + j] && dp[i + 1][j]) dp[i][j] = true;
      else if (j < n && s2[j] === s3[i + j] && dp[i][j + 1]) dp[i][j] = true;

  return dp[0][0];
};