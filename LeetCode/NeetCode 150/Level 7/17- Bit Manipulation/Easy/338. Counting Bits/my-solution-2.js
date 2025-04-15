var countBits = function(n) {
  const outArr = Array(n + 1).fill(0); let currOffset = 1;

  for(let numIdx = 1; numIdx < outArr.length; ++numIdx){
    if(Number.isInteger(Math.log2(numIdx))) currOffset = numIdx;

    outArr[numIdx] = 1 + outArr[numIdx - currOffset];
  };

  return outArr;
};