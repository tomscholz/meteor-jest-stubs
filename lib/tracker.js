const Tracker = jest.fn();

Tracker.prototype.autorun = jest.fn();
Tracker.prototype.nonreactive = jest.fn();

module.exports = {
    Tracker,
};
