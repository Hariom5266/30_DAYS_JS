class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove() {
        if (!this.head) {
            return null;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        while (current.next && current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display();  // Should print: 1, 2, 3

list.remove();
list.display();  // Should print: 1, 2

list.remove();
list.display();  // Should print: 1

list.remove();
list.display();  // Should print nothing, as the list is now empty


class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items[this.items.length - 1];
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("After pushing 1, 2, 3:", stack.items); // Should print: [1, 2, 3]

console.log("Peek:", stack.peek()); // Should print: 3

console.log("Pop:", stack.pop()); // Should print: 3
console.log("After popping:", stack.items); // Should print: [1, 2]

console.log("Pop:", stack.pop()); // Should print: 2
console.log("After popping:", stack.items); // Should print: [1]

console.log("Pop:", stack.pop()); // Should print: 1
console.log("After popping:", stack.items); // Should print: []

console.log("Pop on empty stack:", stack.pop()); // Should print: null

console.log("Peek on empty stack:", stack.peek()); // Should print: null

function reverseString(str) {
    const stack = new Stack();
    for (let char of str) {
        stack.push(char);
    }
    let reversedStr = '';
    while (stack.peek() !== null) {
        reversedStr += stack.pop();
    }
    return reversedStr;
}

console.log(reverseString("Hariom Joshi")); // Should print: ihsoJ moiraH


class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items.shift();
    }

    front() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items[0];
    }
}

const printerQueue = new Queue();

function addPrintJob(job) {
    printerQueue.enqueue(job);
    console.log(`Added job: ${job}`);
}

function processPrintJobs() {
    while (printerQueue.front() !== null) {
        console.log(`Processing job: ${printerQueue.dequeue()}`);
    }
}

addPrintJob("Frontend Developer");
addPrintJob("Full Stack Developer");
addPrintJob("Computer Science Specialist in AI/ML and Data Scientist");

processPrintJobs();

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    display() {
        this.inOrderTraversal(this.root);
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(6);
binaryTree.insert(8);

binaryTree.display();  // Should print: 2, 3, 4, 5, 6, 7, 8

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    }

    bfs(startingNode) {
        let visited = new Set();
        let queue = [startingNode];

        while (queue.length > 0) {
            let currentNode = queue.shift();

            if (!visited.has(currentNode)) {
                console.log(currentNode);
                visited.add(currentNode);

                let neighbors = this.adjacencyList.get(currentNode);
                for (let neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor);
                    }
                }
            }
        }
    }

    shortestPath(startNode, endNode) {
        let visited = new Set();
        let queue = [[startNode]];

        while (queue.length > 0) {
            let path = queue.shift();
            let node = path[path.length - 1];

            if (node === endNode) {
                return path;
            }

            if (!visited.has(node)) {
                visited.add(node);

                let neighbors = this.adjacencyList.get(node);
                for (let neighbor of neighbors) {
                    let newPath = [...path, neighbor];
                    queue.push(newPath);
                }
            }
        }
        return null;
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

console.log("BFS from node A:");
graph.bfs('A'); // Output: A B C D

console.log("Shortest path from A to D:");
console.log(graph.shortestPath('A', 'D')); // Output: ['A', 'B', 'D'] or ['A', 'C', 'D']
