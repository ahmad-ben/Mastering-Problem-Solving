class ListNode {
  constructor(key) { this.key = key; this.next = null; }
}

class MyHashSet {
  constructor() {
    this.set = Array.from({ length: 10000 }, () => new ListNode(0));
  }

  hash(key) { return key % this.set.length; }

  add(key) {
    let cur = this.set[this.hash(key)];
    while (cur.next) if (cur.next.key === key) return; else cur = cur.next;
    cur.next = new ListNode(key);
  }

  remove(key) {
    let cur = this.set[this.hash(key)];
    while (cur.next)
      if (cur.next.key === key) {cur.next = cur.next.next; return;}
      else cur = cur.next;
  }

  contains(key) {
    let n = this.set[this.hash(key)];
    while (n.next) if (n.next.key === key) return true; else n = n.next;
    return false;
  }
}