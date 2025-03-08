var isNStraightHand = function(hand, groupSize) {
  const groupsNum = hand.length / groupSize;

  if(groupsNum % 1) return false;

  hand.sort((a,b) => a - b);

  const handInfo = {};

  for(let cardVal of hand) handInfo[cardVal] = (handInfo[cardVal] || 0) + 1;

  for(let cardIdx = 0; cardIdx < hand.length; ++cardIdx){
    let cardVal = hand[cardIdx];
    if(!handInfo[cardVal]) continue;

    for(let cCardVal = cardVal; cCardVal < cardVal + groupSize; ++cCardVal){
      if(!handInfo[cCardVal]) return false;
      --handInfo[cCardVal];
    }
  }

  return true;
};