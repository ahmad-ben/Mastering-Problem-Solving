const serialize = (root) => {
  const res = [];
  dfsSerialize(root, res);
  return res.join(',');
}

const dfsSerialize = (node, res) => {
  if (node === null) return res.push('N');

  res.push(node.val.toString());
  dfsSerialize(node.left, res);
  dfsSerialize(node.right, res);
}

const deserialize = (data) => {
  const vals = data.split(',');
  const i = { val: 0 };
  return dfsDeserialize(vals, i);
}

const dfsDeserialize = (vals, i) => {
  if (vals[i.val] === 'N') {
    i.val++;
    return null;
  }

  const node = new TreeNode(parseInt(vals[i.val]));

  i.val++;

  node.left = dfsDeserialize(vals, i);
  node.right = dfsDeserialize(vals, i);

  return node;
}