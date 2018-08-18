module.exports = {
  // this controls whether to abort the test execution when an assertion failed and skip the rest
  // it's being used in waitFor commands and expect assertions
  abortOnAssertionFailure: true,

  // this will overwrite the default polling interval (currently 500ms) for waitFor commands
  // and expect assertions that use retry
  waitForConditionPollInterval: 300,

  // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
  // expect assertions
  waitForConditionTimeout: 10000,

  // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
  // expect assertions
  waitForElementTimeout: 10000,

  // this will cause waitFor commands on elements to throw an error if multiple
  // elements are found using the given locate strategy and selector
  throwOnMultipleElementsReturned: true,

  // controls the timeout time for async hooks. Expects the done() callback to be invoked within this time
  // or an error is thrown
  asyncHookTimeout: 10000,
  //
  //prod: 'https://www.homeimprovementpages.com.au',
  //dev: 'https://use-150-admin-hip-new.k8s.hipages.com.au',
  //bunningsStaging: 'https://master-socium.k8s.hipages.com.au/bunnings/install',
  //
  'default': {
    myGlobal: function () {
      return 'I\'m a method'
    }
  },

  before: function (cb) {
    cb()
  },

  beforeEach: function (browser, cb) {
    cb()
  },

  after: function (cb) {
    cb()
  },

  afterEach: function (browser, cb) {
    cb()
  },

  reporter: function (results, cb) {
    // console.log(results);
    cb()
  }
}
