var countBits = function(n) {
  const outArr = Array(n + 1).fill(0);

  let currRetVal = 1, nextRetVal = 2;

  for(let numIdx = 1; numIdx < outArr.length; ++numIdx){
    if(numIdx === nextRetVal)
      [currRetVal, nextRetVal] = [nextRetVal, nextRetVal * 2];

    outArr[numIdx] = 1 + outArr[numIdx - currRetVal];
  };

  return outArr;
};