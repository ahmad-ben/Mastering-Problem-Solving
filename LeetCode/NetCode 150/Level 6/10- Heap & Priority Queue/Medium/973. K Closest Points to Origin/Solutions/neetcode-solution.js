const kClosest = (points, k) => {
  const minHeap = new MinPriorityQueue({priority: point => point[0]});

  for (const [x, y] of points) {
    const dist = x ** 2 + y ** 2;
    minHeap.enqueue([dist, x, y]);
  }

  const res = [];
  for (let i = 0; i < k; i++) {
    const [_, x, y] = minHeap.dequeue().element;
    res.push([x, y]);
  }

  return res;
}