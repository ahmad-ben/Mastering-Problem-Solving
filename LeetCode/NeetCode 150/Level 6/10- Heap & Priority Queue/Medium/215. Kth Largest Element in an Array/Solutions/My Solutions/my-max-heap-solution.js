var findKthLargest = function(numArr, k) {
  let maxHeap = new MaxPriorityQueue(), kThNumber;

  for(const num of numArr) maxHeap.enqueue(num);

  // Dequeue k times to get the kth largest number
  while(k--) kThNumber = maxHeap.dequeue();

  return kThNumber.priority;
};