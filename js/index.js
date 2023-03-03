import { Pen } from './canvas/pen.js';
import { Canvas } from './canvas/canvas.js';
//打印笔的压感 每一秒一次
/* setInterval(() => {
    console.log(getPressure(new PointerEvent('pen')));
}, 1000); */
/* window.addEventListener('pointermove',detectInputType); */
new Canvas();
//添加一个浮于canvas之上的div 名字为dock 居中置底 大小根据内容自动调整 有一个color picker
function createColorPicker() {
    const colorPicker = document.createElement('div');
    colorPicker.style.position = 'absolute';
    colorPicker.style.bottom = '0';
    colorPicker.style.left = '50%';
    colorPicker.style.transform = 'translateX(-50%)';
    colorPicker.style.padding = '10px';
    colorPicker.style.borderRadius = '5px';
    colorPicker.style.backgroundColor = 'rgba(0,0,0,0.5)';
    colorPicker.style.color = 'white';
    colorPicker.style.zIndex = '100';
    colorPicker.style.display = 'flex';
    colorPicker.style.alignItems = 'center';
    colorPicker.style.justifyContent = 'center';
    colorPicker.style.flexDirection = 'column';
    colorPicker.innerHTML = `
        <input type="color" id="color-picker" value="#000000">
        <input type="range" id="width-picker" min="1" max="50" value="1">
    `;
    document.body.appendChild(colorPicker);
    const colorInput = document.getElementById('color-picker');
    const widthInput = document.getElementById('width-picker');
    colorInput.addEventListener('change', (event) => {
        Pen.getInstance().color = colorInput.value;
    });
    widthInput.addEventListener('change', (event) => {
        Pen.getInstance().width = parseInt(widthInput.value);
    });
}
createColorPicker();
