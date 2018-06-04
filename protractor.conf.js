//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    'tests/e2e/**/*spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
