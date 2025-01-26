const invertTree = root => {
  if (!root) return null;

  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    [node.left, node.right] = [node.right, node.left];

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return root;
}