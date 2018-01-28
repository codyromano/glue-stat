//= require moment

function standardizeDate(input) {
  // Convert date object to
  if (typeof input === 'object' && input instanceof Date) {
    return new Date(input).toLocaleString();
  }
  return input;
}

class DateTime {
  constructor(dateTimeString) {
    const momentDate = moment(dateTimeString);
    const momentNow = moment(new Date());

    if (typeof dateTimeString === 'undefined' || !momentDate.isValid()) {
      throw new Error('Invalid dateTimeString');
    }
    if (momentDate.isAfter(momentNow)) {
      throw new Error('Date cannot be in the future');
    }
    this.date = new Date(dateTimeString);
  }
  getTimeSince() {
    return moment(this.date).fromNow();
  }
}
