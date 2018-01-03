'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'backend'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/k121'
  },

  test: {
    root: rootPath,
    app: {
      name: 'backend'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/k121'
  },

  production: {
    root: rootPath,
    app: {
      name: 'backend'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/k121'
  }
};

module.exports = config[env];
//# sourceMappingURL=config.js.map
