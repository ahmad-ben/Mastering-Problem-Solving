/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const rowsNum = board.length, colsNum = board[0].length;
  const visitedCells = new Set(), cuuRegionCells = new Set();

  const checkCurrCell = (currRowIdx, currColIdx) => {
    if(
      currRowIdx < 0 || currRowIdx === rowsNum ||
      currColIdx < 0 || currColIdx === colsNum 
    ) return false;

    if(board[currRowIdx][currColIdx] === "X") return true;

    board[currRowIdx][currColIdx] = "X";
    visitedCells.add(`${currRowIdx},${currColIdx}`);
    cuuRegionCells.add([currRowIdx,currColIdx]);

    if (
      checkCurrCell(currRowIdx, currColIdx - 1) &&
      checkCurrCell(currRowIdx - 1, currColIdx) &&
      checkCurrCell(currRowIdx, currColIdx + 1) &&
      checkCurrCell(currRowIdx + 1, currColIdx) 
    ) return true;
    else {
      cuuRegionCells.forEach(([row, col]) => board[row][col] = "O");
      cuuRegionCells.clear();
      return false;
    }
  }

  for(let rowIdx = 1; rowIdx < rowsNum - 1; ++rowIdx){
    for(let colIdx = 1; colIdx < colsNum - 1; ++colIdx){
      if(visitedCells.has(`${rowIdx},${colIdx}`)) continue;
      checkCurrCell(rowIdx, colIdx);
      cuuRegionCells.clear();
    };
  };
};