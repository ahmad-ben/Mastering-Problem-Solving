var MedianFinder = function() {
  // Initialize MaxPQ for the array left part and MinPQ for the array right part. 
  this.MaxPQ = new MaxPriorityQueue(), this.MinPQ = new MinPriorityQueue();
};

MedianFinder.prototype.addNum = function(num) {
  // Add the number to the MaxPQ.
  this.MaxPQ.enqueue(num);

  // If the MaxPQ front element is greater than the MinPQ front element, then swap the elements.
  if(this.MaxPQ.front().element > this.MinPQ.front()?.element) 
    this.MinPQ.enqueue(this.MaxPQ.dequeue().element);

  // If the size of the MaxPQ > MinPQ size + 1, then move the front element of the MaxPQ to the MinPQ.
  if(this.MaxPQ.size() > this.MinPQ.size() + 1)
    this.MinPQ.enqueue(this.MaxPQ.dequeue().element);
  // If the size of the MinPQ > MinPQ size + 1, then move the front element of the MinPQ to the MaxPQ.
  else if(this.MaxPQ.size() + 1 < this.MinPQ.size())
    this.MaxPQ.enqueue(this.MinPQ.dequeue().element);
};


MedianFinder.prototype.findMedian = function() {
  // If the MaxPQ size is greater than the MinPQ size, then return the front element of the MaxPQ.
  if(this.MaxPQ.size() > this.MinPQ.size())
    return this.MaxPQ.front().element;

  // If the MinPQ size is greater than the MaxPQ size, then return the front element of the MinPQ.
  if(this.MinPQ.size() > this.MaxPQ.size())
    return  this.MinPQ.front().element;

  // If the MaxPQ size is equal to the MinPQ size, then return the average of the front elements of the MaxPQ and MinPQ.
  return (this.MaxPQ.front().element + this.MinPQ.front().element) / 2
};

/* 
  Visualization of the Max and Min Priority Queue:
  We have the inputs:
  [1, 4, 2, 5, 3, 0, 9]
  
  Step-by-step heap structure after each insertion:

  1) Insert 1:
     MaxPQ: [1] 
     MinPQ: []
        => [1] []

  2) Insert 4:
     MaxPQ: [4, 1]
     MinPQ: []

     Since MaxPQ has more elements than MinPQ by more than 1, we balance:
     Move top of MaxPQ to MinPQ.

     MaxPQ: [1]
     MinPQ: [4]
      => [1] [4]

  3) Insert 2:
     MaxPQ: [2, 1] 
     MinPQ: [4]
      => [1, 2] [4]

  4) Insert 5:
     MaxPQ: [5, 2, 1] 
     MinPQ: [4]

     Since MaxPQ top (5) is greater than MinPQ top (4), we rebalance:
     Move 5 from MaxPQ to MinPQ.

     MaxPQ: [2, 1]
     MinPQ: [4, 5]
      => [1, 2] [4, 5]

  5) Insert 3:
     MaxPQ: [3, 2, 1]
     MinPQ: [4, 5]
      => [1, 2, 3] [4, 5]

     Since MaxPQ top (3) is smaller than MinPQ top (4), no rebalancing needed.

  6) Insert 0:
     MaxPQ: [3, 2, 1, 0]
     MinPQ: [4, 5]

     Since MaxPQ has more elements than MinPQ by more than 1, we balance:
     Move top of MaxPQ to MinPQ.

     MaxPQ: [2, 1, 0]
     MinPQ: [3, 4, 5]
      => [0, 1, 2] [3, 4, 5]

  7) Insert 9:
     MaxPQ: [9, 2, 1, 0]
     MinPQ: [3, 4, 5]

     Since MaxPQ top (9) is greater than MinPQ top (3), we rebalance:
     Move 9 from MaxPQ to MinPQ.

     MaxPQ: [2, 1, 0]
     MinPQ: [3, 4, 5, 9]
      => [0, 1, 2] [3, 4, 5, 9]

  Finding Median:
  - If both heaps have the same size, median = (MaxPQ.top + MinPQ.top) / 2
  - If one heap has more elements, median = top of that heap
    Since MinPQ has more elements, the median = top of MinPQ = 3

*/