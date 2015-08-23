'use strict';

class Waves {
  constructor(target) {

    this.$buttons = $(target);

    let wavesCirle = '<div class="waves__wrap"><span class="waves__circle"></span></div>',
      preWaves = function() {
        $(this).append(wavesCirle);
      };

    // Append html for each
    //
    this.$buttons.each(preWaves);
  }

  createEvents() {
    // Add fx
    //
    this.$buttons.on('click', '.waves__wrap', function(e) {
      let $this = $(this),
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
    this.$buttons.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.waves__wrap', function() {
      $(this).removeClass('active');
    });
  }
}


export default Waves;
