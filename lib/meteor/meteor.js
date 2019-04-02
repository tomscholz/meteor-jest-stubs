const { Mongo } = require('./mongo');

const Meteor = {
  isServer: true,
  isClient: false,
  isTest: true,
  loginWithPassword: jest.fn(),
  loginWithFacebook: jest.fn(),

  __mocked_methods: {},
  methods: jest.fn((methods) => {
    let mocked_methods = {}
    Object.keys(methods).forEach(key =>
      mocked_methods[key] = jest.fn(methods[key])
        .mockName('Meteor.call("'+key+'")')
    )
    Meteor.__mocked_methods = {...Meteor.__mocked_methods, ...mocked_methods}
  }),
  call: jest.fn((...args) => {
    const name = args.shift()
    if(!Meteor.__mocked_methods[name]) {
      throw new Meteor.Error('Method '+name+' missing')
    }
    Meteor.__mocked_methods[name].call(Meteor, ...args)
  }),
  callPromise: jest.fn(),

  publish: jest.fn(),
  subscribe: jest.fn(),
  user: jest.fn(),
  users: new Mongo.Collection(),
  userId: jest.fn().mockReturnValue('f00bar'),
  startup: jest.fn(init => init),
  bindEnvironment: jest.fn(),
  wrapAsync: jest.fn(function(f) { return f; }),
  Error: jest.fn(Error),
};

module.exports = { Meteor };
