var transformArray = function(numArr) {
  const resArr = []; let evenCount = oddCount = 0;  

  for(const num of numArr) if(num % 2) ++oddCount; else ++evenCount ;

  while(evenCount--) resArr.push(0); while(oddCount--) resArr.push(1);

  return resArr;
};