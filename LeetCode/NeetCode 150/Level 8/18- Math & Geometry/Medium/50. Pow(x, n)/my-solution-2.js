var myPow = function(x, n) {
  if(n < 0) x = 1 / x, n *= -1;

  const memObj = {}; memObj[0] = 1, memObj[1] = x;

  const calculate = (pow) => {
    if(memObj[pow]) return memObj[pow];

    let res = calculate(Math.trunc(pow / 2));

    if((pow % 2) === 0) return memObj[pow] = res * res;
    return memObj[pow] = res * res * x;
  };
  
  return calculate(n);
};