const isValid = function(s) {
  if(s.length % 2 !== 0) return false;

  let obj = { "]": "[", ")": "(",  "}": "{"};
  let stack = [];

  for(sign of s){
    const signInObj = obj[sign];

    if(!signInObj) stack.push(sign);
    else if(stack[stack.length - 1] === signInObj) stack.pop();
    else return false;
  };

  return stack.length === 0;
};