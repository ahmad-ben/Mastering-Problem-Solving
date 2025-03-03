/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function(intervals, queries) {
  const output = [];

  intervals.sort((int1, int2) => {
    const int1Size = int1[1]- int1[0], int2Size = int2[1]- int2[0];

    if(int1Size < int2Size) return -1;
    if(int1Size > int2Size) return 1;
    return 1;
  });
  
  for(let q of queries){
    let added = false;

    for(let [intStart, intEnd] of intervals){
      if(q >= intStart && q <= intEnd){
        output.push(intEnd - intStart + 1);
        added = true;
        break;
      }
    }
    if(!added) output.push(-1);
  }

  return output;
};