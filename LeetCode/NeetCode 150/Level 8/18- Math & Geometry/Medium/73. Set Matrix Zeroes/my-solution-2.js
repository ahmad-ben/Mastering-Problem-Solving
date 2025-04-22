// After seeing neetcode solution.

var setZeroes = function(matrix) {
  let isFirstRowZero = false;
  const mRows = matrix.length, mCols = matrix[0].length;

  for(let rowIdx = 0; rowIdx < mRows; ++rowIdx)
    for(let colIdx = 0; colIdx < mCols; ++colIdx){
      if(matrix[rowIdx][colIdx] !== 0) continue;

      matrix[0][colIdx] = 0;
      if(rowIdx > 0) matrix[rowIdx][0] = 0; else isFirstRowZero = true;
    };

  // Process the matrix except the first row and col.
  for(let rIdx = 1; rIdx < mRows; ++rIdx)
    for(let cIdx = 1; cIdx < mCols; ++cIdx)
      if(!matrix[0][cIdx] || !matrix[rIdx][0]) matrix[rIdx][cIdx] = 0;
  
  // Process the first col:
  if(matrix[0][0] === 0)
    for(let rIdx = 0; rIdx < mRows; ++rIdx) matrix[rIdx][0] = 0;

  // Process the first row:
  if(isFirstRowZero)
    for(let cIdx = 0; cIdx < mCols; ++cIdx) matrix[0][cIdx] = 0;
};