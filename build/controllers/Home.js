'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _libDebug = require('../lib/debug');

var _libDebug2 = _interopRequireDefault(_libDebug);

var HomePage = (function () {
  function HomePage(server, path) {
    _classCallCheck(this, HomePage);

    this.server = server;
    this.template = 'home/index';
    this.path = path;
    this.setCopies();
  }

  _createClass(HomePage, [{
    key: 'setCopies',
    value: function setCopies() {
      this.copies = {
        // Top section
        //
        title: 'Amazcota',
        platform: 'Amazcota',
        slogan: 'Plataforma de adopción',
        facebookButton: 'Pre-registro',

        // Persuasion section
        //
        why1: '¡Porque adopatar está bien padre!',
        why2: '¡Porque adopatar es bonito!',
        hashtag: '#adopta',

        // Contribute section
        //
        contribute: 'Colabora',
        quote: 'No puedes comprar el amor, pero puedes adoptarlo.',
        quoteSource: 'www.petalatino.com'
      };
    }
  }, {
    key: 'dispatch',
    value: function dispatch() {
      var _this = this;

      this.server.get(this.path, function (req, res) {
        res.render(_this.template, _this.copies);
      });
    }
  }]);

  return HomePage;
})();

exports['default'] = HomePage;
module.exports = exports['default'];