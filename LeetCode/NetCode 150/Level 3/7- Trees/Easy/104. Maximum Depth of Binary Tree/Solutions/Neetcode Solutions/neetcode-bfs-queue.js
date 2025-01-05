const maxDepth = (root) => {
  let q = new Queue(), level = 0;

  if (root) q.push(root);

  while (q.size() > 0) {
    const size = q.size();

    for (let i = 0; i < size; i++) {
      const node = q.pop();

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }

    level++;
  }

  return level;
};