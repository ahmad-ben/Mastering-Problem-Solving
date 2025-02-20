var numDecodings = function(s) {
  let currNumWays = 0, prevNum = 1, prevPrevNum = 0;

  for(let numIdx = s.length - 1; numIdx >= 0; --numIdx){
    if(s[numIdx] === "0") currNumWays = 0;
    else{
      currNumWays = prevNum;
      const num = `${s[numIdx]}${s[numIdx + 1]}`
      if(num > 9 && num < 27) currNumWays += prevPrevNum;
    };

    [prevPrevNum, prevNum, currNumWays] = [prevNum, currNumWays, 0];
  }

  return prevNum;
};