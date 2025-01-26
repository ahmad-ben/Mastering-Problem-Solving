const isPalindrome = s => {
  let leftPointer = 0, rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    const leftChar = isAlphaNumeric(s[leftPointer]);
    const rightChar = isAlphaNumeric(s[rightPointer]);

    if (!leftChar) {
      ++leftPointer; 
      if (!rightChar) --rightPointer;
    } else if (!rightChar) --rightPointer;
    else if (leftChar === rightChar) {
      ++leftPointer;
      --rightPointer;
    } else return false;
  };

  return true;
};

const isAlphaNumeric = l => {
  const code = l.charCodeAt();

  //      numeric (0-9)             lower alpha (a-z)
  if ((code > 47 && code < 58) || (code > 96 && code < 123)) return l;

  //      upper alpha (A-Z) 
  if (code > 64 && code < 91) return l.toLowerCase();

  return false;
};