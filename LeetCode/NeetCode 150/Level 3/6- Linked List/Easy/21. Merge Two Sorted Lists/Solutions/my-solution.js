const mergeTwoLists = function(list1, list2) {
  let head = new ListNode();
  let mergedLLTail = head, list1CurrNode = list1, list2CurrNode = list2;

  while(list1CurrNode != null && list2CurrNode != null){
    if(list1CurrNode.val <= list2CurrNode.val){
      mergedLLTail.next = list1CurrNode;
      mergedLLTail = mergedLLTail.next;
      list1CurrNode = list1CurrNode.next;
    }else{
      mergedLLTail.next = list2CurrNode;
      mergedLLTail = mergedLLTail.next;
      list2CurrNode = list2CurrNode.next;
    }
  };

  while(list1CurrNode != null){
    mergedLLTail.next = list1CurrNode;
    mergedLLTail = mergedLLTail.next;
    list1CurrNode = list1CurrNode.next;
  };

  while(list2CurrNode != null){
    mergedLLTail.next = list2CurrNode;
    mergedLLTail = mergedLLTail.next;
    list2CurrNode = list2CurrNode.next;
  };

  let newHead = head.next;
  head.next = null;

  return newHead;
};