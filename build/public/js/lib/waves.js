'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var waves = function waves() {
  var $buttons = $('.waves'),
      wavesCirle = '<div class="waves__wrap"><span class="waves__circle"></span></div>',
      preWaves = function preWaves() {
    $(this).append(wavesCirle);
  };

  // Append html for each
  //
  $buttons.each(preWaves);

  // Add fx
  //
  $buttons.on('click', '.waves__wrap', function (e) {
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
  $buttons.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.waves__wrap', function () {
    $(this).removeClass('active');
  });
};

exports['default'] = waves;
module.exports = exports['default'];