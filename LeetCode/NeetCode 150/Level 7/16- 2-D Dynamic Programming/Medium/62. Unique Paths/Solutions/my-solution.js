/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const spotPathVal = {};
    spotPathVal["0,0"] = 1;

    const visitPrevSpot = (colIdx, rowIdx) => {
        if(colIdx < 0 || rowIdx < 0) return 0;

        if(spotPathVal[`${colIdx},${rowIdx}`]) 
            return spotPathVal[`${colIdx},${rowIdx}`];

        spotPathVal[`${colIdx},${rowIdx}`] = 
            visitPrevSpot(colIdx - 1, rowIdx) + visitPrevSpot(colIdx, rowIdx  - 1);
        
        return spotPathVal[`${colIdx},${rowIdx}`];
    };

    return visitPrevSpot(m - 1, n -1);
};