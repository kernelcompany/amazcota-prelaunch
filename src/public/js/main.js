import BorderCanvas from './lib/BorderCanvas';
import Waves from './lib/Waves';

let w = new Waves('.waves'),
    borderCanvas = new BorderCanvas('border-canvas');


w.createEvents();
borderCanvas.draw();
