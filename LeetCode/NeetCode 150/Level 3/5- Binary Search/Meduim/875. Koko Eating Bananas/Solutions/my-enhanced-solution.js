/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var minEatingSpeed = function(piles, h) {
    let maxRate = 0, minRate = 1;

    for(num of piles) maxRate = Math.max(maxRate, num); // O(n) Time Complexity.

    if(h === piles.length) return maxRate;
    
    let neededHours, middleRate, minimumBananasRate = maxRate;

    while(minRate <= maxRate){ // O(log m) -Binary Search-
        middleRate = Math.floor((minRate + maxRate) / 2), neededHours = 0;
        
        for(currentPileBananasNum of piles){ // O(n) -Loop over the entire array in the worst case-
            neededHours += Math.ceil(currentPileBananasNum / middleRate);
            if(neededHours > h) break;
        }

        if(neededHours > h){
            //Pass the allowed hours, this rate is so small.
            minRate = middleRate + 1;
        }else{
            // Didn't pass the allowed hour, add it if it's the best, can we find better. 
            minimumBananasRate = Math.min(minimumBananasRate, middleRate);
            maxRate = middleRate - 1;
        }
    };

    return minimumBananasRate;
};