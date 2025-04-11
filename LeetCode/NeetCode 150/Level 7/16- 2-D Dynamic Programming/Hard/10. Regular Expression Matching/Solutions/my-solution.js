var isMatch = function(s, p) {
  const sLen = s.length, pLen = p.length;
  const memArr = Array(pLen + 1).fill().map(() =>Array(sLen + 1).fill(null));
  memArr[pLen][sLen] = true;

  for(let rowIdx = pLen - 1; rowIdx > -1; --rowIdx){
    let patChar = p[rowIdx];
    let isSpecial = p[rowIdx + 1] === "*";

    for(let colIdx = sLen; colIdx > -1; --colIdx){
      let strChar = s[colIdx] ?? "";

      if(patChar === "*")
        memArr[rowIdx][colIdx] = memArr[rowIdx + 1][colIdx];
      else if(isSpecial){
        memArr[rowIdx][colIdx] = memArr[rowIdx + 1][colIdx];

        if(patChar === strChar || patChar === ".")
          memArr[rowIdx][colIdx] = (
            memArr[rowIdx][colIdx] ||
            memArr[rowIdx + 1][colIdx + 1] ||
            memArr[rowIdx][colIdx + 1] 
          )
      }else
        memArr[rowIdx][colIdx] = (
          (patChar === strChar || patChar === ".") && 
          memArr[rowIdx + 1][colIdx + 1]
        );
    }
  }

  return !!memArr[0][0];    
};