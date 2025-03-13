var mergeTriplets = function(triplets, target) {
  let matchIdxSet = new Set();

  for(let tripletIdx = 0; tripletIdx < triplets.length; ++tripletIdx){
    let matchIndices = [], validArr = true;

    for(let tripletValIdx = 0; tripletValIdx < 3; ++tripletValIdx){
      const wantedNumVal = target[tripletValIdx];
      const tripletVal = triplets[tripletIdx][tripletValIdx];

      if(tripletVal === wantedNumVal) matchIndices.push(tripletValIdx);
      else if(tripletVal > wantedNumVal) validArr =  false;
    };

    if(validArr) matchIndices.forEach(idx => matchIdxSet.add(idx));
  };

  return matchIdxSet.size === 3;
};