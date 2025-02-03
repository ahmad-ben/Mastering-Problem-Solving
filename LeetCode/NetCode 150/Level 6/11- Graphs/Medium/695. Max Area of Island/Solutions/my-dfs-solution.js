/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  // The number of rows and columns in the grid.
  let gridRowsNum = grid.length, gridColsNum = grid[0].length;

  // The area of the current island and the biggest island.
  let currIslandArea = biggestIslandArea = 0;

  findBiggestIsland = (currRow, currCol) => {
    // If the current row or column is out of bounds or the current cell is water, return.
    if(
      currRow < 0 || currRow === gridRowsNum ||
      currCol < 0 || currCol === gridColsNum ||
      grid[currRow][currCol] === 0
    ) return;

    // Increment the current island area and mark the current cell as visited.
    ++currIslandArea, grid[currRow][currCol] = 0;

    // Visit the adjacent cells.
    findBiggestIsland(currRow, currCol - 1);
    findBiggestIsland(currRow - 1, currCol);
    findBiggestIsland(currRow, currCol + 1);
    findBiggestIsland(currRow + 1, currCol);
  }

  // Iterate over the grid.
  for(let gridRow = 0; gridRow < gridRowsNum; ++gridRow){
    for(let gridCol = 0; gridCol < gridColsNum; ++gridCol){
    // If the current cell is water, continue.
      if(grid[gridRow][gridCol] === 0) continue;

      // Reset the current island area and find the biggest island.
      currIslandArea = 0;
      findBiggestIsland(gridRow, gridCol);
      // Update the biggest island area.
      biggestIslandArea = Math.max(currIslandArea, biggestIslandArea);
    }
  };

  return biggestIslandArea;
};