var findItinerary = function(tickets) {
  const fromToMap = {}, itineraryOrder = [];

  for(let [startName, targetName] of tickets){
    if(!fromToMap[startName]) fromToMap[startName] = new MinPriorityQueue();
    fromToMap[startName].enqueue(targetName);
  };

  visitFrom = (currSrc) => {        
    while(fromToMap[currSrc] && !fromToMap[currSrc].isEmpty())
      visitFrom(fromToMap[currSrc].dequeue());

    itineraryOrder.push(currSrc);
  };

  visitFrom("JFK");  
  return itineraryOrder.reverse();
};