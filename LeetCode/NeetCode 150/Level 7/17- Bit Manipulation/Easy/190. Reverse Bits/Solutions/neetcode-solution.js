const reverseBits = (n) => {
  let res = 0;

  for (let i = 0; i < 32; i++) {
    const bit = (n >>> i) & 1;
    res += bit << (31 - i);
  };

  return res >>> 0;
};