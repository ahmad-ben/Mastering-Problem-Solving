var leastInterval = function(tasks, n) {
  if(!n) return tasks.length;

  const maxHeap = new MaxPriorityQueue(), waitingTasksQueue = new Queue();
  const charFreqObj = {};

  for(const task of tasks) charFreqObj[task] = (charFreqObj[task] || 0) + 1;

  for(const char in charFreqObj) maxHeap.enqueue(charFreqObj[char]);

  let currTime = 0;

  while(maxHeap.size() || waitingTasksQueue.size()){
    ++currTime;

    const currCharCount = maxHeap.dequeue();

    if(currCharCount && --currCharCount.priority) 
      waitingTasksQueue.enqueue([currCharCount.priority, currTime + n]);

    const firstWaitedTask = waitingTasksQueue.front();
    if(firstWaitedTask && firstWaitedTask[1] === currTime) 
      maxHeap.enqueue(waitingTasksQueue.dequeue()[0])
  };

  return currTime;
};