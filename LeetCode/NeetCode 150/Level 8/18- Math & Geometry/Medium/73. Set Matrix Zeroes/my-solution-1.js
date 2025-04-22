var setZeroes = function(matrix) {
  const rows = {}, cols = {};

  for(let rowIdx = 0; rowIdx < matrix.length; ++rowIdx)
    for(let colIdx = 0; colIdx < matrix[0].length; ++colIdx){
      if(matrix[rowIdx][colIdx] !== 0) continue;
      rows[rowIdx] = true, cols[colIdx] = true;
    };

  for(let rowIdx = 0; rowIdx < matrix.length; ++rowIdx)
    for(let colIdx = 0; colIdx < matrix[0].length; ++colIdx)
      if(rows[rowIdx] || cols[colIdx]) matrix[rowIdx][colIdx] = 0;
};