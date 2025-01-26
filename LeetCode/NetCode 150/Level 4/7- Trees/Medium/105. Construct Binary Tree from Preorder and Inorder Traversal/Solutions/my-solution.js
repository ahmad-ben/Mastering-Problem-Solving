var buildTree = function(preOrder, inOrder) {
  let inOrderNodesIdx = {};
  for(let i = 0; i < inOrder.length; ++i) inOrderNodesIdx[inOrder[i]] = i;

  let idxInPreOrder = 0;
  const dfs = (leftIdx, rightIdx) => {
      if(leftIdx > rightIdx) return null;

      const inOrderNodeIdx = inOrderNodesIdx[preOrder[idxInPreOrder++]]; 

      return new TreeNode(
        inOrder[inOrderNodeIdx], 
        dfs(leftIdx, inOrderNodeIdx - 1), 
        dfs(inOrderNodeIdx + 1, rightIdx)
      );
  };

  return dfs(0, inOrder.length - 1);
};