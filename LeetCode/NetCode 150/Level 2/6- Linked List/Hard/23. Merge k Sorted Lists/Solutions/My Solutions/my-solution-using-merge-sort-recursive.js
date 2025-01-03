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
    // If the input array is empty, return null -no lists to merge-.
    if (!lists.length) return null;
  
    /**
     * Helper function to recursively merge lists in the range [leftListIdx, rightListIdx].
     * @param {number} leftListIdx - The starting index of the range.
     * @param {number} rightListIdx - The ending index of the range.
     * @return {ListNode} - The head of the merged list for the current range.
     */
    const mergeLists = (leftListIdx, rightListIdx) => {
        // Base case: if only one list exists in the range, return it.
        if (leftListIdx === rightListIdx) return lists[leftListIdx];
  
        // Find the midpoint to divide the current range into two halves.
        const half = Math.floor((leftListIdx + rightListIdx) / 2);
  
        // Recursively merge the left and right halves.
        let mergedLeftList = mergeLists(leftListIdx, half); 
        let mergedRightList = mergeLists(half + 1, rightListIdx); 
  
        // Create a dummy node to simplify the merging process.
        let mergedListHead = mergedListTail = new ListNode(0, null); 
  
        // Merge the two sorted lists.
        while (mergedLeftList || mergedRightList) {
            // Get the current values of the two lists. If a list is null, use undefined.
            const leftPartVal = mergedLeftList ? mergedLeftList.val : undefined;
            const rightPartVal = mergedRightList ? mergedRightList.val : undefined;
  
            let newList;
  
            // Compare values and choose the smaller one to append to the merged list.
            if (leftPartVal < rightPartVal || rightPartVal === undefined) {
                newList = mergedLeftList.next; // Store the next node for the left list.
                mergedLeftList.next = null; // Disconnect the current node.
  
                mergedListTail.next = mergedLeftList; // Append the current left node.
                mergedListTail = mergedLeftList; // Update the tail of the merged list.
  
                mergedLeftList = newList; // Move to the next node in the left list.
            } else {
                newList = mergedRightList.next; // Store the next node for the right list.
                mergedRightList.next = null; // Disconnect the current node.
  
                mergedListTail.next = mergedRightList; // Append the current right node.
                mergedListTail = mergedRightList; // Update the tail of the merged list.
  
                mergedRightList = newList; // Move to the next node in the right list.
            }
        }
  
        // Return the merged list starting from the node after the dummy head.
        return mergedListHead.next;
    };
  
    // Start the recursive merging process with the full range of indices.
    return mergeLists(0, lists.length - 1);
  };
  