class TimeMap {
  constructor() {
      this.keyStore = new Map();
  }

  /**
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   * @return {void}
   */
  set(key, value, timestamp) {
      if (!this.keyStore.has(key)) {
          this.keyStore.set(key, []);
      }
      this.keyStore.get(key).push([timestamp, value]);
  }

  /**
   * @param {string} key
   * @param {number} timestamp
   * @return {string}
   */
  get(key, timestamp) {
      const values = this.keyStore.get(key) || [];
      let left = 0;
      let right = values.length - 1;
      let result = '';

      while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (values[mid][0] <= timestamp) {
              result = values[mid][1];
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }

      return result;
  }
}