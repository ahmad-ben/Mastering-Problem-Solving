var checkValidString = function(s) {

  const validCurrStr = (nextIdx, currStrVal) => {
    if(currStrVal > 0) return false;

    if(nextIdx === s.length) return currStrVal === 0;

    const nextChar = s[nextIdx];

    if(nextChar === "(") return validCurrStr(nextIdx + 1, currStrVal - 1);
    else if(nextChar === ")") return validCurrStr(nextIdx + 1, currStrVal + 1);
    else{
      return(
        validCurrStr(nextIdx + 1, currStrVal) ||
        validCurrStr(nextIdx + 1, currStrVal - 1) ||
        validCurrStr(nextIdx + 1, currStrVal + 1)              
      )  
    }
  };

  return validCurrStr(0, 0);
};