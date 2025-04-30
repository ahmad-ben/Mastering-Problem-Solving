var longestCommonPrefix = function(strArr) {
  let currIdx = 0, currLetter = "";

  while(true){
    for(const str of strArr){
      if(currLetter === "") currLetter = str[currIdx];
      if(str[currIdx] === undefined || currLetter !== str[currIdx]) 
        return strArr[0].substring(0, currIdx);
    };

    ++currIdx, currLetter = "";
  };
};