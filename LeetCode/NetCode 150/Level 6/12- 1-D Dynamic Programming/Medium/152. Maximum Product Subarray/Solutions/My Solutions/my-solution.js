  var maxProduct = function(numArr) {
  let largestProduct = -Infinity;

  for(let subArrStrIdx = 0; subArrStrIdx < numArr.length; ++subArrStrIdx){
    let currProductVal = numArr[subArrStrIdx];
    largestProduct = Math.max(largestProduct, currProductVal);

    for(let numIdx = subArrStrIdx + 1; numIdx < numArr.length; ++numIdx){
      currProductVal *= numArr[numIdx];
      largestProduct = Math.max(largestProduct, currProductVal);
    }
  }

  return largestProduct;
  };