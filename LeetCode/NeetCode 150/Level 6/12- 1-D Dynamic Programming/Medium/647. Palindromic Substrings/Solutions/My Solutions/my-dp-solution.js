  var countSubstrings = function(s) {
  let palindromicSubStrNum = 0, strLength = s.length;

  const memArr = Array.from({length: strLength}, () => new Array(strLength).fill(false));

  for(let leftEdge = strLength - 1; leftEdge >= 0; --leftEdge){

    for(let rightEdge = leftEdge; rightEdge < strLength; ++rightEdge){

      if(
        s[leftEdge] === s[rightEdge] &&
        (rightEdge - leftEdge <= 2 || memArr[leftEdge + 1][rightEdge - 1])
      ) ++palindromicSubStrNum, memArr[leftEdge][rightEdge] = true;

    }

  }

  return palindromicSubStrNum;
  };