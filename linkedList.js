class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    increaseSize() {
        this.size = this.size + 1;
    }
    decreaseSize() {
        this.size = this.size - 1;
    }
    insertNode(data) {
        if (!this.head) {
            this.head = new Node(data);
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = new Node(data);
        }
        this.increaseSize();
    }
    insertNodeAt(index, data) {
        if (index <= 0) {
            console.log('Inserting new node at the beginning');
            let newNode = new Node(data);
            let currentHead = this.head;
            newNode.next = currentHead;
            this.head = newNode;
        }
        else if (index >= this.size) {
            console.log('Inserting new node at the end');
            this.insertNode(data);
        }
        else {
            let currentIndex = 1;
            let previousNode = this.head;
            let nextNode = this.head.next;
            while(currentIndex < index) {
                previousNode = nextNode;
                nextNode = nextNode.next;
                ++currentIndex;
            }
            let newNode = new Node(data);
            previousNode.next = newNode;
            newNode.next = nextNode;
        }
        this.increaseSize();
    }
    _removeAtBeginning() {
        if(this.size == 1) {
            delete this.head;
        }
        else {
            this.head = this.head.next;
        }
        this.decreaseSize();
    }
    _removeAtEnd() {
        if (this.size == 1) {
            this._removeAtBeginning();
        }
        else {
            let previousNode = this.head;
            let nextNode = this.head.next;
            while(nextNode.next) {
                previousNode = previousNode.next;
                nextNode = nextNode.next;
            }
            previousNode.next = null;
        }
        this.decreaseSize();
    }
    removeAt(index) {
        if (index <= 0) {
            console.log('Removing node from beginning');
            this._removeAtBeginning();
        }
        else if (index >= this.size) {
            console.log('Removing node from end');
            this._removeAtEnd();
        }
        else {
            let currentIndex = 1;
            let previousNode = this.head;
            let nextNode = this.head.next;
            while(currentIndex < index) {
                previousNode = previousNode.next;
                nextNode = nextNode.next;
                ++currentIndex;
            }
            previousNode.next = nextNode.next;
        }
        this.decreaseSize();
    }
    print() {
        let current = this.head;
        let output = [];
        while(current) {
            output.push(current.data);
            current = current.next;
        }
        console.log('LinkedList > ', output.join(', '));
    }
}

let list = new LinkedList();
list.insertNode(1);
list.insertNode(2);
list.insertNode(3);
list.insertNode(4);

list.insertNodeAt(0, 0);
list.insertNodeAt(2, 2.1);
list.insertNodeAt(10, 10);

console.log('Before removing nodes');
list.print();

console.log('------------------------------------');

list.removeAt(-1);
console.log('After removing node');
list.print();

list.removeAt(10);
console.log('After removing node');
list.print();

list.removeAt(2);
console.log('After removing node');
list.print();
