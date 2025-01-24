const digitToChar = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "qprs",
  "8": "tuv",
  "9": "wxyz"
};

const letterCombinations = (digits) => {
  const res = [];

  if (digits.length === 0) return res;

  const backtrack = (i, curStr) => {
    if (curStr.length === digits.length) return res.push(curStr);

    for (const c of digitToChar[digits[i]]) backtrack(i + 1, curStr + c);
  };

  backtrack(0, "");
  return res;
};