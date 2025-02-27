class KthLargest {
  
  constructor(k, numArr) {
    this.minHeap = new MinPriorityQueue(), this.k = k;

    // Add all numbers in the array to the min-heap
    for (const num of numArr) this.minHeap.enqueue(num);

    // Ensure the heap size does not exceed k by removing the smallest elements
    while (this.minHeap.size() > k) this.minHeap.dequeue();
  }

  // Method to add a new value to the heap
  add(val) {
    // Add the new value to the min-heap
    this.minHeap.enqueue(val);

    // If the heap size exceeds k, remove the smallest element
    if (this.minHeap.size() > this.k) this.minHeap.dequeue();

    // Return the kth largest element, which is the smallest element in the heap
    return this.minHeap.front().element;
  }
}
