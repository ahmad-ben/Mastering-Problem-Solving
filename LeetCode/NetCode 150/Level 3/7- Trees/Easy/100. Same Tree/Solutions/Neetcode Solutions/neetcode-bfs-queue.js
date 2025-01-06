const isSameTree = (p, q) => {
  const q1 = new Queue();
  const q2 = new Queue();

  q1.push(p);
  q2.push(q);
      
  while (!q1.isEmpty() && !q2.isEmpty()) {
    let nodeP = q1.pop();
    let nodeQ = q2.pop();

    if (nodeP === null && nodeQ === null) continue;
    if (nodeP === null || nodeQ === null || nodeP.val !== nodeQ.val) 
      return false;

    q1.push(nodeP.left);
    q1.push(nodeP.right);
    q2.push(nodeQ.left);
    q2.push(nodeQ.right);
  }

  return true;
}