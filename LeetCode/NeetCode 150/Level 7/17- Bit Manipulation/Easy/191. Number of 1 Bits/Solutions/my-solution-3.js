var hammingWeight = function(n, setBitsNum = 0) {
  for(;n !== 0; n &= (n - 1)) ++setBitsNum;
  return setBitsNum;
};