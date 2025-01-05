var diameterOfBinaryTree = function(root) {
  let maxPathVal = 0;

  const farthestPath = (node) => {
    if (!node) return 0;

    const leftLongestPath = farthestPath(node.left);
    const rightLongestPath = farthestPath(node.right);

    maxPathVal = Math.max(maxPathVal, leftLongestPath + rightLongestPath);

    return Math.max(leftLongestPath, rightLongestPath) + 1;
  };

  farthestPath(root);
  return maxPathVal; 
};