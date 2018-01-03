'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _participanteRoute = require('./participanteRoute');

var _participanteRoute2 = _interopRequireDefault(_participanteRoute);

var _sorteio = require('./sorteio');

var _sorteio2 = _interopRequireDefault(_sorteio);

var _enviarEmail = require('./enviarEmail');

var _enviarEmail2 = _interopRequireDefault(_enviarEmail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line new-cap

router.use('/enviarEmail', _enviarEmail2.default);
router.use('/participante', _participanteRoute2.default);
router.use('/realizarSorteio', _sorteio2.default);

exports.default = router;
//# sourceMappingURL=index.route.js.map
