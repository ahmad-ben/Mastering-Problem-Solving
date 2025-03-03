var minInterval = function(intervals, queries) {
  intervals.sort((i1, i2) => i1[0] - i2[0]);

  const sortedQueries = queries.map((query, idx) => [query, idx]);
  sortedQueries.sort((query1, query2) => query1[0] - query2[0]);

  const minPQ = new MinPriorityQueue((val) => val[0]), output = [];

  let stopIdx = 0;

  for(let currQuery of sortedQueries){
    const [currQueryVal, currQueryIdx] = currQuery;

    for(let intIdx = stopIdx; intIdx < intervals.length; ++intIdx){
      const [intStart, intEnd] = intervals[intIdx];

      if(currQueryVal < intStart) {stopIdx = intIdx; break;}

      if(currQueryVal <= intEnd) minPQ.enqueue([intEnd - intStart + 1, intEnd]);
    }

    while(!minPQ.isEmpty())
      if(currQueryVal > minPQ.front()[1]) {minPQ.dequeue()} else break;

    output[currQueryIdx] = minPQ.isEmpty() ? -1 : minPQ.front()[0];
  }

  return output;
};