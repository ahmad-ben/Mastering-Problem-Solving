const combinationSum2 = (candidates, target) => {
  res = [];
  candidates.sort((a, b) => a - b);

  const dfs = (idx, path, cur) => {
    if (cur === target) return res.push([...path]);

    for (let i = idx; i < candidates.length; i++) {
      if (i > idx && candidates[i] === candidates[i - 1]) continue;

      if (cur + candidates[i] > target) break;

      path.push(candidates[i]);
      dfs(i + 1, path, cur + candidates[i]);
      path.pop();
    }
  };

  dfs(0, [], 0);
  return res;
}