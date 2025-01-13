const buildTree = (preorder, inorder) => {
  let pre_idx = 0, indices = new Map();
      
  inorder.forEach((val, i) => indices.set(val, i));
      
  const dfs = (l, r) => {
    if (l > r) return null;

    let root_val = preorder[pre_idx++];

    let root = new TreeNode(root_val);
    let mid = indices.get(root_val);

    root.left = dfs(l, mid - 1);
    root.right = dfs(mid + 1, r);

    return root;
  }
  
  return dfs(0, inorder.length - 1);
};

// Later, Check other solutions in neetcode website.