'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libBorderCanvas = require('./lib/BorderCanvas');

var _libBorderCanvas2 = _interopRequireDefault(_libBorderCanvas);

var _libWaves = require('./lib/Waves');

var _libWaves2 = _interopRequireDefault(_libWaves);

var w = new _libWaves2['default']('.waves'),
    borderCanvas = new _libBorderCanvas2['default']('border-canvas');

w.createEvents();
borderCanvas.draw();