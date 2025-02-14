var rob = function(numArr) {
  if(numArr.length === 1) return numArr[0];

  const MemArr = [];

  const robHouse = (houseIdx) => {
    if(MemArr[houseIdx] !== undefined) return MemArr[houseIdx];

    if(houseIdx >= numArr.length) return 0;

    const maxAmount = 
      Math.max(robHouse(houseIdx + 2), robHouse(houseIdx + 3));

    return MemArr[houseIdx] = maxAmount + numArr[houseIdx];
  };

  robHouse(0, 0), robHouse(1, 0);

  return Math.max(MemArr[0], MemArr[1]);
};