var countSubstrings = function(s) {
  // Initialize the number of palindromic substrings to 0
  let  palindromicSubStrNum = 0;

  // Find the palindromes
  const findPalindromes = (leftIdx, rightIdx) => {
    // While the left index is greater than or equal to 0 
    // and the right index is less than the length of the string 
    // and the characters at the left and right indices are the same:
      // Increment the left index,
      // decrement the right index, 
      // and increment the number of palindromic substrings
    while(
      leftIdx >= 0 && rightIdx < s.length && s[leftIdx] === s[rightIdx]
    ) --leftIdx, ++rightIdx, ++palindromicSubStrNum;
  };

  // Iterate through the characters of the string
  for(let charIdx = 0; charIdx < s.length; ++charIdx)
    // Find the palindromes with the current character as the center
    findPalindromes(charIdx, charIdx), findPalindromes(charIdx, charIdx + 1);

  // Return the number of palindromic substrings
  return palindromicSubStrNum;
};