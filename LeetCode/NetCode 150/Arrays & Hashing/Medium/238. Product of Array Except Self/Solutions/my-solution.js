const productExceptSelf = (numArr) => {
  let newArr = [];
  let multiplyOfPreSuf = 1;

  for(i = 0; i < numArr.length; i++){
    newArr.push(multiplyOfPreSuf);
    multiplyOfPreSuf *= numArr[i];
  };

  multiplyOfPreSuf = 1;
  for(i = newArr.length - 1; i >= 0; i--){
    newArr[i] *= multiplyOfPreSuf;
    multiplyOfPreSuf *= numArr[i];
  };

  return newArr;
};