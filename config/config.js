const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
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
