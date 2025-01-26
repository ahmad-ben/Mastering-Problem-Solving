const serialize = (root) => {
  if (root === null) return "$#";

  return "$" + root.val + serialize(root.left) + serialize(root.right);
}

const z_function = (s) => {
  const z = new Array(s.length).fill(0);

  let l = 0, r = 0, n = s.length;

  for (let i = 1; i < n; i++) {
    if (i <= r) z[i] = Math.min(r - i + 1, z[i - l]);

    while (i + z[i] < n && s[z[i]] === s[i + z[i]]) z[i]++;

    if (i + z[i] - 1 > r) {
      l = i;
      r = i + z[i] - 1;
    }

  }

  return z;
}

const isSubtree = (root, subRoot) => {
  const serialized_root = serialize(root);
  const serialized_subRoot = serialize(subRoot);
  const combined = serialized_subRoot + "|" + serialized_root;
  
  const z_values = z_function(combined);
  const sub_len = serialized_subRoot.length;
  
  for (let i = sub_len + 1; i < combined.length; i++)
    if (z_values[i] === sub_len) return true;

  return false;
};

// LATER