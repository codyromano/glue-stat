describe("TimeSinceCounter", function() {

  let mockDOM;
  let mockDateTime;
  let mockCounter;
  let updateFrequency;

  beforeEach(function() {
    mockDOM = generateMockDOM();
    mockDateTime = generateMockDateTime();
    mockCounter = generateMockCounter(mockDateTime, mockDOM);
  
    // Shorten the update window to expedite tests
    mockCounter.updateFrequency = 0;
    // Add a buffer because updateView method isn't guaranteed to fire
    // within the setTimeout window
    updateFrequency = mockCounter.updateFrequency + 250
  });

  function generateMockDOM() {
    const rootNode = document.createElement('div');
    const counterNode = document.createElement('div');
    counterNode.classList.add('test-counter');

    rootNode.appendChild(counterNode);
    return { rootNode, counterNode };
  }

  function generateMockDateTime() {
    const timeDateString = new Date().toLocaleString();
    testDateTime = new DateTime(timeDateString);

    return testDateTime;
  }

  function generateMockCounter(
    mockDateTime,
    mockDOM,
    selector = '.test-counter'
  ) {
    return new TimeSinceCounter(
      mockDateTime, selector, mockDOM.rootNode
    );
  }

  it("should throw when a DOM target is missing.", function() {
    const createMockCounter = generateMockCounter.bind(
      null, mockDateTime, mockDOM, '.missing');

    expect(createMockCounter).toThrow(
      new Error('DOM target element is missing')
    );
  });

  it("should update the DOM target as time passes.", function(done) {
    mockCounter.start();

    // Capture the initial date/time string that is rendered
    const initialText = mockDOM.counterNode.innerText;

    // Move date backward by one day
    const yesterday = new Date();
    yesterday.setHours( yesterday.getHours() - 24);
    mockCounter.dateTime = new DateTime(yesterday.toLocaleString());

    window.setTimeout(function() {
      const counterTextAfterTimeout = mockDOM.counterNode.innerText;

      expect(initialText.length).not.toBeLessThan(1);
      expect(counterTextAfterTimeout).not.toBeLessThan(1);
      expect(counterTextAfterTimeout).not.toEqual(initialText);

      done();
    }, updateFrequency);
  });

  it("should stop updating the target on .stop()", function(done) {
    mockCounter.start();
    mockCounter.stop();

    spyOn(mockCounter, 'updateView');

    setTimeout(function() {
      expect(mockCounter.updateView).not.toHaveBeenCalled();
      done();
    }, updateFrequency);

    // spyOn(foo, 'setBar');
  });
});
