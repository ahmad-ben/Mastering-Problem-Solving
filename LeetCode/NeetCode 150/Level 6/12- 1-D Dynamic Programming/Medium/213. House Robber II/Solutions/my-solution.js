var rob = function(nums) {
  if(nums.length === 1) return nums[0];

  const houseMaxMem = [];

  const robHouse = (houseIdx) => {
    if(houseMaxMem[houseIdx] !== undefined) return houseMaxMem[houseIdx];

    if(houseIdx >= nums.length) return houseMaxMem[houseIdx] = [0, 0];

    const currHouseMoney = nums[houseIdx];

    if(houseIdx + 1 === nums.length) 
      return houseMaxMem[houseIdx] = [0, currHouseMoney];

    const robMax1 = robHouse(houseIdx + 2);
    const robMax2 = robHouse(houseIdx + 3);

    return houseMaxMem[houseIdx] = [
      Math.max(robMax1[0], robMax2[0]) + currHouseMoney,
      Math.max(robMax1[1], robMax2[1]) + currHouseMoney
    ]
  };

  return Math.max(robHouse(0)[0], robHouse(1)[1], robHouse(2)[1])
};