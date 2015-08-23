'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var wildcards = {
  info: (0, _debug2['default'])('amz:info'),
  error: (0, _debug2['default'])('amz:error')
};

exports['default'] = wildcards;
module.exports = exports['default'];