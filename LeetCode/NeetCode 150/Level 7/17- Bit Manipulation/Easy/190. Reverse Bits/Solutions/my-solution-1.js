var reverseBits = function(n) {
  const numInBit = n.toString(2).padStart(32, "0"); let reverseIntStr = "";

  for(let bit of numInBit) reverseIntStr = bit + reverseIntStr;

  return parseInt(reverseIntStr, 2);
};