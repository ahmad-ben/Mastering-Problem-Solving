var missingNumber = function(numArr) {
  let missNum = 0;

  for(let i = 1; i <= numArr.length; i++) missNum ^= i;

  for(const num of numArr) missNum ^= num;

  return missNum;
};