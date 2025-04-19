var rotate = function(matrix) {
  const allocatedSpots = new Set(), length = matrix.length;

  for(let rowIdx = 0; rowIdx < length; ++rowIdx)
    for(let colIdx = 0; colIdx < length; ++colIdx){

      let cSpotRIdx = rowIdx, cSpotCIdx = colIdx;
      let prevSpotVal = matrix[rowIdx][colIdx], comingSpotVal;

      while(!allocatedSpots.has(`${cSpotRIdx},${cSpotCIdx}`)){
        // Reserve the coming spot value, since we will change it.
        comingSpotVal = matrix[cSpotCIdx][length - 1 - cSpotRIdx];

        // Update the coming spot value, and save the current value as prev.
        matrix[cSpotCIdx][length - 1 - cSpotRIdx] = prevSpotVal;
        prevSpotVal = comingSpotVal;

        // Add the curr spot indices to the Set since we finish allocate its value.
        allocatedSpots.add(`${cSpotRIdx},${cSpotCIdx}`);

        // Reserve the coming spot indices, since we will use it later.
        const t = cSpotRIdx; cSpotRIdx = cSpotCIdx; cSpotCIdx = length - 1 - t;
      }
    }
};