/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let uniquePathNum = 0;
  const targetCol = m - 1, targetRow = n - 1;

  const visitNextSpot = (currSpotCol, currSpotRow) => {
      if(currSpotCol === targetCol && currSpotRow === targetRow)
          ++uniquePathNum;
      
      // Out of bound:
      if(
          currSpotCol < 0 || currSpotRow < 0 ||
          currSpotCol > targetCol || currSpotRow > targetRow
      ) return;

      visitNextSpot(currSpotCol + 1, currSpotRow);
      visitNextSpot(currSpotCol, currSpotRow + 1);
  };

  visitNextSpot(0, 0); 
  return uniquePathNum;
};