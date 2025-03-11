var checkValidString = function(s) {
  let leftPartMax = leftPartMin = 0;

  for(let char of s){
    if(char === "(") ++leftPartMax, ++leftPartMin;
    else if(char === ")") --leftPartMax, --leftPartMin;
    else ++leftPartMax, --leftPartMin;

    if(leftPartMax < 0) return false;
    if(leftPartMin < 0) leftPartMin = 0;
  }

  return leftPartMin === 0; 
};