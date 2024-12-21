/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let topRowIdx = 0, bottomRowIdx = matrix.length - 1;
  let middleRowIdx, middleRow, leftEdge, rightEdge;

  while(topRowIdx < bottomRowIdx){
      middleRowIdx = Math.floor((topRowIdx + bottomRowIdx) / 2);

      const smallestValInOurRow = matrix[middleRowIdx][0];
      const biggestValInOurRow = matrix[middleRowIdx][matrix[middleRowIdx].length - 1];

      // If our target less than the smallest val in our row.
      // If the target exist it should be in the rows before the current middle row.
      if(target < smallestValInOurRow) bottomRowIdx = middleRowIdx - 1;

      // Target bigger than the smallest val
      else if(target > smallestValInOurRow){
          // Target bigger than the biggest val in the current row.
          // If the target exist it should be in the rows after the current middle row.
          if(target > biggestValInOurRow) topRowIdx = middleRowIdx + 1;

          // Target smaller than the biggest val in the current row.
          // If the target exist it should be in this row, otherwise it doesn't exist.
          else if(target < biggestValInOurRow) topRowIdx = bottomRowIdx = middleRowIdx;
          
          // Target equals the biggest val in the current row.
          else return true;
      }

      // Target equals the smallest val in the current row.
      else return true;
  };

  if(topRowIdx > bottomRowIdx) return false;
  
  middleRow = matrix[topRowIdx], leftEdge = 0, rightEdge = middleRow.length - 1;

  while(leftEdge <= rightEdge){
      let middleIdx = Math.floor((leftEdge + rightEdge) / 2);

      if(target > middleRow[middleIdx]) leftEdge = middleIdx + 1;
      else if(target < middleRow[middleIdx]) rightEdge = middleIdx - 1;
      else return true;
  }

  return false;
};