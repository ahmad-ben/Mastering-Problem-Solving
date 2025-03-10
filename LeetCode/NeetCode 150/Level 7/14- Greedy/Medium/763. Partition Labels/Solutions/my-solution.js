var partitionLabels = function(s) {
  const charMaxIdx = {}, partsSize = [];

  for(let charIdx = 0; charIdx < s.length; ++charIdx) 
    charMaxIdx[s[charIdx]] = charIdx; 

  let leftEdge = 0, rightEdge = charMaxIdx[s[0]];

  while(leftEdge < s.length){
    for(let charIdx = leftEdge; charIdx <= rightEdge; ++charIdx)
      rightEdge = Math.max(rightEdge, charMaxIdx[s[charIdx]]);

    partsSize.push(rightEdge - leftEdge + 1);
    [leftEdge, rightEdge] = [rightEdge + 1, charMaxIdx[s[rightEdge + 1]]];
  }

  return partsSize;
};