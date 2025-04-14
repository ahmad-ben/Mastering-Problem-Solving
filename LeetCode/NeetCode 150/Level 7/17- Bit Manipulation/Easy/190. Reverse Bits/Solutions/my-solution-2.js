var reverseBits = function(n) {
  let out = 0, pow = 31;

  for(;n !== 0; n >>>= 1, --pow) out += ((n & 1) * Math.pow(2, pow));

  return out;
};