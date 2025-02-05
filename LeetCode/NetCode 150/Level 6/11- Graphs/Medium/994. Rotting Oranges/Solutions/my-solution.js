var orangesRotting = function(grid) {
  // Queue for storing the position of rotten oranges.
  const rottenOrangesPos = new Queue();

  // Number of rows and columns in the grid.
  const rowsNum = grid.length, colsNum = grid[0].length;

  // Count of fresh oranges and minimum minutes count.
  let freshOrangesCount = minimumMinCount = 0;

  // Iterate through the grid to count the fresh oranges and store the position of rotten oranges.
  for(let rowIdx = 0; rowIdx < rowsNum; ++rowIdx){
    for(let colIdx = 0; colIdx < colsNum; ++colIdx){
      // If the current cell is a fresh orange, increase the fresh oranges count.
      if(grid[rowIdx][colIdx] === 1) ++freshOrangesCount;
      // If the current cell is a rotten orange, enqueue the position of the rotten orange.
      else if(grid[rowIdx][colIdx] === 2) rottenOrangesPos.enqueue([rowIdx,colIdx]);
    };
  };

  // Function to visit the neighbors of the rotten orange.
  const visitNeighbor = (rowIdx, colIdx) => {
    // Check if the neighbor is valid and fresh orange.
    if(
      rowIdx < 0 || rowIdx === rowsNum || colIdx < 0 || colIdx === colsNum ||
      grid[rowIdx][colIdx] === 0 || grid[rowIdx][colIdx] === 2
    ) return;

    // Mark the fresh orange as rotten and decrease the fresh oranges count.
    grid[rowIdx][colIdx] = 2, --freshOrangesCount; 

    // Enqueue the position of the rotten orange.
    rottenOrangesPos.enqueue([rowIdx,colIdx]);
  }

  // Iterate through the rotten oranges and visit the neighbors.
  while(freshOrangesCount > 0 && !rottenOrangesPos.isEmpty()){
    // Increase the minimum minutes count.
    ++minimumMinCount;

    // Count of rotten oranges in our queue.
    let rottenOrangesCount = rottenOrangesPos.size();

    // Visit the neighbors of the rotten oranges.
    while(rottenOrangesCount--){
      // Dequeue the position of the rotten orange.
      const [rOrangeRow, rOrangeCol] = rottenOrangesPos.dequeue();

      // Visit the neighbors of the rotten orange.
      visitNeighbor(rOrangeRow - 1, rOrangeCol);
      visitNeighbor(rOrangeRow, rOrangeCol + 1);
      visitNeighbor(rOrangeRow + 1, rOrangeCol);
      visitNeighbor(rOrangeRow, rOrangeCol - 1);
    }
  }

  // Return the minimum minutes count if all the fresh oranges are rotten, otherwise return -1.
  return freshOrangesCount ? -1 : minimumMinCount;
};