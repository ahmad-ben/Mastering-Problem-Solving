const trap = height => {
  let max = 0, val = 0, leftIdx = 0, rightIdx = height.length - 1;
  
  while(leftIdx < rightIdx){
    const leftItem = height[leftIdx], rightItem = height[rightIdx] 

    if(leftItem >= rightItem){
      let storeAmount = max - rightItem;
      if(storeAmount > 0) val += storeAmount; 
      max = Math.max(max, rightItem);
      --rightIdx;
    }else{
      let storeAmount = max - leftItem;
      if(storeAmount > 0) val += storeAmount; 
      max = Math.max(max, leftItem);
      ++leftIdx;
    }
  };

  return val;
};