/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function(intervals, queries) {
  intervals.sort((i1, i2) => i1[0] - i2[0]);
  const sortedQueries = queries.map((query, idx) => [query, idx]);

  const minPQ = new MinPriorityQueue(), output = [];

  for(let q of sortedQueries){
      minPQ.clear();

      for(let [intStart, intEnd] of intervals){
          if(q[0] < intStart) break;
          if(q[0] <= intEnd) minPQ.enqueue(intEnd - intStart + 1);
      }

      if(minPQ.isEmpty()) output[q[1]] = -1;
      else output[q[1]] = minPQ.front();
  }

  return output;
};