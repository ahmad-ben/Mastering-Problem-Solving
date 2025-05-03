const reverseString = s => {
  for(
    let leftI = 0, rightI = s.length - 1; leftI < rightI; ++leftI, --rightI
  ) [s[leftI],s[rightI]] = [s[rightI],s[leftI]];
};