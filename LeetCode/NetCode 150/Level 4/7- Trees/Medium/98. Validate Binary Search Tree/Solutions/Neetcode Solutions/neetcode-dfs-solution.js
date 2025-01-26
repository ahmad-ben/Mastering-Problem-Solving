const isValidBST = (root) => valid(root, -Infinity, Infinity);

const valid = (node, left, right) => {
  if (node === null) return true;

  if (!(left < node.val && node.val < right)) return false;

  return valid(node.left, left, node.val) &&
    valid(node.right, node.val, right);
};