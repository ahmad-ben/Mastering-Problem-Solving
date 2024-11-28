/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = (s, t) => {
  if(s.length !== t.length) return false;

  let sCharsObj = {};
  for(char of s) sCharsObj[char] = sCharsObj[char] ? ++sCharsObj[char] : 1;
  for(char of t){
    if(!sCharsObj[char]) return false;
    --sCharsObj[char];
  };
  return true;
};