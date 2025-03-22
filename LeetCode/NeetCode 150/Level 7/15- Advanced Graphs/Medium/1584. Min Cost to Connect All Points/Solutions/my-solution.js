var minCostConnectPoints = function(points) {
  const potentialNei = new MinPriorityQueue((info) => info[0]); 
  const visitedIdx = new Set();
  let totalMinCost = 0;

  potentialNei.enqueue([0, 0]);

  while(visitedIdx.size < points.length){
    const [disVal, currPointIdx] = potentialNei.dequeue();
    const currPoiCrd =  points[currPointIdx];

    if(visitedIdx.has(currPointIdx)) continue;
    visitedIdx.add(currPointIdx), totalMinCost += disVal;

    for(let pointIdx = 0; pointIdx < points.length; ++pointIdx){
      if(visitedIdx.has(pointIdx)) continue;

      const dis = 
        Math.abs(points[pointIdx][0] - currPoiCrd[0]) +
        Math.abs(points[pointIdx][1] - currPoiCrd[1]);
      
      potentialNei.enqueue([dis, pointIdx])
    };
  };

  return totalMinCost;
};