// 传入一个参数，如果是数字，就自增1并返回，如果不是数字，直接返回本身
function add(num) {
    if (typeof num == "number") {
        num++;
        return num;
    }
    return num;
}
document.write(add("3") + "");
document.write(add(3));
// console.log("hello")
//# sourceMappingURL=14.%E6%B3%9B%E5%9E%8B.js.map