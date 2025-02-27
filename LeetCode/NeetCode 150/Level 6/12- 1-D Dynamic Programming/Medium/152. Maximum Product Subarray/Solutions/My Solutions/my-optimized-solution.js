var maxProduct = function(numArr) {
  let maxProduct = -Infinity, max = min = 1;

  for(let numIdx = numArr.length - 1; numIdx >= 0; --numIdx){
    const currNum = numArr[numIdx], prevMax = max;

    max = Math.max(max * currNum, min * currNum, currNum);
    min = Math.min(prevMax * currNum, min * currNum, currNum);
    maxProduct = Math.max(maxProduct, max)
  };

  return maxProduct;
};