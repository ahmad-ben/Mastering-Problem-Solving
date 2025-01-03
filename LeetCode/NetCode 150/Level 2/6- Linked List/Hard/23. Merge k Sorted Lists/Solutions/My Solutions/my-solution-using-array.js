/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  // Store the head of all the linked list we have.
  let currentHeadLists = [];

  // Create the head and the current tail of the merged array.
  let mergedList = tail = new ListNode(0, null);

  for(i = 0; i < lists.length; i++){
      // Add the valid heads in our array.
      if(lists[i]) currentHeadLists.push(lists[i]); //Can this handle all that
  }

  while(currentHeadLists.length > 0){
      // Check the smallest head
      let smallHeadIdx = 0, newHeadIdx = 1, smallHeadValue, newHeadValue;

      while(newHeadIdx < currentHeadLists.length){ 
          smallHeadValue = currentHeadLists[smallHeadIdx].val;
          newHeadValue = currentHeadLists[newHeadIdx].val;

          if(smallHeadValue > newHeadValue) smallHeadIdx = newHeadIdx;

          ++newHeadIdx;
      };

      // Remove the smallest head from the current list, and update the list value.
      let currentList = currentHeadLists[smallHeadIdx];

      // Check if we have a node after the smallest head.
      // If we have it move to it.
      // If we don't have that means we finish this linked list so just remove it from the array.
      if(currentList.next){ 
          currentHeadLists[smallHeadIdx] = currentList.next;
      }else{
          // We are pushing the finished list to the end and then remove it.
          // Achieving O(1) remove by this approach.
          popFinishedList(currentHeadLists, smallHeadIdx);
      };

      // Separate the smallest head from the list to add it to our merge list.
      currentList.next = null;
      tail.next = currentList;

      // Update the tail.
      tail = tail.next;
  }

  return mergedList.next;
};

const popFinishedList = (headArr, finishedListIdx) =>{
  const lastIdx = headArr.length - 1;
  [headArr[finishedListIdx], headArr[lastIdx]] = [headArr[lastIdx], headArr[finishedListIdx]];
  headArr.pop();
};