var isNStraightHand = function(hand, groupSize) {
  const groupsNum = hand.length / groupSize;

  if(groupsNum % 1) return false;

  hand.sort((a,b) => a - b);

  const handInfo = {}, visitedIndices = new Set();

  for(let cardIdx = 0; cardIdx < hand.length; ++cardIdx){
    const cardVal = hand[cardIdx];

    if(!handInfo[cardVal]) handInfo[cardVal] = [];
    handInfo[cardVal].push(cardIdx);
  };

  let cardIdx = 0;

  while(cardIdx < hand.length){
    if(visitedIndices.has(cardIdx)) {++cardIdx; continue;}

    let cardVal = hand[cardIdx];
    for(let cCardVal = cardVal; cCardVal < cardVal + groupSize; ++cCardVal){
      if(!handInfo[cCardVal] || handInfo[cCardVal].length === 0) return false;
      visitedIndices.add(handInfo[cCardVal].pop());
    }
  }

  return true;
};