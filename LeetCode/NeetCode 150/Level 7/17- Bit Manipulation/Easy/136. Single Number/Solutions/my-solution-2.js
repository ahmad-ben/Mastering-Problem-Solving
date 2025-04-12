const singleNumber = numArr => {
  let outNum = 0;

  for(const num of numArr) outNum ^= num;

  return outNum;
};