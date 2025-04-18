var getSum = function(a, b) {
  for(;b !== 0; a ^= b, b = ((a ^ b) & b) << 1); return a;
};