import { getPressure, detectInputType } from './canvas/press.js'
import { Canvas } from './canvas/canvas.js';

import { Dock } from './canvas/dock.js';

//打印笔的压感 每一秒一次
/* setInterval(() => {
    console.log(getPressure(new PointerEvent('pen')));
}, 1000); */
/* window.addEventListener('pointermove',detectInputType); */
new Canvas()

//添加一个浮于canvas之上的div 名字为dock 居中置底 大小根据内容自动调整 有一个color picker
new Dock()