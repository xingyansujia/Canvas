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
