/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function(stones) {
  const maxHeap = new MaxPriorityQueue(); //O(1) | O(n)

  for(stone of stones) maxHeap.enqueue(stone); //O(n) | O(1)

  while(maxHeap.size() > 1) //O(n) | O(1)
    maxHeap.enqueue(maxHeap.dequeue().element - maxHeap.dequeue().element); //O(3 log n) | O(1)

  return maxHeap.front() ? maxHeap.front().element : 0;
};