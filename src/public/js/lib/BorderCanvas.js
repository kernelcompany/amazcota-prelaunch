'use strict';


class BorderCanvas {

  constructor(id) {
    this._target = document.getElementById(id);
    this.context = this._target.getContext('2d');

  }

  draw(){
    this.context.fillStyle = '#FF0000';
    this.context.fillRect(0, 0, 150, 75);
  }
}

export default BorderCanvas;
