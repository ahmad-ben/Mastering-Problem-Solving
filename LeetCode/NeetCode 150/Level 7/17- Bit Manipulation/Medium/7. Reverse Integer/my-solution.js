var reverse = function(x) {
  let isNegative = false, min = Math.pow(-2, 31), max = Math.pow(2, 31) - 1;
  if(x < 0){ isNegative = true; x *= -1 }
   
  let xDigitNum = Math.trunc(Math.log10(x)) + 1, res = 0;

  while(x){
    res += (x % 10) * Math.pow(10, --xDigitNum);
    x = Math.trunc(x / 10);
  }

  return (res < min || res > max) ? 0 : isNegative ? -res : res;
};