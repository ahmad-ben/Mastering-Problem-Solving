/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  const smallestT = text1.length < text2.length ? text1 : text2;
  const longT = smallestT === text1 ? text2 : text1;

  let longComSubLength = 0;

  const allSmallTSubSeq = new Set(); allSmallTSubSeq.add("");

  for(const currChar of smallestT){
    const newSubSeq = [];

    for (const char of allSmallTSubSeq) 
      newSubSeq.push(`${char}${currChar}`);

    newSubSeq.forEach(newSubSeq => allSmallTSubSeq.add(newSubSeq));
  }

  const allLongTSubSeq = new Set(); allLongTSubSeq.add("");

  for(const currChar of longT){
    const newSubSeq = [];

    for (const char of allLongTSubSeq) {
      const newSubSeqVal = `${char}${currChar}`;

      if(allSmallTSubSeq.has(newSubSeqVal)){
        if(newSubSeqVal.length === 6) console.log(newSubSeqVal);
        longComSubLength = Math.max(longComSubLength, newSubSeqVal.length);
      }

      newSubSeq.push(newSubSeqVal);
    };

    newSubSeq.forEach(newSubSeq => allLongTSubSeq.add(newSubSeq));
  }

  return longComSubLength;
};