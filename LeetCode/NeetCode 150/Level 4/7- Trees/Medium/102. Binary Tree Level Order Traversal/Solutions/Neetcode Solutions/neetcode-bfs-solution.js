const levelOrder = root => {
  let res = [];
  if (!root) return res;

  const q = new Queue();
  q.push(root);

  while (!q.isEmpty()) {
    let level = [];

    for (let i = q.size(); i > 0; i--) {
      let node = q.pop();

      if (node !== null) {
        level.push(node.val);
        q.push(node.left);
        q.push(node.right);
      }
    }
    
    if (level.length > 0) res.push(level);
  };

  return res;
}