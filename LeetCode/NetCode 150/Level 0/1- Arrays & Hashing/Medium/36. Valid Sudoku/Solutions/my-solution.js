const isValidSudoku = board => {
  let verArr = Array.from({ length: 9 }, i => {return {}});
  let horArr = JSON.parse(JSON.stringify(verArr));
  let squaredArr = JSON.parse(JSON.stringify(verArr));
  
  for(i = 0; i < board.length; i++){
    for(j = 0; j < board.length; j++){
      const c = board[i][j];
      if(c === ".") continue;

      let squIdx = (Math.trunc(i / 3) * 3) + Math.trunc(j / 3);
      
      if(verArr[i][c] || horArr[j][c] || squaredArr[squIdx][c]) return false;

      verArr[i][c] = horArr[j][c] = squaredArr[squIdx][c] = true;
    }
  }

  return true;
};