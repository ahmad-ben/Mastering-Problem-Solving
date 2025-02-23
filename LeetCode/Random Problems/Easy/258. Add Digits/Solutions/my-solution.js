var addDigits = function(num) {
  let str = String(num);

  while(str.length > 1){
    let newSum = 0;
    for(let digit of str) newSum += Number(digit);
    str = String(newSum);
  }

  return Number(str);
};