var TimeMap = function() {
  this.timeMapObj = {};
};

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.timeMapObj[key]) this.timeMapObj[key] = [];
  this.timeMapObj[key].push({timestamp, value});
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function(key, timestamp) {
  if (!this.timeMapObj[key]) return "";

  const keyArr = this.timeMapObj[key];

  // If the smallest timestamp is smaller than the wanted timestamp.
  if(keyArr[0].timestamp > timestamp) return "";

  let leftEdge = 0, rightEdge = keyArr.length - 1, midIdx, minimumTimeStamp = 0;
  
  // If the biggest timestamp is smaller than the wanted timestamp.
  if(keyArr[rightEdge].timestamp < timestamp) return keyArr[rightEdge].value; 

  while(leftEdge <= rightEdge){
    midIdx = Math.floor((leftEdge + rightEdge) / 2);

    const midTimeStamp = keyArr[midIdx].timestamp;

    if(midTimeStamp === timestamp) return keyArr[midIdx].value;

    if(midTimeStamp > timestamp) rightEdge = midIdx - 1;
    else{
      minimumTimeStamp = midIdx;
      leftEdge = midIdx + 1;      
    }
  };

  return keyArr[minimumTimeStamp].value;
};
