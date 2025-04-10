const maxCoins = (numArr) => {
  numArr.push(1), numArr.unshift(1);
  let dp = Array.from(
    { length: numArr.length }, () => new Array(numArr.length).fill(-1)
  );

  const dfs = (l, r) => {
    if (l > r) return 0;
    if (dp[l][r] !== -1) return dp[l][r];

    dp[l][r] = 0;

    for (let i = l; i <= r; i++) {
      let coins = numArr[l - 1] * numArr[i] * numArr[r + 1];
      coins += dfs(l, i - 1) + dfs(i + 1, r);
      dp[l][r] = Math.max(dp[l][r], coins);
    }

    return dp[l][r];
  }

  return dfs(1, numArr.length - 2);
};