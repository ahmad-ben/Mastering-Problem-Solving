var maximumCount = function(numArr) {
  let negativeNum = positiveNum = 0;

  for(num of numArr) if(num > 0) ++positiveNum; else if(num < 0) ++negativeNum;

  return Math.max(positiveNum, negativeNum);
};