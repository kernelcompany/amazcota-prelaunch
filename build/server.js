'use strict';

/*!
 *
 * Server file
 */

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _libDebug = require('./lib/debug');

var _libDebug2 = _interopRequireDefault(_libDebug);

var _controllersHome = require('./controllers/Home');

var _controllersHome2 = _interopRequireDefault(_controllersHome);

var _swig = require('swig');

var _swig2 = _interopRequireDefault(_swig);

var server = (0, _express2['default'])();

// Templates
//
server.engine('html', _swig2['default'].renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/views');

// Public
//
server.use(_express2['default']['static'](__dirname + '/public'));

var h = new _controllersHome2['default'](server, '/');
h.dispatch();

server.listen(3000, function () {
  _libDebug2['default'].info('Server is listening at: %s', 3000);
});