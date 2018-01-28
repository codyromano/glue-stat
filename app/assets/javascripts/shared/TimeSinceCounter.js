class TimeSinceCounter {
  constructor(dateTime, selector, root = document) {
    this.updateFrequency = 1000;
    this.domNode = root.querySelector(selector);
    this.dateTime = dateTime;

    if (this.domNode === null) {
      throw new Error('DOM target element is missing');
    }
  }
  updateTimeSinceCompleted(newDateTime) {
    this.dateTime = newDateTime;
  }
  updateView() {
    const currentTime = new Date().getTime();
    this.domNode.innerText = this.dateTime.getTimeSince();
  }
  start() {
    if (!this.updateTimeInterval) {
      this.updateView();
      this.updateTimeInterval = window.setInterval(() => {
        this.updateView();
      }, this.updateFrequency);
      return true;
    }
    return false;
  }
  stop() {
    if (Number.isInteger(this.updateTimeInterval)) {
      window.clearInterval(this.updateTimeInterval);
      return true;
    }
    return false;
  }
}
