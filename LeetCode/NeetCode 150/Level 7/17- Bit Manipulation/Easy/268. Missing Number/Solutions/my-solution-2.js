var missingNumber = function(numArr) {
  numArr.sort((a,b) => a - b);

  for(let i = 0; i < numArr.length; i++) if(numArr[i] !== i) return i;

  return numArr.length;
};