var NodeX = /** @class */ (function () {
    function NodeX(num) {
        this.num = num;
    }
    return NodeX;
}());
var node = new NodeX(0);
node.next = new NodeX(1);
node.next.next = new NodeX(2);
// delete
node.next = node.next.next;
// insert
var temp = node.next;
node.next = new NodeX(4);
node.next.next = temp;
while (node) {
    console.log(node.num);
    // 让节点向后移
    node = node.next;
}
//# sourceMappingURL=1.linkList.js.map