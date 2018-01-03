'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _participanteController = require('../controllers/participanteController');

var _participanteController2 = _interopRequireDefault(_participanteController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route('/').get(_participanteController2.default.list).post(_participanteController2.default.create);

router.route('/:participanteId').get(_participanteController2.default.get).put(_participanteController2.default.update).delete(_participanteController2.default.remove);

exports.default = router;
//# sourceMappingURL=participanteRoute.js.map
