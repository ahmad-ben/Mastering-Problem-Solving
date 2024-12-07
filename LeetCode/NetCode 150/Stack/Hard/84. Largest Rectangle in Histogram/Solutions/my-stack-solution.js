/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let stack = [];
  let maxVal = 0; 

  for(i = 0; i < heights.length; i++){
    const currentBarInfo = {height: heights[i], idx: i};
    let prevBar = stack[stack.length - 1];

    if(prevBar?.height === currentBarInfo.height) continue;

    while(prevBar?.height > currentBarInfo.height){
      currentBarInfo.idx = prevBar.idx;
      maxVal = Math.max(prevBar.height * (i - prevBar.idx), maxVal);
      stack.pop();
      prevBar = stack[stack.length - 1];
    };
    stack.push(currentBarInfo);
  };

  for(const {height, idx} of stack) 
    maxVal = Math.max(height * (heights.length - idx), maxVal);

  return maxVal;
};