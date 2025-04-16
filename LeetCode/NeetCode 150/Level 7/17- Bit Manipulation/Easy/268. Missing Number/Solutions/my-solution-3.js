var missingNumber = function(numArr) {
  let arrSum = (numArr.length * (numArr.length + 1)) / 2;

  for(const num of numArr) arrSum -= num;

  return arrSum;
};