var leastInterval = function(tasks, n) {
  if(!n) return tasks.length;

  let iterationNum = 0;

  const maxHeap = new MaxPriorityQueue({ priority: (charObj) => charObj.numInArr });
  const tasksLabelObj = {}, charLeftIntervals = new Map();

  for(const char of tasks) tasksLabelObj[char] = (tasksLabelObj[char] || 0) + 1;

  for(const char in tasksLabelObj) maxHeap.enqueue({char, numInArr: tasksLabelObj[char]});

  while(maxHeap.size() || charLeftIntervals.size){
    const charObj = maxHeap.dequeue();
    for (const [charObj, leftIntervals] of charLeftIntervals) {
      if(leftIntervals !== 1) charLeftIntervals.set(charObj, leftIntervals - 1);
      else maxHeap.enqueue(charObj), charLeftIntervals.delete(charObj);
    }

    if(charObj && --charObj.element.numInArr) charLeftIntervals.set(charObj.element, n)

    ++iterationNum;
  };

  return iterationNum;
};