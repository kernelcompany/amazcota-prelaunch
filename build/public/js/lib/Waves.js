'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Waves = (function () {
  function Waves(target) {
    _classCallCheck(this, Waves);

    this.$buttons = $(target);

    var wavesCirle = '<div class="waves__wrap"><span class="waves__circle"></span></div>',
        preWaves = function preWaves() {
      $(this).append(wavesCirle);
    };

    // Append html for each
    //
    this.$buttons.each(preWaves);
  }

  _createClass(Waves, [{
    key: 'createEvents',
    value: function createEvents() {
      // Add fx
      //
      this.$buttons.on('click', '.waves__wrap', function (e) {
        var $this = $(this),
            $offset = $this.parent().offset(),
            $circle = $this.find('.waves__circle'),
            x = e.pageX - $offset.left,
            y = e.pageY - $offset.top;
        $circle.css({
          top: y + 'px',
          left: x + 'px'
        });
        $this.addClass('active');
      });

      // Remove fx
      //
      this.$buttons.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.waves__wrap', function () {
        $(this).removeClass('active');
      });
    }
  }]);

  return Waves;
})();

exports['default'] = Waves;
module.exports = exports['default'];