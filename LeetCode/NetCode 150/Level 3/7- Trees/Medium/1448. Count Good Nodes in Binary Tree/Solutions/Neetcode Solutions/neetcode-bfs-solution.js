const goodNodes = (root) => {
  let q = new Queue(), res = 0;

  q.push([root, -Infinity]);

  while (!q.isEmpty()) {
    let [node, maxVal] = q.pop();

    if (node.val >= maxVal) res++;

    if (node.left) q.push([node.left, Math.max(maxVal, node.val)]);
  
    if (node.right) q.push([node.right, Math.max(maxVal, node.val)]);
  };

  return res;
};