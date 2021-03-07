console.clear();

class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(data) {
        this.queue.push(data);
    }
    dequeue() {
        this.queue.shift();
    }
    getFirstElement() {
        return this.queue[0];
    }
    getQueueSize() {
        return this.queue.length;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    insert(num) {
        if (this.root == null) {
            this.root = new Node(num);
        } else {
            this.insertRecursive(this.root, num);
        }
    }
    insertRecursive(parentNode, num) {
        if (num < parentNode.data) {
            if (parentNode.left == null) {
                parentNode.left = new Node(num);
            } else {
                this.insertRecursive(parentNode.left, num);
            }
        } else {
            if (parentNode.right == null) {
                parentNode.right = new Node(num);
            } else {
                this.insertRecursive(parentNode.right, num);
            }
        }
    }
    // <BFS>
    breadthFirstTraversal(node = this.root) {
        if(!node) return;
        let output = [];
        let queue = new Queue();
        queue.enqueue(node);
        while (queue.getQueueSize() != 0) {
            let current = queue.getFirstElement();
            output.push(current.data);
            if (current.left != null) queue.enqueue(current.left);
            if (current.right != null) queue.enqueue(current.right);
            queue.dequeue();
        }
        return output.join(" ");
    }
    // </BFS>
    // <DFS>
    preOrderTraversal(root = this.root, output = []) {
        // pre-order traversal -> Node - Left - Right
        if (root != null) {
            output.push(root.data);
            this.preOrderTraversal(root.left, output);
            this.preOrderTraversal(root.right, output);
        }
        return output.join(" ");
    }
    postOrderTraversal(root = this.root, output = []) {
        // post-order traversal -> left - Right - Node
        if (root != null) {
            this.postOrderTraversal(root.left, output);
            this.postOrderTraversal(root.right, output);
            output.push(root.data);
        }
        return output.join(" ");
    }
    inOrderTraversal(root = this.root, output = []) {
        // in-order traversal -> Left - Node - Right
        if (root != null) {
            this.inOrderTraversal(root.left, output);
            output.push(root.data);
            this.inOrderTraversal(root.right, output);
        }
        return output.join(" ");
    }
    // </DFS>
    getMinimumNodeValue(node = this.root) {
        while(node.left != null) {
            node = node.left;
        }
        return node;
    }
    delete(num, node = this.root) {
        if (!node) return null;
        if (num < node.data) {
            node.left = this.delete(num, node.left);
        }
        else if (num > node.data) {
            node.right = this.delete(num, node.right);
        }
        else if (node.left != null && node.right != null) {
            node.data = this.getMinimumNodeValue(node.right).data;
            node.right = this.delete(node.data, node.right);
        }
        else {
            node = node.left || node.right;
        }
        return node;
    }
}

let tree = new Tree();
tree.insert(14);
tree.insert(9);
tree.insert(11);
tree.insert(16);
tree.insert(15);
tree.insert(7);

console.log('BFS >', tree.breadthFirstTraversal());
console.log('PreOrder >', tree.preOrderTraversal());
console.log('InOrder >', tree.inOrderTraversal());
console.log('PostOrder >', tree.postOrderTraversal());

tree.delete(9);
console.log('InOrder after delete >', tree.inOrderTraversal());
