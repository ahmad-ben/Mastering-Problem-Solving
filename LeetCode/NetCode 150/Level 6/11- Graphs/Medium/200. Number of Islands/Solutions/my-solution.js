/**
 * @param {character[][]} grid
 * @return {number}
 */

const getPosStr = (rowIdx, colIdx) => `${rowIdx},${colIdx}`;

var numIslands = function(grid) {
    const landsIndices = new Set(), gridRowNum = grid.length, gridColNum = grid[0].length;
    let islandNum = 0;

    const findLandsNum = (currRow, currCol) => {
        if(
            currRow < 0 || currRow === gridRowNum ||
            currCol < 0 || currCol === gridColNum ||
            grid[currRow][currCol] === "0" ||
            landsIndices.has(getPosStr(currRow,currCol))
        ) return;
    
        landsIndices.add(getPosStr(currRow,currCol));

        findLandsNum(currRow, currCol - 1);
        findLandsNum(currRow - 1, currCol);
        findLandsNum(currRow, currCol + 1); 
        findLandsNum(currRow + 1, currCol);
    };

    for(let rowIdx = 0; rowIdx < grid.length; ++rowIdx){
        for(let colIdx = 0; colIdx < grid[0].length; ++colIdx){
            if(
                landsIndices.has(getPosStr(rowIdx,colIdx)) || 
                grid[rowIdx][colIdx] === "0"
            ) continue;
            ++islandNum;
            findLandsNum(rowIdx, colIdx);  //0, 0
        }
    }

    return islandNum;
};