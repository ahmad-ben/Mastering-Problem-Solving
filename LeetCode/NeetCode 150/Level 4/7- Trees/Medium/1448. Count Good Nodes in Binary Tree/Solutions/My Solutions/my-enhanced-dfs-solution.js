// After seeing Neetcode solution.

var goodNodes = function(root) {
  const gNodesNum = (currNode, mVal) => {
    if(!currNode) return 0;

    let goodNodesNum = currNode.val < mVal ? 0 : 1;
    
    mVal = Math.max(mVal, currNode.val);

    goodNodesNum += gNodesNum(currNode.left, mVal) + gNodesNum(currNode.right, mVal);

    return goodNodesNum;
  };

  return gNodesNum(root, root.val);
};