const pacificAtlantic = (heights) => {
  let ROWS = heights.length, COLS = heights[0].length;
  let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  let pacific = false, atlantic = false;

  const dfs = (r, c, prevVal) => {
    if (r < 0 || c < 0) return pacific = true
    if (r >= ROWS || c >= COLS) return atlantic = true;
    if (heights[r][c] > prevVal) return;

    let tmp = heights[r][c];
    heights[r][c] = Infinity;

    for (let [dx, dy] of directions) {
      dfs(r + dx, c + dy, tmp);
      if (pacific && atlantic) break;
    };

    heights[r][c] = tmp;
  };

  let res = [];

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      pacific = false, atlantic = false;
      dfs(r, c, Infinity);
      if (pacific && atlantic) res.push([r, c]);
    }
  }

  return res;
};