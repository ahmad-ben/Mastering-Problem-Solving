var getSum = function(a, b) {
  let carry = currPower = sumResult = 0;

  for(;a !== 0 || b !== 0 || carry !== 0; currPower++){
    let aBit = a & 1, bBit = b & 1;
    sumResult |= (aBit ^ bBit ^ carry) * Math.pow(2, currPower);
    carry = carry ? (aBit | bBit) : (aBit & bBit);
    a = a >>> 1, b = b >>> 1;
  }

  return sumResult;
};