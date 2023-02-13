class NodeX{
    num: number;
    next: NodeX;

    constructor(num){
        this.num= num;
    }
}

let node = new NodeX(0)
node.next = new NodeX(1)
node.next.next = new NodeX(2)

// delete
node.next = node.next.next

// insert
let temp = node.next
node.next = new NodeX(4)
node.next.next = temp

while (node){
    console.log(node.num)
    // 让节点向后移
    node = node.next;
}

