// After seeing the Neetcode solution.

var multiply = function(num1, num2) {
  if(num1 === "0" || num2 === "0") return "0";

  let res = "", stillZero = true;

  const resArr = new Array(num1.length + num2.length).fill(0);

  const n1Length = num1.length, n2Length = num2.length;

  for (let n1Idx = n1Length - 1; n1Idx >= 0; --n1Idx)

    for (let n2Idx = n2Length - 1; n2Idx >= 0; --n2Idx) {
      let multiplyRes = num1[n1Idx] * num2[n2Idx];
      let digitIdx = n1Length + n2Length - n1Idx - n2Idx - 2;

      while(multiplyRes){
        let newVal = resArr[digitIdx] + (multiplyRes % 10);

        if(newVal > 9) resArr[digitIdx] = newVal % 10, multiplyRes += 10;
        else resArr[digitIdx] = newVal;

        multiplyRes = Math.trunc(multiplyRes / 10), ++digitIdx;
      }

    };

  for(let digitIdx = resArr.length - 1; digitIdx >= 0; --digitIdx){
    const digit = resArr[digitIdx];

    if(digit === 0 && stillZero) continue;

    res = `${res}${digit}`, stillZero = false;
  }

  return res;
};