'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var BorderCanvas = (function () {
  function BorderCanvas(id) {
    _classCallCheck(this, BorderCanvas);

    this._target = document.getElementById(id);
    this.context = this._target.getContext('2d');
  }

  _createClass(BorderCanvas, [{
    key: 'draw',
    value: function draw() {
      this.context.fillStyle = '#FF0000';
      this.context.fillRect(0, 0, 150, 75);
    }
  }]);

  return BorderCanvas;
})();

exports['default'] = BorderCanvas;
module.exports = exports['default'];