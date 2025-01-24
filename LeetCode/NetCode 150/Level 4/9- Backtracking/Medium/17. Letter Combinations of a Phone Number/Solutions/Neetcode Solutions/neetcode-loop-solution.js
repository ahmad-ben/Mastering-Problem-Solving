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
  if (digits.length === 0) return [];

  let res = [""];

  for (const digit of digits) {
    const tmp = [];
    for (const curStr of res) 
      for (const c of digitToChar[digit]) tmp.push(curStr + c);

    res = tmp;
  }
  return res;
};