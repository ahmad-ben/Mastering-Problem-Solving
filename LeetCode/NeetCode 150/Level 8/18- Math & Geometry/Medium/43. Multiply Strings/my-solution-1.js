const calculateSum = (num1, num2) => {
  let carry = 0, res = "";
  let n1Idx = num1.length - 1, n2Idx = num2.length - 1;

  while(num1[n1Idx] !== undefined || num2[n2Idx] !== undefined){
    const n1V = Number(num1[n1Idx]) || 0, n2V = Number(num2[n2Idx]) || 0;
    const currRes = n1V + n2V + carry;

    res = `${currRes % 10}${res}`;
    carry = Math.trunc(currRes / 10);

    --n1Idx, --n2Idx;
  }

  if(carry) res = `${carry}` + res;
  return `${res}`;
};

var multiply = function(num1, num2) {
  if(num1 === "0" || num2 === "0") return "0";

  let res = "0"; const n1Length = num1.length, n2Length = num2.length;

  for(let n1Idx = 0; n1Idx < n1Length; ++n1Idx)

    for(let n2Idx = 0; n2Idx < n2Length; ++n2Idx){
      const multiplyRes =  num1[n1Idx] * num2[n2Idx];
      const zerosCount = n1Length + n2Length - n1Idx - n2Idx - 2;
      const resWithZeros = `${multiplyRes}${"0".repeat(zerosCount)}`;

      res = calculateSum(res, resWithZeros);
    };

  return res;
};