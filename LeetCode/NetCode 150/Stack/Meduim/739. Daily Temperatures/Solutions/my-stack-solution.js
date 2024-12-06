const dailyTemperatures = temperatures => {
  let stack = [];
  let daysToWarmerTem = [];

  for(i = 0; i < temperatures.length; i++){
    while(true){
      if(temperatures[i] > temperatures[stack[stack.length - 1]]){
        const idx = stack.pop();
        daysToWarmerTem[idx] = i - idx;
      }else{
        stack.push(i);
        break;
      }
    }
  };

  for(i of stack) daysToWarmerTem[i] = 0;

  return daysToWarmerTem;
};
