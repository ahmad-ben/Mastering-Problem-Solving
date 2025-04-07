var longestIncreasingPath = function(matrix) {
  let longestIncPath = 0;
  const rowNum = matrix.length, colNum = matrix[0].length, memObj = {};
  const neighborsSpots = [[-1,0], [0,-1], [0,1], [1,0]];

  const longestPathInPos = (rowIdx, colIdx) => {
    if(memObj[`${rowIdx},${colIdx}`]) return memObj[`${rowIdx},${colIdx}`];

    const spotVal = matrix[rowIdx][colIdx];
    let maxPathVal = 0;

    for([neiRow, neiCol] of neighborsSpots){
      const nextRIdx = rowIdx + neiRow, nextCIdx = colIdx + neiCol;

      if(
        nextRIdx < rowNum && nextCIdx < colNum &&
        nextRIdx > -1 && nextCIdx > -1 &&
        matrix[nextRIdx][nextCIdx] > spotVal
      ) maxPathVal = 
          Math.max(maxPathVal, longestPathInPos(nextRIdx, nextCIdx));
    }

    return memObj[`${rowIdx},${colIdx}`] = 1 + maxPathVal;
  };

  for(let spotRowIdx = 0; spotRowIdx < rowNum; ++spotRowIdx)
    for(let spotColIdx = 0; spotColIdx < colNum; ++spotColIdx)
      longestIncPath = 
        Math.max(longestIncPath, longestPathInPos(spotRowIdx, spotColIdx));

  return longestIncPath;
};