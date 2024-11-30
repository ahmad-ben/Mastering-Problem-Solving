const groupAnagrams = (strArr) => {
  if(strArr.length === 0) return [[""]];

  let output = [];
  let existedAnagrams = {};  
  let firstStrObj = {};
  let secondStrObj = {};
  let currentIdx = 0;

  for(let i = 0; i < strArr.length; i++){
    if(existedAnagrams[i]) continue;

    existedAnagrams[i] = true;
    output[currentIdx] = [strArr[i]]; 
    firstStrObj = {};
    for(char of strArr[i]) 
      firstStrObj[char] = firstStrObj[char] ? ++firstStrObj[char] : 1;

    for(let j = i + 1; j < strArr.length; j++){
      if(existedAnagrams[j]) continue;

      secondStrObj = {};
      for(char of strArr[j]) 
        secondStrObj[char] = secondStrObj[char] ? ++secondStrObj[char] : 1;

      if(!checkIfTheyAnagram(firstStrObj, secondStrObj)) continue;

      existedAnagrams[j] = true;
      output[currentIdx].push(strArr[j]);                  
    };

    ++currentIdx;
  };


  return output;
};

const checkIfTheyAnagram = (firstStr, secondStr) => {
  if(Object.keys(firstStr).length !== Object.keys(secondStr).length) return false;

  for(key in firstStr) if(firstStr[key] !== secondStr[key]) return false;
  return true;
} 
