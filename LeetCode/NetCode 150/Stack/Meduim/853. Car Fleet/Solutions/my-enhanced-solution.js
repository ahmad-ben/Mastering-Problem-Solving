const carFleet = (target, position, speed) => {
  let stack = [];
  let pairArr = position.map((pos, idx) => [pos, speed[idx]]);

  pairArr = pairArr.sort((a, b) => b[0] - a[0]);

  for (const [pos, speed] of pairArr) {
    const timeToArrive = (target - pos) / speed;
    if(timeToArrive > (stack[stack.length - 1] || 0)) stack.push(timeToArrive);
  };

  return stack.length;
};