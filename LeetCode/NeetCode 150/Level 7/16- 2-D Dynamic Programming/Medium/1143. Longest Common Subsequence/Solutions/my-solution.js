var longestCommonSubsequence = function(text1, text2) {
  const smallestT = text1.length < text2.length ? text1 : text2;
  const longT = smallestT === text1 ? text2 : text1;
  const memArr = new Array(smallestT.length).fill(0);

  let longComSubLength = 0;

  for(let lTextIdx = longT.length - 1; lTextIdx >= 0 ; --lTextIdx){
    const currLTextChar = longT[lTextIdx];

    let currMax = 0;
    for(let sTextIdx = smallestT.length - 1; sTextIdx >= 0 ; --sTextIdx){

      const currSTextChar = smallestT[sTextIdx];
      if(currLTextChar !== currSTextChar) 
        currMax = Math.max(currMax, memArr[sTextIdx]);
      else{
        const prevVal = memArr[sTextIdx];
        memArr[sTextIdx] = currMax + 1;
        longComSubLength = Math.max(longComSubLength, memArr[sTextIdx]);
        currMax = Math.max(currMax, prevVal);
      };

    };
  }

  return longComSubLength;
};