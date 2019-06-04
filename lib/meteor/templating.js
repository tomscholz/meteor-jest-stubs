const Template = jest.fn();

Template.prototype.registerHelper = jest.fn();

module.exports = {
    Template,
};
