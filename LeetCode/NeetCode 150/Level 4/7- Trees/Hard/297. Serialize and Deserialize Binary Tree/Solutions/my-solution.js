/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let nodeIdx = 0, treeInfo = [];

  const dfs = (currNode) => {
      if(!currNode) return null;

      const currNodeIdx = nodeIdx++;
      const leftNodeIdx = dfs(currNode.left);
      const rightNodeIdx = dfs(currNode.right);

      treeInfo[currNodeIdx] = [currNode.val, leftNodeIdx, rightNodeIdx];

      return currNodeIdx;
  };

  dfs(root);

  return JSON.stringify(treeInfo);
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  data = JSON.parse(data);

  for(nodeInfo of data) nodeInfo[0] = new TreeNode(nodeInfo[0]);

  for(nodeInfo of data) {
      if(nodeInfo[1]) nodeInfo[0].left = data[nodeInfo[1]][0]; 
      if(nodeInfo[2]) nodeInfo[0].right = data[nodeInfo[2]][0];
  };

  return data[0] ? data[0][0] : null;
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/