import { Stack } from "./misc.js";
import { Pen } from "./pen.js";
export class Canvas {
    static _instance;
    pen;
    ctx;
    frep;
    restore;
    constructor() {
        //单例模式
        if (Canvas._instance) {
            throw new Error("Error: Instantiation failed: Use Canvas.getInstance() instead of new.");
        }
        Canvas._instance = this;
        this.frep = 120;
        this.pen = Pen.getInstance();
        this.restore = new Stack();
        //创建并绑定canvas
        let canvas = document.createElement('canvas');
        canvas.id = "canvas";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.setAttribute('willReadFrequently', 'true');
        document.body.appendChild(canvas);
        //创建并绑定context
        this.ctx = canvas.getContext('2d');
        //绑定事件
        canvas.addEventListener('pointerdown', (event) => {
            console.log(event.pointerId);
        });
    }
    draw() {
        let last = this.pen.positionLast;
        if (last.x == 0 && last.y == 0) {
            return;
        }
        let cur = this.pen.positionCurrent;
        /*         let points = new Queue();
                for (let i = 0; i < this.frep; i++) {
                    points.push(lerp(cur, last, i / this.frep));
                }
        
                while (points.size() > 1) {
                    last = points.pop();
                    cur = points.peek() */
        this.ctx.beginPath();
        this.ctx.moveTo(last.x, last.y);
        this.ctx.lineTo(cur.x, cur.y);
        this.ctx.lineCap = 'round';
        this.ctx.lineWidth = this.pen.width;
        this.ctx.strokeStyle = this.pen.color;
        this.ctx.stroke();
        this.ctx.closePath();
        /*         } */
    }
    save() {
        this.restore.push(this.ctx.getImageData(0, 0, window.innerWidth, window.innerHeight));
    }
    get restoreStack() {
        return this.restore;
    }
    _restore() {
        console.log(this.restore.size());
        this.ctx.putImageData(this.restore.pop(), 0, 0);
    }
    clear() {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
    static getInstance() {
        if (Canvas._instance == null) {
            Canvas._instance = new Canvas();
        }
        return Canvas._instance;
    }
}
