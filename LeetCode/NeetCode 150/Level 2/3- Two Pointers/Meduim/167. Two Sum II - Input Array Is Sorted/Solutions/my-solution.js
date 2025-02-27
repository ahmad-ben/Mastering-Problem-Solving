const twoSum = (numbers, target) => {
  let leftIdx = 0, rightIdx = numbers.length - 1, sum;

  while(true){
    sum = numbers[leftIdx] + numbers[rightIdx];

    if(sum > target) --rightIdx;
    else if(sum < target) ++leftIdx;
    else return [leftIdx + 1, rightIdx + 1];
  };
};