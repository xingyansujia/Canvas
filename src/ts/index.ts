import { getPressure, detectInputType } from './canvas/press.js'
import { Pen } from './canvas/pen.js';
import { Canvas } from './canvas/canvas.js';

//打印笔的压感 每一秒一次
/* setInterval(() => {
    console.log(getPressure(new PointerEvent('pen')));
}, 1000); */
/* window.addEventListener('pointermove',detectInputType); */
new Canvas()