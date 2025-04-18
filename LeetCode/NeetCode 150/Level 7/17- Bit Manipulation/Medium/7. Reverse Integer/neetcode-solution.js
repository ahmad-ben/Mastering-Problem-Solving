const reverse = (x) => {
  const MIN = -2147483648, MAX = 2147483647; // -2^31 || 2^31 - 1
  const MAXDivide = Math.trunc(MAX / 10), MINDivide = Math.trunc(MIN / 10);

  let res = 0;

  while (x !== 0) {
    const digit = x % 10; x = Math.trunc(x / 10);

    if (
      res > MAXDivide || res < MINDivide || 
      (res === MAXDivide && digit > MAX % 10) ||
      (res === MINDivide && digit < MIN % 10)
    ) return 0;

    res = res * 10 + digit;
  }

  return res;
};