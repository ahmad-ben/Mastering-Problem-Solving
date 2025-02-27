/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  const wantedValue = this.cache.get(key);

  // The key isn't exist in our cache.
  if(wantedValue === undefined) return -1;

  // Delete and register the key again, to make it in the bottom.
  // Mark it as the last updated key.
  this.cache.delete(key);
  this.cache.set(key, wantedValue);

  // Return the key value.
  return wantedValue;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  // Get the val of the wanted key, if it's exist.
  const keyVal = this.cache.get(key);
  
  // If the key is exist, delete it to push it at the end later.
  if(keyVal) this.cache.delete(key);

  // If the key is not exist, but our capacity is full delete the first key.
  // Since our logic focus on push the latest updated node to the end of the map by:
  // Delete the key and push it again
  else if(this.cache.size === this.capacity) {
    const firstKey = this.cache.keys().next().value
    this.cache.delete(firstKey);
  }   
  
  // Push the new node at the end.
  this.cache.set(key, value); 
};