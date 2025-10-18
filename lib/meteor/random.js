const Random = {
  id: jest.fn(() => Math.random()),
  secret: jest.fn(() => Math.random()),
};

module.exports = { Random };