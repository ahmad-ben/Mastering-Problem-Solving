var numDistinct = function(s, t) {
  if(s.length < t.length) return 0;

  const memArr = Array.from({ length: 2 }, () => Array(s.length + 1).fill(0));

  memArr[1] = memArr[1].map(c => 1);

  let tCharIdx = t.length - 1;
  while(tCharIdx > -1){
    const tCurrChar = t[tCharIdx];

    for(let sCharIdx = s.length - 1; sCharIdx >= 0; sCharIdx--){
      const sCurrChar = s[sCharIdx];

      memArr[0][sCharIdx] += memArr[0][sCharIdx + 1];

      if(tCurrChar === sCurrChar) 
        memArr[0][sCharIdx] += memArr[1][sCharIdx + 1];
    };

    memArr[1] = [...memArr[0]];
    memArr[0] = memArr[0].map(c => 0);
    --tCharIdx;
  }

  return memArr[1][0];
};