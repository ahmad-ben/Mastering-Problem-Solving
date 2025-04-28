var DetectSquares = function() {
  this.pointsInfo = {
    yAxis: {},
    xAndYAxis: {}
  };

  return this;
};

/** 
* @param {number[]} point
* @return {void}
*/
DetectSquares.prototype.add = function(point) {
  if(!this.pointsInfo.yAxis[point[1]]) this.pointsInfo.yAxis[point[1]] = [];
  this.pointsInfo.yAxis[point[1]].push(point);

  if(!this.pointsInfo.xAndYAxis[`${point[0]},${point[1]}`]) 
    this.pointsInfo.xAndYAxis[`${point[0]},${point[1]}`] = 0;
  ++this.pointsInfo.xAndYAxis[`${point[0]},${point[1]}`];
};

/** 
* @param {number[]} point
* @return {number}
*/
DetectSquares.prototype.count = function(point) {
  const wantedXPoints = [], [pointX, pointY] = point, visitedPoints = new Set();

  let count = 0;

  for(const [x, y] of (this.pointsInfo.yAxis[pointY] || [])) 
    wantedXPoints.push([x, y]);

  for(const [x, y] of wantedXPoints){
    if(x === pointX && y === pointY) continue;
    if(visitedPoints.has(`${x},${y}`)) continue;
    visitedPoints.add(`${x},${y}`);

    const space = Math.abs(pointX - x);

    if(
      this.pointsInfo.xAndYAxis[`${pointX},${pointY + space}`] && 
      this.pointsInfo.xAndYAxis[`${x},${y + space}`] 
    ) count += (
      this.pointsInfo.xAndYAxis[`${x},${y}`] *
      this.pointsInfo.xAndYAxis[`${pointX},${pointY + space}`] *
      this.pointsInfo.xAndYAxis[`${x},${y + space}`]
    );

    if(
      this.pointsInfo.xAndYAxis[`${pointX},${pointY - space}`] && 
      this.pointsInfo.xAndYAxis[`${x},${y - space}`] 
    ) count += (
      this.pointsInfo.xAndYAxis[`${x},${y}`] *
      this.pointsInfo.xAndYAxis[`${pointX},${pointY - space}`] *
      this.pointsInfo.xAndYAxis[`${x},${y - space}`]
    )
  };

  return count;
};