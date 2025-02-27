/**
 * @param {number} k
 * @param {number[]} numArr
 */
var KthLargest = function(k, numArr) {
  this.k = k;
  this.numArr = numArr.sort((a, b) => b - a);
  while(this.numArr.length > k) this.numArr.pop();
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function(val) {
  const newArr = [];
  let newValAdded = false;

  for(num of this.numArr){
      if(newArr.length > this.k) break;

      if(num > val || newValAdded) newArr.push(num);
      else {
          newArr.push(val);
          newArr.push(num);
          newValAdded = true;
      }
  }

  if(this.numArr.length === newArr.length) newArr.push(val)

  this.numArr = newArr;

  return this.k > this.numArr.length ? null : this.numArr[this.k - 1];
};

/** 
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, numArr)
* var param_1 = obj.add(val)
*/