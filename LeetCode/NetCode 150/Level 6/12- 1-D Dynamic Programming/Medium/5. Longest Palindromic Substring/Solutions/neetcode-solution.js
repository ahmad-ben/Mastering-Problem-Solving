const longestPalindrome = (s) => {
  let resIdx = 0, resLen = 0;

  for (let i = 0; i < s.length; i++) {
    // odd length
    let l = i, r = i;

    while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
      if (r - l + 1 > resLen) {
        resIdx = l;
        resLen = r - l + 1;
      };

      l--, r++;
    }

    // even length
    l = i, r = i + 1;

    while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
      if (r - l + 1 > resLen) {
        resIdx = l;
        resLen = r - l + 1;
      };
      l--, r++;
    }
  }

  return s.substring(resIdx, resIdx + resLen);
};