const kthSmallest = (root, k) => {
  let stack = [], curr = root;

  while (stack.length > 0 || curr !== null) {

    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    };

    curr = stack.pop();
    k--;

    if (k === 0) return curr.val;

    curr = curr.right;
  }
};