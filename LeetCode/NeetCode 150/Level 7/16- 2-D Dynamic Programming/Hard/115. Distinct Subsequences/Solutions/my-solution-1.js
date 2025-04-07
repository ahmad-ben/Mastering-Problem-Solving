var numDistinct = function(s, t) {
  if(s.length < t.length) return 0;

  const memArr = Array.from(
    { length: t.length + 1 }, () => Array(s.length + 1).fill(0)
  );

  memArr[t.length] = memArr[t.length].map(c => 1);

  for(let tCharIdx = t.length - 1; tCharIdx >= 0; tCharIdx--){
    const tCurrChar = t[tCharIdx];

    for(let sCharIdx = s.length - 1; sCharIdx >= 0; sCharIdx--){
      const sCurrChar = s[sCharIdx];

      memArr[tCharIdx][sCharIdx] += memArr[tCharIdx][sCharIdx + 1];

      if(tCurrChar === sCurrChar) 
        memArr[tCharIdx][sCharIdx] += memArr[tCharIdx + 1][sCharIdx + 1];
    };
  };

  return memArr[0][0];
};