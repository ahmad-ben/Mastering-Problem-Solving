// We can solve it using Stack or Recursive also.
const reverseString = (s) => {
  let l = 0, r = s.length - 1;

  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++, r--;
  }
};