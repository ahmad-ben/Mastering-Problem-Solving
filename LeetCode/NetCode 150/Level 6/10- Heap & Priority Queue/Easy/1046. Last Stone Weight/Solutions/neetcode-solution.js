const lastStoneWeight = (stones) => {
  const maxPQ = new MaxPriorityQueue();

  for (const stone of stones) maxPQ.enqueue(stone);

  while (maxPQ.size() > 1) {
    const stone1 = maxPQ.dequeue();
    const stone2 = maxPQ.dequeue();

    if (stone1.element !== stone2.element) 
      maxPQ.enqueue(stone1.element - stone2.element);
  }

  return maxPQ.size() === 1 ? maxPQ.dequeue().element : 0;
};