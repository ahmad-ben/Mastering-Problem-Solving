const findKthLargest = (numArr, k) => {
  const minHeap = new MinPriorityQueue();

  for (let num of numArr) {
    minHeap.push(num);
    if (minHeap.size() > k) minHeap.pop();
  }

  return minHeap.front();
};