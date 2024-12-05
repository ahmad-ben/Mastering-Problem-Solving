const generateParenthesis = n => {
  let outputArr = [];

  const generate = (n, string = "", value = 0) => {
    if(n ===  0 && value === 0) return outputArr.push(string);

    if(value === 0) return generate(n - 1, string + "(", value + 1);
    else if(n === 0) return generate(n, string + ")", value - 1);

    generate(n - 1, string + "(", value + 1);
    generate(n, string + ")", value - 1);
  };

  generate(n);

  return outputArr;
};