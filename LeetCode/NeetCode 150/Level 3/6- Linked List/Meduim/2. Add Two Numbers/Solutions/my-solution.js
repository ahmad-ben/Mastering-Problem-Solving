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
var addTwoNumbers = function(l1, l2) {
  let newHead = currentTail = new ListNode(0, null), sumResult = 0, retention = 0;

  while(l1 && l2){
    sumResult = l1.val + l2.val + retention;

    const newNode = new ListNode(sumResult % 10, null);

    retention = Math.floor(sumResult / 10);

    currentTail.next = newNode;
    currentTail = newNode;

    l2 = l2.next;
    l1 = l1.next;
  }

  while(l1){
    sumResult = l1.val + retention;

    const newNode = new ListNode(sumResult % 10, null);

    retention = Math.floor(sumResult / 10);

    currentTail.next = newNode;
    currentTail = newNode;

    l1 = l1.next;
  }

  while(l2){
    sumResult = l2.val + retention;

    const newNode = new ListNode(sumResult % 10, null);

    retention = Math.floor(sumResult / 10);

    currentTail.next = newNode;
    currentTail = newNode;

    l2 = l2.next;
  }

  if(retention) currentTail.next = new ListNode(retention, null);

  return newHead.next;
};