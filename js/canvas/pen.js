import { Canvas } from "./canvas.js";
import { Color } from "./misc.js";
export class Pen {
    _color;
    _width;
    static _instance;
    position;
    stauts;
    constructor() {
        //单例模式
        if (Pen._instance) {
            throw new Error("Error: Instantiation failed: Use Pen.getInstance() instead of new.");
        }
        Pen._instance = this;
        this._color = Color['Black'];
        this._width = 2;
        this.position = {
            current: {
                x: 0,
                y: 0
            },
            last: {
                x: 0,
                y: 0
            }
        };
        this.stauts = {
            isDrawing: false,
            isEraser: false
        };
        this.ListenerSetup();
    }
    ListenerSetup() {
        window.addEventListener('pointerdown', (event) => {
            this.stauts.isDrawing = true;
        });
        window.addEventListener('pointerup', (event) => {
            this.stauts.isDrawing = false;
        });
        window.addEventListener('pointerover', (event) => {
            this.stauts.isDrawing = false;
        });
        window.addEventListener('pointerleave', (event) => {
            this.stauts.isDrawing = false;
        });
        window.addEventListener('pointerout', (event) => {
            this.stauts.isDrawing = false;
        });
        window.addEventListener('pointermove', (event) => {
            this.position.last.x = this.position.current.x;
            this.position.last.y = this.position.current.y;
            this.position.current.x = event.clientX;
            this.position.current.y = event.clientY;
            if (event.pointerType == 'pen') {
                this.width = 2 + (event.pressure - 0.5) * 2;
            }
            if (this.isDrawing) {
                Canvas.getInstance().draw();
            }
        });
    }
    //getInstance
    static getInstance() {
        if (Pen._instance == null) {
            Pen._instance = new Pen();
        }
        return Pen._instance;
    }
    set color(color) {
        this._color = color;
    }
    get color() {
        return this._color;
    }
    set width(width) {
        this._width = width;
    }
    get width() {
        return this._width;
    }
    get positionCurrent() {
        return this.position.current;
    }
    get positionLast() {
        return this.position.last;
    }
    get isDrawing() {
        return this.stauts.isDrawing;
    }
}
