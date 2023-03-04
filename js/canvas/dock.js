//重构dock
export class Dock {
    _colorInput;
    _widthInput;
    _clearButton;
    _restoreButton;
    _dock;
    static _instance;
    constructor() {
        //单例模式
        if (Dock._instance) {
            throw new Error("Error: Instantiation failed: Use Dock.getInstance() instead of new.");
        }
        Dock._instance = this;
        this._dock = document.createElement('div');
        this._dock.className = 'dock';
        this._dock.innerHTML = `
            <div class="column">      
            <input type="color" id="color-picker" value="#000000"/>
            <input type="range" id="width-picker" min="1" max="50" value="1"/>
            </div>
            <buttom id="clear">clear</buttom>
            <buttom id="restore">restore</buttom>
        `;
        document.body.appendChild(this._dock);
        this._colorInput = document.getElementById('color-picker');
        this._widthInput = document.getElementById('width-picker');
        this._clearButton = document.getElementById('clear');
        this._restoreButton = document.getElementById('restore');
    }
    get colorInput() {
        return this._colorInput;
    }
    get widthInput() {
        return this._widthInput;
    }
    get clearButton() {
        return this._clearButton;
    }
    get restoreButton() {
        return this._restoreButton;
    }
    get dock() {
        return this._dock;
    }
    static getInstance() {
        if (!Dock._instance) {
            Dock._instance = new Dock();
        }
        return Dock._instance;
    }
}
