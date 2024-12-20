/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
  let obj = {}, originObj = {}, firstIdx = 0, secondIdx, objOfSortedArr = {};

  // Start the loop and stop in the thrid before the last since we are searching for three value.
  while(firstIdx < nums.length - 1){
    secondIdx = firstIdx + 1;
    const firstItem = nums[firstIdx];

    // Create an obj for fast lookup and avoid the re-looping in the coming second items search.
    if(firstIdx === 0){
      for(i = secondIdx + 1; i < nums.length; i++) 
        originObj[nums[i]] = (++originObj[nums[i]] || 1);
      obj = structuredClone(originObj);
    }else{
      --originObj[nums[secondIdx]];
      obj = structuredClone(originObj);
    }
    // Start the loop after the first value to avoid replication and stop in the second before the last since.
    while(secondIdx < nums.length - 1){
      const secondItem = nums[secondIdx];

      // Check the wanted value, we already determine the previous two value so we are searching for the last by:
      // x + y + z = 0 => x = (-y) + (-z)
      if(obj[-firstItem -secondItem]){
        const arr = [firstItem, secondItem, -firstItem -secondItem].sort();
        const sortedStrArr = arr.join(",");
        if(!objOfSortedArr[sortedStrArr]) objOfSortedArr[sortedStrArr] = arr;
      };

      ++secondIdx;

      // Delete the current item from our obj since it will represents the second value.
      --obj[nums[secondIdx]];
    };

    ++firstIdx; 
  };

  return Object.values(objOfSortedArr);
};















