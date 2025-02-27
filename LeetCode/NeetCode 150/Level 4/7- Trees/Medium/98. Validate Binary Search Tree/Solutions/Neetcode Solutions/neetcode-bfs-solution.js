const isValidBST = (root) => {
  if (root === null) return true;

  const queue = new Queue([[root, -Infinity, Infinity]]);

  while (queue.size() > 0) {
    const [node, left, right] = queue.pop();
      
    if (!(left < node.val && node.val < right)) return false;
    
    if (node.left) queue.push([node.left, left, node.val]);

    if (node.right) queue.push([node.right, node.val, right]);
  }

  return true;
};