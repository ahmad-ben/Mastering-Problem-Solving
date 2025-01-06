const isBalanced = root => {
  let stack = [], node = root, last = null, depths = new Map();

  // Continue if: 
    // We have a node in our stack.
    // The current node we hold it's not null.
  while (stack.length > 0 || node !== null) {

    // If the current node is not null:
    if (node !== null) {
      stack.push(node);
      node = node.left;
    } else {
      // If the current node is null, update it's value from the stack.
      node = stack[stack.length - 1];

      // LATER
      if (node.right === null || last === node.right) {
        stack.pop();

        let left = depths.get(node.left) || 0;
        let right = depths.get(node.right) || 0;

        if (Math.abs(left - right) > 1) return false;

        depths.set(node, 1 + Math.max(left, right));

        last = node;
        node = null;
      }else {
        node = node.right;
      }
    }
  };

  return true;
}