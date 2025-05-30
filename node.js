class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

// Connect the nodes
node1.next = node2;
node2.next = node3;

// Print the nodes
console.log('Node 1:', node1);
console.log('Node 2:', node2);
console.log('Node 3:', node3);


