const countPali = (s, l, r) => {
  let res = 0;

  while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r))
    res++, l--, r++;

  return res;
};

const countSubstrings = (s) => {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    res += countPali(s, i, i);
    res += countPali(s, i, i + 1);
  }
  return res;
};