/*

  For each time we should check the following:
    If the maxLeftIdx !== currentLeftIdx:
      If the current less than the max:
        Get the value of the max and reduce it.
        move the leftIdx forward.
      If the current is equal or bigger than the max:
        Get the value of the max and reduce it.
        Set the current as the new max.
    If the maxRight !== currentRightIdx:
      If the current less than the max:
        Get the value of the max and reduce it.
        move the rightIdx forward.
      If the current is equal or bigger than the max:
        Get the value of the max and reduce it.
        Set the current as the new max.
    Check how is the smallest the maxLeftIdx or the maxRight:
      If it's the maxLeftIdx:
        Calculate the space it can contain and register it.
        move the leftIdx forward. 
      If it's the maxRight:
        Calculate the space it can contain and register it.
        move the rightIdx forward. 
*/

/**
 * @param {number[]} height
 * @return {number}
 */

const trap = height => {
  let leftIdx = 0, maxLeftIdx = 0, containerWaterNum = 0;
  let rightIdx = height.length - 1, maxRightIdx =  height.length - 1;
  let objOfIndicesVal = {};

  while(leftIdx < rightIdx){
    const leftItem = height[leftIdx], rightItem = height[rightIdx];

    if(leftIdx !== maxLeftIdx){
      if(height[maxLeftIdx] > leftItem){
        objOfIndicesVal[maxLeftIdx] -= leftItem;
        ++leftIdx;
      }else{
        objOfIndicesVal[maxLeftIdx] -= ((rightIdx - leftIdx) * height[maxLeftIdx]);
        maxLeftIdx = leftIdx;                
      }
    }else if(rightIdx !== maxRightIdx){
      if(height[maxRightIdx] > rightItem){
        objOfIndicesVal[maxRightIdx] -= rightItem;
        --rightIdx;
      }else{
        objOfIndicesVal[maxRightIdx] -= ((rightIdx - leftIdx) * height[maxRightIdx]);
        maxRightIdx = rightIdx;
      }
    }else{
      if(leftItem < rightItem){
        objOfIndicesVal[leftIdx] = leftItem * (rightIdx - leftIdx - 1);
        ++leftIdx;                
      }else{
        objOfIndicesVal[rightIdx] = rightItem * (rightIdx - leftIdx - 1);
        --rightIdx;                
      }
    }
  };

  for(idx in objOfIndicesVal) containerWaterNum += objOfIndicesVal[idx];

  return containerWaterNum;
};