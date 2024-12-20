/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let maxVal = 0;
  let leftIdx, rightIdx;

  for(i = 0; i < height.length; i++){
      leftIdx = 0, rightIdx = height.length - 1;
      const currentHeight = height[i];

      while(rightIdx > i){
          if(height[rightIdx] >= currentHeight){
              maxVal = Math.max(currentHeight * (rightIdx - i), maxVal);
              break;
          }
          --rightIdx;
      }

      while(leftIdx < i){
          if(height[leftIdx] >= currentHeight){
              maxVal = Math.max(currentHeight * (i - leftIdx), maxVal);
              break;
          }
          ++leftIdx;
      }
  }

  return maxVal;
};