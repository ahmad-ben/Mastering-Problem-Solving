const rob = (numAr) => {
  let one = two = three = 0;

  for(let houseIdx = numAr.length - 1; houseIdx >= 0; --houseIdx)
    [one, two, three] = [Math.max(two, three) + numAr[houseIdx], one, two];

  return Math.max(one, two);
};