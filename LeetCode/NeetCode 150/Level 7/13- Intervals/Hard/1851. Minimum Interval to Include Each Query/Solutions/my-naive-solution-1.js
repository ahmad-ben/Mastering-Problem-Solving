/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function(intervals, queries) {
  let max = 0;
  for(let interval of intervals) max = Math.max(max, interval[1]);

  const arr = new Array(max + 1).fill(Infinity), output = [];

  for(let [intStart, intEnd] of intervals){
    const intSize = intEnd - intStart + 1;

    for(let idx = intStart; idx <= intEnd; ++idx)
      if(arr[idx] > intSize) arr[idx] = intSize;
  }

  for(let q of queries){
    if(arr[q] === Infinity) output.push(-1);
    else output.push(arr[q]);
  }

  return output;
};