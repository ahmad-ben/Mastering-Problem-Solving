var differenceOfSums = function(n, m) {
  num1 = num2 = 0;

  for(let i = 1; i <= n; ++i)
    if(i % m !== 0) num1 += i; else num2 += i;

  return num1 - num2;
};