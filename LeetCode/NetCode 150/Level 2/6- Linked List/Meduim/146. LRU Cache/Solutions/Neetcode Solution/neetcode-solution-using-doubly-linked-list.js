class Node {
  /**
   * @param {number} key
   * @param {number} val
   */
  constructor(key, val) {
    this.key = key;
    this.val = val;

    this.prev = this.next = null;
  }
}

class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.cache = new Map();
    this.cap = capacity;

    this.left = this.right = new Node(0, 0);

    this.left.next = this.left;  // LRU    MRU 
    this.right.prev = this.left; // 0 -> <- 0 
  }

  /**
   * @param {Node} node
   */
  remove(node) {
    const prev = node.prev, nxt = node.next;

    prev.next = nxt;
    nxt.prev = prev;
  }

  /**
   * @param {Node} node
   */
  insert(node) {
    const prev = this.right.prev;

    prev.next = node;
    node.prev = prev;

    node.next = this.right;
    this.right.prev = node;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.cache.has(key)) return -1;

    const node = this.cache.get(key);
    this.remove(node);
    this.insert(node);

    return node.val;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.cache.has(key)) this.remove(this.cache.get(key));

    const newNode = new Node(key, value);
    this.cache.set(key, newNode);
    this.insert(newNode);

    if (this.cache.size > this.cap) {
      const lru = this.left.next;

      this.remove(lru);
      this.cache.delete(lru.key);
    }
  }
}