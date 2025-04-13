var hammingWeight = function(n) {
  let setBitsNum = 0;

  while(n !== 0){
    if((n % 2) === 1) ++setBitsNum;
    n = Math.trunc(n / 2);
  }

  return setBitsNum;
};