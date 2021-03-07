console.clear();

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }
    addNode(node) {
        if (this.head == null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

        this.incrementCount();
    }
    removeNode(node) {
        if (this.count == 1 && this.head.data == node.data) {
            delete this.head;
        }
        if (this.count > 0 && this.head.data == node.data) {
            let next = this.head.next;
            delete this.head;
            this.head = next;
        } else {
            let prev = this.head;
            let next = prev.next;
            while (prev) {
                if (prev.data == node.data) {
                    prev.data = next?.data;
                    prev.next = next?.next;
                    this.decrementCount();
                    break;
                }
                prev = next;
                next = next.next;
            }
        }
    }
    print() {
        let current = this.head;
        while (current) {
            if (current?.data) {
                console.log(current.data);
            }
            current = current.next;
        }
    }
    printReverse(currentNode=this.head) {
        if (currentNode == undefined)
            return;
        this.printReverse(currentNode.next);
        if (currentNode?.data) {
            console.log(currentNode.data);
        }
    }
    incrementCount() {
        this.count += 1;
    }
    decrementCount() {
        this.count -= 1;
    }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);

let linkedList = new LinkedList();

linkedList.addNode(node1);
linkedList.addNode(node2);
linkedList.addNode(node3);
linkedList.addNode(node4);
linkedList.addNode(node5);
linkedList.addNode(node6);

linkedList.print();

console.log('\n');

linkedList.printReverse();

console.log('\n');

linkedList.removeNode(node3);
linkedList.removeNode(node6);
linkedList.removeNode(node1);

linkedList.print();
