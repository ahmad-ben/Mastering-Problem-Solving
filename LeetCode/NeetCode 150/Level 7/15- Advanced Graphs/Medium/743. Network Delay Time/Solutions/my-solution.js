var networkDelayTime = function(times, n, k) {
  const nodesNeighborsMap = {}; let output;

  for(let [sNode, tNode, time] of times){
    if(!nodesNeighborsMap[sNode]) nodesNeighborsMap[sNode] = [];
    nodesNeighborsMap[sNode].push([tNode, time]);
  };

  const nodesToVisitMPQ = new MinPriorityQueue((nInfo) => nInfo[1]);
  const visitedNodes = new Set();

  nodesToVisitMPQ.enqueue([k, 0]);

  while(!nodesToVisitMPQ.isEmpty()){
    const currNode = nodesToVisitMPQ.dequeue();
    if(visitedNodes.has(currNode[0])) continue;

    visitedNodes.add(currNode[0]), output = currNode[1];

    for(let [nextNName, nextNTime] of nodesNeighborsMap[currNode[0]] || [])
      nodesToVisitMPQ.enqueue([nextNName, currNode[1] + nextNTime]);
  };

  return visitedNodes.size === n ? output: -1;
};