/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  // Linked List Structure:
  // Latest updated / pushed / got node     Second LUN,  SO ON...
  //    key, next                           ->  key, next 
  this.head = this.tail = null;

  // {Key: [Previous Node Ref, Key Node Ref, Value]}
  this.nodesMapping = new Map();
  
  // Our Linked List / Map size.
  this.size = 0;

  // Capacity.
  this.capacity = capacity;
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  let nodeInfo = this.nodesMapping.get(key);

  // Node isn't exist.
  if(!nodeInfo) return -1;

  const newHeadRef = nodeInfo[1];

  // It's the head no change is required.
  if(nodeInfo[1] === this.head) return nodeInfo[2];

  // Get the neighbors nodes info.
  const prevNodeRef = nodeInfo[0];
  const nextNodeRef = newHeadRef.next;
  const nextNodeInfo = this.nodesMapping.get(nextNodeRef?.val);

  // Linked List Handling:
  prevNodeRef.next = nextNodeRef;

  // Maybe the prev ref is the last now:
  if(!nextNodeRef) this.tail = prevNodeRef;
  else{
    // Update the next node prev val:
    nextNodeInfo[0] = prevNodeRef;
    this.nodesMapping.set(nextNodeRef.val, nextNodeInfo);
  }

  // Link the new head:
  newHeadRef.next = this.head;

  // Add to the old head the prev ref:
  const prevHeadInfo = this.nodesMapping.get(this.head.val);
  prevHeadInfo[0] = newHeadRef;
  this.nodesMapping.set(this.head.val, prevHeadInfo);


  // Remove the prev ref from the new head
  const newHeadInfo = this.nodesMapping.get(newHeadRef.val);
  newHeadInfo[0] = null;
  this.nodesMapping.set(newHeadInfo.val, prevHeadInfo);

  this.head = newHeadRef;

  return nodeInfo[2];
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  // Check if the key already exist or not:
  let nodeInfo = this.nodesMapping.get(key);
  if(nodeInfo){
      // Node is exist, so:
      // Just update the value.
      // Put it as head if it's not the current head.
      const wantedNRef = nodeInfo[1];
      const nBeforeWantedRef = nodeInfo[0];

      nodeInfo[0] = null;
      nodeInfo[2] = value;
      this.nodesMapping.set(key, [...nodeInfo]); //Better way of updating
      
      // Duplicate work:
      if(this.head === wantedNRef) return null;

      const nAfterWantedRef = wantedNRef.next;
      
      nBeforeWantedRef.next = nAfterWantedRef;

      if(nAfterWantedRef){
          let nAfterWantedInfo = this.nodesMapping.get(nAfterWantedRef.val);
          nAfterWantedInfo[0] = nBeforeWantedRef;
          this.nodesMapping.set(nAfterWantedRef.val, nAfterWantedInfo)
      }else this.tail = nBeforeWantedRef;
      
      wantedNRef.next = this.head;

      let prevHeadInfo = this.nodesMapping.get(this.head.val);
      prevHeadInfo[0] = wantedNRef;

      this.nodesMapping.set(this.head.val, prevHeadInfo)
      this.head = wantedNRef;
  }else{
      if(this.size === this.capacity){
          // Remove tail.
          const tailInfo = this.nodesMapping.get(this.tail.val);
          const nBeforeTailRef = tailInfo[0];

          if(nBeforeTailRef) nBeforeTailRef.next = null;
          else  this.head = nBeforeTailRef;

          this.nodesMapping.delete(this.tail.val);
          this.tail = nBeforeTailRef;

          --this.size;
      };

      const newHead = new ListNode(key, this.head);

      if(this.head){
          const oldHeadInfo = this.nodesMapping.get(this.head.val);
          oldHeadInfo[0] = newHead;
          this.nodesMapping.set(this.head.val, oldHeadInfo ); 
      }

      if(!this.tail) this.tail = this.head = newHead;
      else this.head = newHead;

      this.nodesMapping.set(key, [null, this.head, value]);

      ++this.size;
  }

  return null;
};

// We can make it much better by adding small functions for repetitive work. 
// The biggest problem is I didn't know that the map could:
// Provide its size.
// Preserve ordering along with the ability to traverse in that order.

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/