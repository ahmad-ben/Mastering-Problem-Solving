/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  // O(1) || O(v) -- O(1) || O(v²)
  const nodeLevelMap = {}, nodeIndicesMap = {};
  // O(1) || O(v)
  const visitedIndices = new Set();
  // O(1) || O(v²)
  const minPQ = new MinPriorityQueue({priority: (arr) => arr[0]});
  
  // O(1) || O(1)
  const output = [];

  // O(v) || O(1)
  for(let idx = 0; idx < edges.length; ++idx){
      const [edge1, edge2] = edges[idx];

      if(!nodeIndicesMap[edge1]) nodeIndicesMap[edge1] = [];
      if(!nodeIndicesMap[edge2]) nodeIndicesMap[edge2] = [];

      // [Index that is exist in, the index in that index]
      nodeIndicesMap[edge1].push([idx, 0]), nodeIndicesMap[edge2].push([idx, 1]);
  };

  const firstNodeNum = edges[0][0];
  nodeLevelMap[firstNodeNum] = 1;

  // O(v) || O(1)
  for(let [index, position] of nodeIndicesMap[firstNodeNum]) 
      minPQ.enqueue([index, position]);

  // O(v²) || O(1)
  while(!minPQ.isEmpty()){
      // Idx in edges | parent node idx.
      const [currIdx, parentIdx] = minPQ.dequeue().element;

      if(visitedIndices.has(currIdx)) continue;

      visitedIndices.add(currIdx);

      const parentNum = edges[currIdx][parentIdx];

      const parentLevel = nodeLevelMap[parentNum];

      childIdx = parentIdx === 0 ? 1 : 0;

      const childNum = edges[currIdx][childIdx];

      if(nodeLevelMap[childNum]) {
        output[childIdx] = childNum, output[parentIdx] = parentNum;
        return output;
      }

      nodeLevelMap[childNum] = parentLevel + 1;

      for(let [index, position] of nodeIndicesMap[childNum])
        minPQ.enqueue([index, position]);
  }
};