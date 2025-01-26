/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let duplicationNeed = 1;
    totalBananas = h * duplicationNeed;

    let currentPileIdx = 0;

    while(currentPileIdx < piles.length){
        const leftBananasAfterRemove = totalBananas - piles[currentPileIdx];
        const lB = Math.floor(leftBananasAfterRemove / duplicationNeed) * duplicationNeed;

        console.log(leftBananasAfterRemove, lB, totalBananas, piles[currentPileIdx])

        if(lB >= 0){
            totalBananas = lB;
            currentPileIdx++;
        }else{
            currentPileIdx = 0;
            ++duplicationNeed;
            totalBananas = h * duplicationNeed;
        }
    };

    return duplicationNeed;
};