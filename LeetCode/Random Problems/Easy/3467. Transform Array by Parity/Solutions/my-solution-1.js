var transformArray = function(numArr) {
  const resArr = []; 

  for(const n of numArr) if(n % 2) resArr.push(1); else resArr.unshift(0);

  return resArr;
};