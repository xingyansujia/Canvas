//枚举 color 用 "rgba()" 表示
export var Color;
(function (Color) {
    Color["Black"] = "rgba(0, 0, 0, 1)";
    Color["White"] = "rgba(255, 255, 255, 1)";
    Color["Red"] = "rgba(255, 0, 0, 1)";
    Color["Green"] = "rgba(0, 255, 0, 1)";
    Color["Blue"] = "rgba(0, 0, 255, 1)";
    Color["Yellow"] = "rgba(255, 255, 0, 1)";
    Color["Cyan"] = "rgba(0, 255, 255, 1)";
    Color["Magenta"] = "rgba(255, 0, 255, 1)";
    Color["Transparent"] = "rgba(0, 0, 0, 0)";
})(Color || (Color = {}));
export class Stack {
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
export function lerp(cur, last, t) {
    let x = cur.x + (last.x - cur.x) * t;
    let y = cur.y + (last.y - cur.y) * t;
    return { x, y };
}
