//枚举 自己定义一个属于自己的类型
/*
    npm install -D ts-node 安装到开发环境。通常用于安装不依赖也可以正常运行的模块
    例如 这里的 ts-node 模块，我安装他只是为了在终端可以通过命令运行 ts 文件
    ts-node 04.枚举
 */
enum color{
    red,
    blue,
    yellow,
    green
}

let c :color = color.green

console.log(c)