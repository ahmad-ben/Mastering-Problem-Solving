var shuffle = function(numArr, n) {
  const newArr = []; let pointer1 = 0, pointer2 = n;

  while(pointer2 < numArr.length){
    newArr.push(numArr[pointer1]), newArr.push(numArr[pointer2]);
    ++pointer1, ++pointer2;
  };

  return newArr;
};