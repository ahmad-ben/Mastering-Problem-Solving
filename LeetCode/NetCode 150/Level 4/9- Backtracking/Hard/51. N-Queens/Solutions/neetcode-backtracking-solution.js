const solveNQueens = (n) => {
  const col = new Set(), posDiag = new Set(), negDiag = new Set();

  const res = [], board = Array.from({ length: n }, () => Array(n).fill('.'));

  const backtrack = (r) => {
    if (r === n) return res.push(board.map(row => row.join('')));

    for (let c = 0; c < n; c++) {
      if (col.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) continue;

      col.add(c),posDiag.add(r + c),negDiag.add(r - c),board[r][c] = 'Q';

      backtrack(r + 1);

      col.delete(c), posDiag.delete(r + c), negDiag.delete(r - c), board[r][c] = '.';
    }
  }

  backtrack(0);
  return res;
};