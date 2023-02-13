//枚举 自己定义一个属于自己的类型
/*
    npm install -D ts-node 安装到开发环境。通常用于安装不依赖也可以正常运行的模块
    例如 这里的 ts-node 模块，我安装他只是为了在终端可以通过命令运行 ts 文件
    ts-node 04.枚举
 */
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
    color[color["yellow"] = 2] = "yellow";
    color[color["green"] = 3] = "green";
})(color || (color = {}));
var c = color.green;
console.log(c);
//# sourceMappingURL=04.%E6%9E%9A%E4%B8%BE.js.map