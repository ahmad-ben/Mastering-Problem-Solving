const carFleet = (target, position, speed) => {
  let arr = [];
  let times = [];
  let time;

  for (let i = 0; i < speed.length; i++) {
    // Calculate the time of each car to arrive.
    time = (target - position[i]) / speed[i];

    console.log(time, arr, times);
    // 1 [] []
    // 1 [ 10 ] [ 1 ]
    // 12 [ 10 ] [ 1 ]
    // 7 [ 10, 0 ] [ 1, 12 ]
    // 3 [ 10, 5, 0 ] [ 1, 7, 12 ]

    // The first value of j is -1, since arr initial value is [].
    let j = arr.length - 1;
    // The new car ahead of the current car, so we need to check the arrive time of the prev cars. 
    while (j > -1 && arr[j] < position[i]) {
      if (times[j] <= time) {
        // Remove the prev cars since this car is a head of them and will arrive late.
        // So there will be a fleet.
        arr.splice(j, 1);
        times.splice(j, 1);
      }
      j--;
    }

    // The current car are ahead of all cars *j === -1*. 
    // The arrive time of the car before the current is less than the current, so it's a fleet.
    if (j === -1 || times[j] < time) {
      arr.splice(j + 1, 0, position[i]);
      times.splice(j + 1, 0, time);
    }
  }
  return times.length;
};

carFleet(12, [10,8,0,5,3], [2,4,1,1,3]);