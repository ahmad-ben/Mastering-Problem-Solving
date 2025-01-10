var goodNodes = function(root) {
  let queue = new Queue(), goodNodeNum = 0, queueSize;

  queue.enqueue([root, root.val]);

  while(!queue.isEmpty()){
    queueSize = queue.size();

    while(queueSize--){
      const nodeInfo = queue.dequeue();

      if(nodeInfo[0]){
        const maxVal = Math.max(nodeInfo[0].val, nodeInfo[1]); 

        if(nodeInfo[0].val >= nodeInfo[1]) ++goodNodeNum;

        queue.enqueue([nodeInfo[0].left, maxVal]);
        queue.enqueue([nodeInfo[0].right, maxVal]);
      }
    }
  }

  return goodNodeNum;
};