const isMatch = (s, p) => {
  const m = s.length, n = p.length;
  let dp = Array(m + 1).fill().map(() =>Array(n + 1).fill(null));

  const dfs = (i, j) => {
    if (j === n) return i === m;
    if (dp[i][j] !== null) return dp[i][j];

    const match = i < m && (s[i] === p[j] || p[j] === '.');

    if (j + 1 < n && p[j + 1] === '*') 
      dp[i][j] = dfs(i, j + 2) || (match && dfs(i + 1, j));
    else 
      dp[i][j] = match && dfs(i + 1, j + 1);

    return dp[i][j];
  }

  return dfs(0, 0);
};