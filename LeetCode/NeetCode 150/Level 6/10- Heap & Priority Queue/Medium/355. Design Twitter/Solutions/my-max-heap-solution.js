let publishTime = 1;

var Twitter = function() {
    this.usersInfo = 
        Array.from({ length: 500 }).map(
            // User Personal Tweets || Followees || Followers || MPQ of Most Recent Tweets  
            // [1, 2, 3]           || [4, 5, 1] || [3, 7]    || [{Priority: 5, {tweetId: 5, postedId: 5}}]
            () => [[], new Set(), new Set(), new MaxPriorityQueue({ priority: (tweetInfo) => tweetInfo.publishTime})
        ]);
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    const userInfo = this.usersInfo[userId];

    // Add the tweet to the personal tweet array -Deque to stop on 10 easily-.
    userInfo[0].push({tweetId, publishTime}); 

    // Add the tweet to the personal MPQ .
    userInfo[3].enqueue({publishTime, tweetId, postedId: userId});

    // Push the tweet to all followers.
    for(const followerId of userInfo[2]){
        const followerMPQ = this.usersInfo[followerId][3];
        followerMPQ.enqueue({publishTime, tweetId, postedId: userId});
    }

    ++publishTime;
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    const latestFeedArr = [];
    const userInfo = this.usersInfo[userId];
    const userFeed = userInfo[3];
    const recentMPQTweetsInfo = [];


    while(latestFeedArr.length < 10 && userFeed.size() > 0){
        const tweetInfo = userFeed.dequeue().element;
        recentMPQTweetsInfo.push(tweetInfo);
        latestFeedArr.push(tweetInfo.tweetId);
    } 

    for(const tweet of recentMPQTweetsInfo) userFeed.enqueue(tweet)

    return latestFeedArr;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    const followerInfo = this.usersInfo[followerId];
    const followeeInfo = this.usersInfo[followeeId];

    if(followerInfo[1].has(followeeId)) return;

    followerInfo[1].add(followeeId);
    followeeInfo[2].add(followerId);

    for(const {publishTime, tweetId} of followeeInfo[0])
        followerInfo[3].enqueue({publishTime, tweetId, postedId: followeeId});

};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    const followerInfo = this.usersInfo[followerId];
    const followeeInfo = this.usersInfo[followeeId];

    if(!followerInfo[1].has(followeeId)) return;

    followerInfo[1].delete(followeeId);
    followeeInfo[2].delete(followerId);

    const newFollowerMPQ = new MaxPriorityQueue({ priority: (tweetInfo) => tweetInfo.publishTime});

    const prevFollowerMPQ = followerInfo[3];

    while(prevFollowerMPQ.size()){
        let {publishTime, tweetId, postedId} = prevFollowerMPQ.dequeue().element; //No destructure needed.
        if(postedId === followeeId) continue;
        newFollowerMPQ.enqueue({publishTime, tweetId, postedId});
    }

    followerInfo[3] = newFollowerMPQ;
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */