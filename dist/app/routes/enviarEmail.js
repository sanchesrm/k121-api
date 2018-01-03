'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _enviarEmailController = require('../controllers/enviarEmailController');

var _enviarEmailController2 = _interopRequireDefault(_enviarEmailController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route('/').get(_enviarEmailController2.default.sendEmail);

exports.default = router;
//# sourceMappingURL=enviarEmail.js.map
