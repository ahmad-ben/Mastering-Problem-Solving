class Twitter {
  constructor() {
    this.count = 0;
    this.tweetMap = new Map();
    this.followMap = new Map();
  }

  postTweet(userId, tweetId) {
    if (!this.tweetMap.has(userId)) this.tweetMap.set(userId, []);

    const tweets = this.tweetMap.get(userId);

    tweets.push([this.count, tweetId]);

    if (tweets.length > 10) tweets.shift();

    this.count--;
  }

  getNewsFeed(userId) {
    const res = [];

    if (!this.followMap.has(userId)) this.followMap.set(userId, new Set());

    this.followMap.get(userId).add(userId);

    const minHeap = new PriorityQueue({compare: (a, b) => a[0] - b[0]});

    if (this.followMap.get(userId).size >= 10) {
      const maxHeap = new PriorityQueue({compare: (a, b) => a[0] - b[0]});

      for (const followeeId of this.followMap.get(userId)) {
        if (!this.tweetMap.has(followeeId)) continue;

        const tweets = this.tweetMap.get(followeeId);
        const idx = tweets.length - 1;
        const [cnt, tId] = tweets[idx];
        maxHeap.enqueue([-cnt, tId, followeeId, idx - 1]);

        if (maxHeap.size() > 10) maxHeap.dequeue();
      }

      while (maxHeap.size() > 0) {
        const [negCount, tId, fId, idx] = maxHeap.dequeue();
        minHeap.enqueue([-negCount, tId, fId, idx]);
      }
    } else {
      for (const followeeId of this.followMap.get(userId)) {
        if (!this.tweetMap.has(followeeId)) continue;

        const tweets = this.tweetMap.get(followeeId);
        const idx = tweets.length - 1;
        const [cnt, tId] = tweets[idx];
        minHeap.enqueue([cnt, tId, followeeId, idx - 1]);
      }
    }

    while (minHeap.size() > 0 && res.length < 10) {
      const [cnt, tId, fId, idx] = minHeap.dequeue();
      res.push(tId);

      if (idx >= 0) {
        const [olderCount, olderTId] = this.tweetMap.get(fId)[idx];
        minHeap.enqueue([olderCount, olderTId, fId, idx - 1]);
      }
    }

    return res;
  }

  follow(followerId, followeeId) {
    if (!this.followMap.has(followerId)) 
      this.followMap.set(followerId, new Set());

    this.followMap.get(followerId).add(followeeId);
  }

  unfollow(followerId, followeeId) {
    if (this.followMap.has(followerId)) 
      this.followMap.get(followerId).delete(followeeId);
  }
}