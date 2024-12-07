/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

var carFleet = function(target, position, speed) {
  let stack = [];
  let obj = {};

  for(i = 0; i < position.length; i++) 
      obj[position[i]] = (target - position[i]) / speed[i];

  position = position.sort((a, b) => a - b);

  for(carPos of position){
    while(obj[carPos] >= obj[stack[stack.length - 1]]) stack.pop();
    stack.push(carPos);
  };

  return stack.length;
};