const characterReplacement = (s, k) => {
  let res = 0;

  // Set of all the characters in our string.
  let charSet = new Set(s);

  // Loop over each character in our set, finding the longest string can each character produce. 
  for (let c of charSet) {

    // count the time the current character exist in our string.
    let count = 0, l = 0;
    for (let r = 0; r < s.length; r++) {
      if (s[r] === c) count++;

      // The current string isn't valid.
      while ((r - l + 1) - count > k) {
        if (s[l] === c) count--;
        l++;
      }

      res = Math.max(res, r - l + 1);
    }
  };

  return res;
};

characterReplacement("AABABFBSSSS", 2);