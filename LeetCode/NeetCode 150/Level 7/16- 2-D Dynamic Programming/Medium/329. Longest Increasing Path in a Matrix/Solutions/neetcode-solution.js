const longestIncreasingPath = (matrix) => {
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const ROWS = matrix.length, COLS = matrix[0].length;
  let dp = Array.from({ length: ROWS }, () => Array(COLS).fill(-1));

  const dfs = (r, c, prevVal) => {
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS || matrix[r][c] <= prevVal) 
      return 0;

    if (dp[r][c] !== -1) return dp[r][c];

    let res = 1;
    for (let d of directions) 
      res = Math.max(res, 1 + dfs(r + d[0], c + d[1], matrix[r][c]));

    return dp[r][c] = res;
  };

  let LIP = 0;

  for (let r = 0; r < ROWS; r++) 
    for (let c = 0; c < COLS; c++) 
      LIP = Math.max(LIP, dfs(r, c, -Infinity));

  return LIP;
};