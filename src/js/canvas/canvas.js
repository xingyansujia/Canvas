import { lerp, Stack } from "./misc.js";
import { Pen } from "./pen.js";
export class Canvas {
    static _instance;
    pen;
    ctx;
    frep;
    constructor() {
        //单例模式
        if (Canvas._instance) {
            throw new Error("Error: Instantiation failed: Use Canvas.getInstance() instead of new.");
        }
        Canvas._instance = this;
        this.frep = 120;
        this.pen = Pen.getInstance();
        //创建并绑定canvas
        let canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
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
        let points = new Stack();
        for (let i = 0; i < this.frep; i++) {
            points.push(lerp(cur, last, i / this.frep));
        }
        while (points.size() > 1) {
            last = points.pop();
            cur = points.peek();
            this.ctx.beginPath();
            this.ctx.moveTo(last.x, last.y);
            this.ctx.lineTo(cur.x, cur.y);
            this.ctx.lineWidth = this.pen.width;
            this.ctx.strokeStyle = this.pen.color;
            this.ctx.stroke();
        }
    }
    static getInstance() {
        if (Canvas._instance == null) {
            Canvas._instance = new Canvas();
        }
        return Canvas._instance;
    }
}
