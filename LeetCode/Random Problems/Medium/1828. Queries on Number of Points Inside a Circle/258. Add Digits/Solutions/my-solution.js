var countPoints = function(points, queries) {
  const outputArr = Array.from({ length: queries.length }, () => 0);

  for(let queryIdx = 0; queryIdx < queries.length; ++queryIdx){
    currQ = queries[queryIdx];

    for(let point of points){
      if( 
        Math.sqrt(
          Math.pow(point[0] - currQ[0], 2) + Math.pow(point[1] - currQ[1], 2)
        ) <= currQ[2] 
      ) ++outputArr[queryIdx];
    }
  }

  return outputArr;
};