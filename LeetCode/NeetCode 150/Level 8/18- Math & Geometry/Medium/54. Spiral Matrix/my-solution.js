var spiralOrder = function (matrix) {
  let leftLimit = topLimit = 0;
  let bottomLimit = matrix.length, rightLimit = matrix[0].length;
  const resArr = [];

  while (leftLimit < rightLimit && topLimit < bottomLimit) {
    let rowIdx = topLimit, colIdx = leftLimit;

    while (colIdx < rightLimit) {
      resArr.push(matrix[rowIdx][colIdx]); ++colIdx;
    };
    ++topLimit, --colIdx, ++rowIdx;
    if(topLimit === bottomLimit) break;

    while (rowIdx < bottomLimit) {
      resArr.push(matrix[rowIdx][colIdx]); ++rowIdx;
    };
    --rightLimit, --rowIdx, --colIdx;
    if(leftLimit === rightLimit) break;

    while (colIdx >= leftLimit) {
      resArr.push(matrix[rowIdx][colIdx]); --colIdx;
    }
    --bottomLimit, ++colIdx, --rowIdx;
    if(topLimit === bottomLimit) break;

    while (rowIdx >= topLimit) { 
      resArr.push(matrix[rowIdx][colIdx]); --rowIdx;
    } 
    ++leftLimit, ++colIdx, ++rowIdx;;
    if(leftLimit === rightLimit) break;
  }

  return resArr;
};