const isPali = (s, l, r) => {
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++, r--;
  }
  return true;
};

const dfs = (i, s, part, res) => {
  if (i >= s.length) return res.push([...part]);

  for (let j = i; j < s.length; j++) {
    if(!isPali(s, i, j)) continue;

    part.push(s.substring(i, j + 1));
    dfs(j + 1, s, part, res);
    part.pop();
  }
};

const partition = (s) => {
  const res = [], part = [];
  dfs(0, s, part, res);
  return res;
}