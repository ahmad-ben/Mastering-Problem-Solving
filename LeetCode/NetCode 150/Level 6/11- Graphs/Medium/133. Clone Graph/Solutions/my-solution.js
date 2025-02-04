var cloneGraph = function(node) {
  const clonedNodes = [];

  const cloneNode = (currOriginNode) => {
    const clonedNode = new _Node(currOriginNode.val);
    clonedNodes[clonedNode.val] = clonedNode;

    for(let neighbor of currOriginNode.neighbors){
      if(clonedNodes[neighbor.val]) 
        clonedNode.neighbors.push(clonedNodes[neighbor.val]);
      else clonedNode.neighbors.push(cloneNode(neighbor));
    }

    return clonedNode;
  };

  return node ? cloneNode(node) : null;
};