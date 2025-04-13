var hammingWeight = function(n) {
  const numInBin = n.toString(2); let setBitsNum = 0;

  for(const binNum of numInBin) if(binNum == 1) ++setBitsNum; 

  return setBitsNum;
};