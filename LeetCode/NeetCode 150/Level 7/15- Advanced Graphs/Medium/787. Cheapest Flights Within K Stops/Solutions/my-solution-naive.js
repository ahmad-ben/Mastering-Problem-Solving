var findCheapestPrice = function(n, flights, src, dst, k) {
  const srcDstMap = {};
  // Price, Stops, City
  const nextDstMPQ = new MinPriorityQueue(info => info[0]);
  nextDstMPQ.enqueue([0, 0, src]);

  for(let [src, dst, prc] of flights){
    if(!srcDstMap[src]) srcDstMap[src] = [];
    srcDstMap[src].push([dst, prc]);
  };

  while(!nextDstMPQ.isEmpty()){
    const [cPrice, stopsNum, cCity] = nextDstMPQ.dequeue();

    if(cCity === dst) return cPrice;

    if(stopsNum > k) continue;

    for([nextDstCName, nextDstPrice] of (srcDstMap[cCity] || []))
      nextDstMPQ.enqueue([nextDstPrice + cPrice, stopsNum + 1, nextDstCName]);
  };

  return -1;
};