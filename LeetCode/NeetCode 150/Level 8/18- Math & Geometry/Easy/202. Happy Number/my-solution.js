var isHappy = function(n) {
  const sumRes = new Set();

  while(true){
    let comingNum = 0;

    if(n === 1) return true;
    if(sumRes.has(n)) return false; else sumRes.add(n);

    while(n){
      comingNum += Math.pow(n % 10, 2);
      n = Math.trunc(n / 10);
    }

    n = comingNum;
  }
};