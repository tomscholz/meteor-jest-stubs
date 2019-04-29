const ReactiveVar = jest.fn();
ReactiveVar.prototype.get = jest.fn();
ReactiveVar.prototype.set = jest.fn();

module.exports = {
    ReactiveVar,
};
