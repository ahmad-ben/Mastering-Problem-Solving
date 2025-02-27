var kClosest = function(points, k) {
  // If k equals the number of points, return all points.
  if (k === points.length) return points;

  // MinPriorityQueue, the priority is based on the distance of the point from the origin.
  const minHeap = new MinPriorityQueue({ priority: (obj) => obj.distance });

  // Array to store the k closest points to the origin.
  const kClosestPoints = [];

  // Add all points to the min heap with their distance as the priority.
  for ([pointX, pointY] of points)
    // Point X-coordinate | Y-coordinate | Distance from origin (x^2 + y^2).
    minHeap.enqueue({pointX,pointY,distance: Math.pow(pointX, 2) + Math.pow(pointY, 2)});

  // Step 2: Extract the k closest points from the min heap.
  while (k--) {
    // Remove the point with the smallest distance from the heap.
    const pointInfo = minHeap.dequeue().element;

    // Add the point coordinates to the result array.
    kClosestPoints.push([pointInfo.pointX, pointInfo.pointY]);
  }

  return kClosestPoints;
};