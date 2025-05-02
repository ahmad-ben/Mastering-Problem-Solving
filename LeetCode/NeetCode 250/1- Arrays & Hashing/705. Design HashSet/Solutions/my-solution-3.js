class Node{
  constructor(val) { this.val = val; this.next = null; }
}

var MyHashSet = function() {
  this.arr = Array.from({length: 10 ** 4}, () => new Node(""));
};

MyHashSet.prototype.add = function(key) {
  const hashedKey = key % 10000;

  let cNode = this.arr[hashedKey];
  while(cNode.next) if(cNode.val === key) return; else cNode = cNode.next;

  if(cNode.val === key) return; cNode.next = new Node(key);
};

MyHashSet.prototype.remove = function(key) {
  const hashedKey = key % 10000;

  let prevN = this.arr[hashedKey];
  let cNode = this.arr[hashedKey].next;

  while(cNode)
    if(cNode.val === key) { prevN.next = cNode.next; return; }
    else prevN = cNode, cNode = cNode.next;
};

MyHashSet.prototype.contains = function(key) {
  const hashedKey = key % 10000;
  let cNode = this.arr[hashedKey].next;

  while(cNode) if(cNode.val === key) return true; else cNode = cNode.next;

  return false;
};