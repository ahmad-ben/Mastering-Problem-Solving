var mergeTriplets = function(triplets, target) {
  const resArr = [0, 0, 0];

  for(let tripletIdx = 0; tripletIdx < triplets.length; ++tripletIdx){
    let validTriplet = true;

    for(let tripletValIdx = 0; tripletValIdx < 3; ++tripletValIdx)
      if(triplets[tripletIdx][tripletValIdx] > target[tripletValIdx]) 
        validTriplet = false;

    if(validTriplet)
      for(let idx = 0; idx < 3; ++idx)
        resArr[idx] = Math.max(resArr[idx], triplets[tripletIdx][idx]);
  };

  return(
    resArr[0] === target[0] && 
    resArr[1] === target[1] && 
    resArr[2] === target[2]
  );
};