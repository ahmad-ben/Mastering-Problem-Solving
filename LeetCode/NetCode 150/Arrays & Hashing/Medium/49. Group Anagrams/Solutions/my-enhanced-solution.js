const groupAnagrams = strArr => {
  if(strArr.length === 0) return [[""]];

  let output = [];
  let existedAnagrams = {};

  for(let i = 0; i < strArr.length; i++){
    const sortedString = strArr[i].split('').sort().join(''); //=> M space complexity
    const anagramIdx = existedAnagrams[sortedString];

    if(anagramIdx !== undefined) output[anagramIdx].push(strArr[i]);
    else {
      existedAnagrams[sortedString] = output.length; //=> M space complexity
      output.push([strArr[i]]);
    };
  };


  return output; //=> N space complexity
};