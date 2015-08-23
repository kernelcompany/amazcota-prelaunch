(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./lib/BorderCanvas":2,"./lib/Waves":3}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcmNoc2VyY2gvUHJvamVjdHMvS2VybmVsL2FtYXpjb3RhL2FtYXpjb3RhLXdlYi1wcmVsdW5jaC9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9zZXJjaHNlcmNoL1Byb2plY3RzL0tlcm5lbC9hbWF6Y290YS9hbWF6Y290YS13ZWItcHJlbHVuY2gvYnVpbGQvcHVibGljL2pzL2Zha2VfMmJmMTdmMjQuanMiLCIvaG9tZS9zZXJjaHNlcmNoL1Byb2plY3RzL0tlcm5lbC9hbWF6Y290YS9hbWF6Y290YS13ZWItcHJlbHVuY2gvYnVpbGQvcHVibGljL2pzL2xpYi9Cb3JkZXJDYW52YXMuanMiLCIvaG9tZS9zZXJjaHNlcmNoL1Byb2plY3RzL0tlcm5lbC9hbWF6Y290YS9hbWF6Y290YS13ZWItcHJlbHVuY2gvYnVpbGQvcHVibGljL2pzL2xpYi9XYXZlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfbGliQm9yZGVyQ2FudmFzID0gcmVxdWlyZSgnLi9saWIvQm9yZGVyQ2FudmFzJyk7XG5cbnZhciBfbGliQm9yZGVyQ2FudmFzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpYkJvcmRlckNhbnZhcyk7XG5cbnZhciBfbGliV2F2ZXMgPSByZXF1aXJlKCcuL2xpYi9XYXZlcycpO1xuXG52YXIgX2xpYldhdmVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpYldhdmVzKTtcblxudmFyIHcgPSBuZXcgX2xpYldhdmVzMlsnZGVmYXVsdCddKCcud2F2ZXMnKSxcbiAgICBib3JkZXJDYW52YXMgPSBuZXcgX2xpYkJvcmRlckNhbnZhczJbJ2RlZmF1bHQnXSgnYm9yZGVyLWNhbnZhcycpO1xuXG53LmNyZWF0ZUV2ZW50cygpO1xuYm9yZGVyQ2FudmFzLmRyYXcoKTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIEJvcmRlckNhbnZhcyA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEJvcmRlckNhbnZhcyhpZCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCb3JkZXJDYW52YXMpO1xuXG4gICAgdGhpcy5fdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuX3RhcmdldC5nZXRDb250ZXh0KCcyZCcpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEJvcmRlckNhbnZhcywgW3tcbiAgICBrZXk6ICdkcmF3JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZHJhdygpIHtcbiAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnI0ZGMDAwMCc7XG4gICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgMTUwLCA3NSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEJvcmRlckNhbnZhcztcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEJvcmRlckNhbnZhcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgV2F2ZXMgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBXYXZlcyh0YXJnZXQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2F2ZXMpO1xuXG4gICAgdGhpcy4kYnV0dG9ucyA9ICQodGFyZ2V0KTtcblxuICAgIHZhciB3YXZlc0NpcmxlID0gJzxkaXYgY2xhc3M9XCJ3YXZlc19fd3JhcFwiPjxzcGFuIGNsYXNzPVwid2F2ZXNfX2NpcmNsZVwiPjwvc3Bhbj48L2Rpdj4nLFxuICAgICAgICBwcmVXYXZlcyA9IGZ1bmN0aW9uIHByZVdhdmVzKCkge1xuICAgICAgJCh0aGlzKS5hcHBlbmQod2F2ZXNDaXJsZSk7XG4gICAgfTtcblxuICAgIC8vIEFwcGVuZCBodG1sIGZvciBlYWNoXG4gICAgLy9cbiAgICB0aGlzLiRidXR0b25zLmVhY2gocHJlV2F2ZXMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFdhdmVzLCBbe1xuICAgIGtleTogJ2NyZWF0ZUV2ZW50cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50cygpIHtcbiAgICAgIC8vIEFkZCBmeFxuICAgICAgLy9cbiAgICAgIHRoaXMuJGJ1dHRvbnMub24oJ2NsaWNrJywgJy53YXZlc19fd3JhcCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAkb2Zmc2V0ID0gJHRoaXMucGFyZW50KCkub2Zmc2V0KCksXG4gICAgICAgICAgICAkY2lyY2xlID0gJHRoaXMuZmluZCgnLndhdmVzX19jaXJjbGUnKSxcbiAgICAgICAgICAgIHggPSBlLnBhZ2VYIC0gJG9mZnNldC5sZWZ0LFxuICAgICAgICAgICAgeSA9IGUucGFnZVkgLSAkb2Zmc2V0LnRvcDtcbiAgICAgICAgJGNpcmNsZS5jc3Moe1xuICAgICAgICAgIHRvcDogeSArICdweCcsXG4gICAgICAgICAgbGVmdDogeCArICdweCdcbiAgICAgICAgfSk7XG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZW1vdmUgZnhcbiAgICAgIC8vXG4gICAgICB0aGlzLiRidXR0b25zLm9uKCdhbmltYXRpb25lbmQgd2Via2l0QW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQgTVNBbmltYXRpb25FbmQnLCAnLndhdmVzX193cmFwJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBXYXZlcztcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFdhdmVzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107Il19
