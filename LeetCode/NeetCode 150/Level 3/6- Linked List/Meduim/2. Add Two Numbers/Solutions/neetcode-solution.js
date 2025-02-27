/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let dummyHead = currentTail = new ListNode(), carry = val = 0;

  while (l1 || l2 || carry) {
    const list1Value = l1 ? l1.val : 0, list2Value = l2 ? l2.val : 0;

    val = list1Value + list2Value + carry;

    carry = Math.floor(val / 10);
    val = val % 10;

    currentTail.next = new ListNode(val);
    currentTail = currentTail.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummyHead.next;
}