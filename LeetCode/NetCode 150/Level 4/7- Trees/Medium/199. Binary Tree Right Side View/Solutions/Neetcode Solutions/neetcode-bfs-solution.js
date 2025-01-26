const rightSideView = (root) => {
  const q = new Queue(), res = [];;

  q.push(root);

  while (!q.isEmpty()) {
    let qLen = q.size(), rightSide = null;

    for (let i = 0; i < qLen; i++) {
      const node = q.pop();

      if(!node) continue;

      rightSide = node;
      q.push(node.left);
      q.push(node.right);

    };

    if (rightSide) res.push(rightSide.val);
  };

  return res;
};