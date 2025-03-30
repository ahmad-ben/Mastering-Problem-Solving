const spotPosToStr = (i, j) => `${i}, ${j}`;
const comparePos = (pos1, pos2) => pos1[0] === pos2[0] && pos1[1] === pos2[1];

var swimInWater = function(grid) {
  const visitedSpot = new Set(), lastIdxVal = grid.length - 1;
  const lastSpotPos = spotPosToStr(lastIdxVal, lastIdxVal);
  // [spotElevation, spotPosition]:
  const minNextSpotMPQ = new MinPriorityQueue(info => info[0]);
  minNextSpotMPQ.enqueue([grid[0][0], [0,0]]);

  let maxVisitedElev = 0;

  while(!visitedSpot.has(lastSpotPos)){
    const [currElev, currPos] = minNextSpotMPQ.dequeue();

    maxVisitedElev = Math.max(currElev, maxVisitedElev);
    visitedSpot.add(spotPosToStr(currPos[0], currPos[1]))

    const nextPos = [
      [currPos[0] - 1, currPos[1]],
      [currPos[0], currPos[1] - 1],
      [currPos[0] + 1, currPos[1]],
      [currPos[0], currPos[1] + 1]
    ];

    for(let [nextI, nextJ] of nextPos){
      if(
        nextI < 0 || nextI > lastIdxVal || 
        nextJ < 0 || nextJ > lastIdxVal ||
        visitedSpot.has(spotPosToStr(nextI, nextJ))
      ) continue;

      minNextSpotMPQ.enqueue([grid[nextI][nextJ], [nextI, nextJ]]);
    }
  }

  return maxVisitedElev;
};