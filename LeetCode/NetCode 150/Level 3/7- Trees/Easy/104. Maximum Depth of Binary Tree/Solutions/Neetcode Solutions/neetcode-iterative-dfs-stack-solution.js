const maxDepth = root => {
  let stack = [[root, 1]], res = 0;

  while (stack.length > 0) {
    const current = stack.pop();
    const node = current[0], depth = current[1];

    if (node) {
      res = Math.max(res, depth);
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }

  return res;
}