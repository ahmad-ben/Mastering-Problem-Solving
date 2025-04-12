var singleNumber = function(numArr) {
  numArr.sort((a,b) => a - b);

  for(let i = 0; i < numArr.length; i = i + 2)
    if(numArr[i] !== numArr[i + 1]) return numArr[i];

  return numArr.at(-1);
};