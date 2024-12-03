class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

var MinStack = function() {
  this.head = null;
  this.size = 0;
  this.itemsOrdering = [];
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  const newTop = new Node(val);
  if(this.head) newTop.next = this.head;
  this.head = newTop;
  ++this.size;
  
  if(this.size === 1) this.itemsOrdering[0] = val;
  else{
    let newSortedArr = [];
    let positionFound = false;

    console.log(this.itemsOrdering, val)
    for(num of this.itemsOrdering){
      if(positionFound || num < val) newSortedArr.push(num)
      else{
        newSortedArr.push(val);
        newSortedArr.push(num);
        positionFound = true;
      }
    };

    if(!positionFound) this.itemsOrdering.push(val);
    else this.itemsOrdering = newSortedArr;  
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  if(!this.head) return null;

  const oldVal = this.head.value;
  const newTop = this.head.next;
  this.head.next = null;
  this.head = newTop;
  --this.size;

  let newArray = [];
  let deletedValueFounded = false;
  for(num of this.itemsOrdering){
    if(num !== oldVal || deletedValueFounded)  newArray.push(num);
    else deletedValueFounded = true;
  };
  this.itemsOrdering = newArray;
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  if(!this.head) return null;
  return this.head.value;
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.itemsOrdering[0];
};
