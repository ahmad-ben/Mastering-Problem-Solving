/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  const rowsNum = heights.length, colsNum = heights[0].length;
  const cellsBothOceans = [], cellsLimitMap = new Map();
  let currCellLimits = new Set(), visitedPos = new Set();

  const cellRainFlow = (currCellHeight, cellRowIdx, cellColIdx) => {
      if(currCellLimits.size === 2) return;

      if(cellRowIdx < 0 || cellColIdx < 0) 
          return currCellLimits.add("Pacific");

      if(cellRowIdx === rowsNum || cellColIdx === colsNum) 
          return currCellLimits.add("Atlantic");
      
      if(visitedPos.has(`${cellRowIdx},${cellColIdx}`)) return;

      if(currCellHeight < heights[cellRowIdx][cellColIdx]) return;

      if(cellsLimitMap.has(`${cellRowIdx},${cellColIdx}`)){
          const cLimitSet = cellsLimitMap.get(`${cellRowIdx},${cellColIdx}`);
          cLimitSet.forEach((limit) => currCellLimits.add(limit));
          return;
      };

      visitedPos.add(`${cellRowIdx},${cellColIdx}`);

      cellRainFlow(heights[cellRowIdx][cellColIdx], cellRowIdx, cellColIdx - 1);
      cellRainFlow(heights[cellRowIdx][cellColIdx], cellRowIdx - 1, cellColIdx);
      cellRainFlow(heights[cellRowIdx][cellColIdx], cellRowIdx, cellColIdx + 1);
      cellRainFlow(heights[cellRowIdx][cellColIdx], cellRowIdx + 1, cellColIdx);

      visitedPos.delete(`${cellRowIdx},${cellColIdx}`);
  };

  for(let rowIdx = 0; rowIdx < rowsNum; ++rowIdx){
      for(let colIdx = 0; colIdx < colsNum; ++colIdx){
          currCellLimits.clear();
          cellRainFlow(heights[rowIdx][colIdx], rowIdx, colIdx);
          if(currCellLimits.size === 2) cellsBothOceans.push([rowIdx, colIdx]);
          cellsLimitMap.set(`${rowIdx},${colIdx}`, new Set(currCellLimits));
      }
  };

  return cellsBothOceans;
};