const lengthOfLongestSubstring = s => {
  let mp = new Map();
  let l = 0, res = 0;
  
  for (let r = 0; r < s.length; r++) { // l = 0, r = 0, "aabcabcbb"
    // make sure that the current SubString doesn't have any duplicate.
    if (mp.has(s[r])) l = Math.max(mp.get(s[r]) + 1, l);

    mp.set(s[r], r);

    // Calculate the current length of the SubString.
    // abc => 2 - 0 + 1 => 3.
    // abca => 3 - 1 + 1 => 3 "We push the `r` in the above condition since it's already exist".
    res = Math.max(res, r - l + 1); 
  }
  return res;
}