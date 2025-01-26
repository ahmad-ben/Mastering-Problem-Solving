/**
 * @param {number} n
 * @return {string[][]}
 */

const createValidBoard = (n, validQPosition) => {
  const currBoard = [];
  let rowStr = "";

for(let rowIdx = 0; rowIdx < n; ++rowIdx) {
  rowStr = "";
  for(let colIdx= 0; colIdx < n; ++colIdx){
      if(rowIdx !== validQPosition[rowIdx][1] || colIdx !== validQPosition[rowIdx][0]) rowStr += ".";
      else rowStr += "Q";
  };
  currBoard.push(rowStr);
}

return currBoard;
};

const isCurrPositionAllowed = (queensPositions, colIdx, rowIdx) => {
for([qColIdx, qRowIdx] of queensPositions){
    if(qColIdx === colIdx) return false;
    if(qRowIdx === rowIdx) return false;
    if(Math.abs(qColIdx - colIdx) === Math.abs(qRowIdx - rowIdx)) return false;
};

return true;
};

var solveNQueens = function(n) {
const queensPositions = [], validChessBoards = [], validQueensPositions = [];

const createValidChessBoards = (colIdx, rowIdx) => {
  
  if(queensPositions.length === n) return validQueensPositions.push(structuredClone(queensPositions));
  if(rowIdx === n) return;
  
  if(colIdx === n || queensPositions.length < rowIdx) return createValidChessBoards(0, rowIdx + 1);


    if(isCurrPositionAllowed(queensPositions, colIdx, rowIdx)){ 
        queensPositions.push([colIdx,rowIdx]);
        createValidChessBoards(0, rowIdx + 1);
        queensPositions.pop();
    }
    createValidChessBoards(colIdx + 1, rowIdx);
}

  createValidChessBoards(0, 0);
  
  for(validQPosition of validQueensPositions)
      validChessBoards.push(createValidBoard(n, validQPosition));
  
  return validChessBoards;
};