const minCostConnectPoints = (points) =>{
  const N = points.length, adj = new Map();

  for (let i = 0; i < N; i++) adj.set(i, []);

  for (let i = 0; i < N; i++) {
    const [x1, y1] = points[i];

    for (let j = i + 1; j < N; j++) {
      const [x2, y2] = points[j];
      const dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
      adj.get(i).push([dist, j]), adj.get(j).push([dist, i]);
    }
  }

  let res = 0;
  const visit = new Set(), minHeap = new MinPriorityQueue(entry => entry[0]);
  minHeap.push([0, 0]);

  while (visit.size < N) {
      const [cost, i] = minHeap.pop();

      if (visit.has(i)) continue;

      res += cost, visit.add(i);

      for (const [neiCost, nei] of adj.get(i)) 
        if (!visit.has(nei)) minHeap.push([neiCost, nei]);
  };

  return res;
};