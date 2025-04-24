var plusOne = function(digits) {
  let carry = 1, currDigitIdx = digits.length - 1;

  while(carry > 0 && currDigitIdx >= 0){
    let newSum = digits[currDigitIdx] + carry;

    digits[currDigitIdx] = newSum % 10; 
    
    carry = Math.trunc(newSum / 10); --currDigitIdx;
  };

  if(carry) digits.unshift(carry);

  return digits;
};