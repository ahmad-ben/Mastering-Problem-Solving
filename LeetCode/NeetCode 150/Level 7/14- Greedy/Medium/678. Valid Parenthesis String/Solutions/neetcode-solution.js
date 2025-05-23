const checkValidString = (s) => {
  let leftMin = leftMax = 0;

  for (const c of s) {
    if (c === '(') leftMin++, leftMax++;
    else if (c === ')') leftMin--, leftMax--;
    else leftMin--, leftMax++;
    
    if (leftMax < 0) return false;
    if (leftMin < 0) leftMin = 0;
  };

  return leftMin === 0;
};