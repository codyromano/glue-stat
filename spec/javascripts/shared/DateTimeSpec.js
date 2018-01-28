describe("DateTime", function() {

  function createTestDateWithOffset(date, hoursOffset) {
    date.setHours(date.getHours() + hoursOffset);
    return date;
  }

  it("should be available for testing", function() {
    expect(typeof DateTime).toEqual("function");
  });

  const invalidTypes = [null, undefined, "foo bar"];
  invalidTypes.forEach(function(invalidType) {
    it(`should throw when the provided date is ${invalidType}`, function() {
      expect(function() {
        new DateTime(invalidType);
      }).toThrow();
    });
  });

  it("should throw when the provided date is not in the past", function() {
    const tomorrow = createTestDateWithOffset(new Date(), 24);

    expect(function() {
      new DateTime(tomorrow);
    }).toThrow();
  });

  it("should return 'a few seconds ago' after creation", function() {
    const nowDateString = new Date().toLocaleString();
    const timeSince = new DateTime(nowDateString).getTimeSince();
    expect(timeSince).toEqual("a few seconds ago");
  });

  it("should return 'one hour ago' when date is 1hr ago", function() {
    const futureDateString = createTestDateWithOffset(
      new Date(), -1).toLocaleString();

    const timeSince = new DateTime(futureDateString).getTimeSince();
    expect(timeSince).toEqual("an hour ago");
  });

});
