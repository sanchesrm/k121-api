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
      name: 'k121-api-sanchesrm'
    },
    port: process.env.PORT || 3000,
    user: 'sanchesrm'
    db: 'heroku_xb7fdxr4'
  }
};

module.exports = config[env];
