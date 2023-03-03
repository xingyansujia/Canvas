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
class Stack {
    _items;
    constructor() {
        this._items = [];
    }
    push(item) {
        this._items.push(item);
    }
    pop() {
        return this._items.pop();
    }
    peek() {
        return this._items[this._items.length - 1];
    }
    isEmpty() {
        return this._items.length == 0;
    }
    clear() {
        this._items = [];
    }
    size() {
        return this._items.length;
    }
    print() {
        console.log(this._items.toString());
    }
}
//函数 输入 坐标(x, y) 输出 线性插值后的 坐标(x, y)
//输入: 两个点的坐标(x1, y1) (x2, y2) 以及插值的位置t
//输出: 插值后的坐标(x, y)
function lerp(cur, last, t) {
    let x = cur.x + (last.x - cur.x) * t;
    let y = cur.y + (last.y - cur.y) * t;
    return { x, y };
}
