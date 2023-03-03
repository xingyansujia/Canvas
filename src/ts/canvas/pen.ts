import { Canvas } from "./canvas.js";
import { Color } from "./misc.js";



export class Pen {
    private _color: Color;
    private _width: number;
    static _instance: any;
    private position: { current: { x: number, y: number }, last: { x: number, y: number } };
    private stauts: { isDrawing: boolean, isEraser: boolean }
    constructor() {
        //单例模式
        if (Pen._instance) {
            throw new Error("Error: Instantiation failed: Use Pen.getInstance() instead of new.");
        }
        Pen._instance = this;
        this._color = Color['Blue'];
        this._width = 1;

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
        }

        this.ListenerSetup();
    }

    private ListenerSetup() {
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
            } else {
                this.width = 1;
            }
            if (this.isDrawing) { Canvas.getInstance().draw(); }
        });
    }

    //getInstance
    static getInstance(): Pen {
        if (Pen._instance == null) {
            Pen._instance = new Pen();
        }
        return Pen._instance;
    }

    set color(color: Color) {
        this._color = color;
    }
    get color(): Color {
        return this._color;
    }

    set width(width: number) {
        this._width = width;
    }

    get width(): number {
        return this._width;
    }

    get positionCurrent(): { x: number, y: number } {
        return this.position.current;
    }

    get positionLast(): { x: number, y: number } {
        return this.position.last;
    }

    get isDrawing(): boolean {
        return this.stauts.isDrawing;
    }
    
}