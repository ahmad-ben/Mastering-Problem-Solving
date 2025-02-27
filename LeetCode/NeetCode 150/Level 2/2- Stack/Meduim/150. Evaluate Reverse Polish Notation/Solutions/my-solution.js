/**
 * @param {string[]} tokens
 * @return {number}
 */

const calculate = (num1, num2, operator) => 
  operator === "+" ? num1 + num2:
  operator === "-" ? num1 - num2:
  operator === "*" ? num1 * num2:
  Math.trunc(num1 / num2)
;


const evalRPN = tokens => {
  let stack = [];

  for(const token of tokens){
    if(token < 201) stack.push(Number(token));
    else{
      const firstHead = stack.pop(), secondHead = stack.pop();
      const result = calculate(secondHead, firstHead, token);
      stack.push(result);
    };  
  }

  return stack[0];
};

console.log(evalRPN(["2","1","+","3","*"]));

