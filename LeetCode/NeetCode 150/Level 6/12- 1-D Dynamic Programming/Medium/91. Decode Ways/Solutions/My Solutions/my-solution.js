var numDecodings = function(s) {
  const memArr = [];

  const checkPosition = (currIdx, digitsNum) => {
    if(currIdx === s.length) {
      if(digitsNum === 1) return 1;
      return 0;
    }

    if(currIdx > s.length) return 0;

    if(digitsNum === 1 && s[currIdx] === "0") return 0;
    else if(
      digitsNum === 2 && 
      (
        `${s[currIdx - 1]}${s[currIdx]}` > 26 || 
        `${s[currIdx - 1]}${s[currIdx]}` < 10
      )
    ) return 0;

    if(memArr[currIdx] !== undefined) return memArr[currIdx];

    return memArr[currIdx] = 
      checkPosition(currIdx + 1, 1) + checkPosition(currIdx + 2, 2);
  };

  return checkPosition(0, 1) + checkPosition(1, 2);
};