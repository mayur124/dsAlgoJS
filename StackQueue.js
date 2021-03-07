class Stack {
    constructor() {
        this.stack = [];
    }
    push(number) {
        this.stack.unshift(number);
    }
    pop() {
        return this.stack.shift();
    }
    print() {
        this.stack.forEach(n => console.log(n));
    }
    getSize() {
        return this.stack.length;
    }
}

class Queue {
    constructor () {
        this.queue = [];
    }
    enqueue(number) {
        this.queue.push(number);
    }
    dequeue() {
        return this.queue.shift();
    }
    print() {
        this.queue.forEach(q => console.log(q));
    }
}

let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(6);

console.log('\nBefore pop');

s.print();

console.log('\nPopped out numbers');

console.log(s.pop());
console.log(s.pop());

console.log('\nAfter pop');

s.print();

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);

console.log('Queue before dequeue > ');

q.print();

console.log('Dequeue > ');

console.log(q.dequeue());
console.log(q.dequeue());

console.log('Queue after dequeue > ');

q.print();
