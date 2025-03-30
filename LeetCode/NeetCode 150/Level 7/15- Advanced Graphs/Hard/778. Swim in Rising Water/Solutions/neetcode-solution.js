const swimInWater = (grid) => {
  const N = grid.length, visit = new Set();
  const minPQ = new MinPriorityQueue(entry => entry[0]);

  const directions = [ [0, 1], [0, -1], [1, 0], [-1, 0] ];

  minPQ.push([grid[0][0], 0, 0]), visit.add('0,0');

  while (!minPQ.isEmpty()) {
    const [t, r, c] = minPQ.pop();

    if (r === N - 1 && c === N - 1) return t;

    for (const [dr, dc] of directions) {
      const neiR = r + dr, neiC = c + dc;

      if (
        neiR < 0 || neiC < 0 ||
        neiR >= N || neiC >= N ||
        visit.has(`${neiR},${neiC}`)
      ) continue;

      visit.add(`${neiR},${neiC}`);
      minPQ.push([Math.max(t, grid[neiR][neiC]), neiR, neiC]);
    }
  }
};