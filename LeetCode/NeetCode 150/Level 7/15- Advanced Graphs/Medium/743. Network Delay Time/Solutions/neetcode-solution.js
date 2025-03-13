const networkDelayTime = (times, n, k) => {
  const edges = new Map();

  for (let i = 1; i <= n; i++) edges.set(i, []);
  for (const [u, v, w] of times) edges.get(u).push([v, w]);

  const minHeap = new MinPriorityQueue(entry => entry[0]); 
  minHeap.enqueue([0, k]);

  const visit = new Set(); let t = 0;

  while (!minHeap.isEmpty()) {
    const [w1, n1] = minHeap.dequeue();
    if (visit.has(n1)) continue;

    visit.add(n1); t = w1;

    for (const [n2, w2] of edges.get(n1))
      if (!visit.has(n2)) minHeap.enqueue([w1 + w2, n2]);
  }

  return visit.size === n ? t : -1;
};