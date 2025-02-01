class MedianFinder {
  constructor() {
    this.small = new PriorityQueue({compare: (a, b) => b - a}); // Max heap for smaller half
    this.large = new PriorityQueue({compare: (a, b) => a - b}); // Min heap for larger half
  }

  addNum(num) {
    if (this.large.isEmpty() || num > this.large.front()) this.large.enqueue(num);
    else this.small.enqueue(num);

    if (this.small.size() > this.large.size() + 1) 
      this.large.enqueue(this.small.dequeue());
    else if (this.large.size() > this.small.size() + 1) 
      this.small.enqueue(this.large.dequeue());
  }

  findMedian() {
    if (this.small.size() > this.large.size()) return this.small.front();
    else if (this.large.size() > this.small.size()) return this.large.front();
    else return (this.small.front() + this.large.front()) / 2.0;

  }
}