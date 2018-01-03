'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _realizarSorteioController = require('../controllers/realizarSorteioController');

var _realizarSorteioController2 = _interopRequireDefault(_realizarSorteioController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route('/').get(_realizarSorteioController2.default.sortear);

exports.default = router;
//# sourceMappingURL=sorteio.js.map
