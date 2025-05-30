// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
// }

// const node1 = new Node(1);
// const node2 = new Node(2);
// const node3 = new Node(3);

// // Connect the nodes
// node1.next = node2;
// node2.next = node3;

// const list = new LinkedList();
// list.head = node1;
// list.tail = node3;

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    toString() {
        let temp = this.head;
        let result = "";
        while (temp !== null) {
            result += temp.value;
            if (temp.next !== null) {
                result += " -> ";
            }
            temp = temp.next;
        }
        return result;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    insert(index, value) {
        const newNode = new Node(value);
        let tempNode = this.head
        if (index < 0 || index > this.length) { return false; }
        else if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            for (let i = 0; i < index - 1; i++) {
                tempNode = tempNode.next;
            }
            newNode.next = tempNode.next; // Connect new node to the next node
            tempNode.next = newNode; // Connect the previous node to the new node
        }
        this.length++;
        return true;
    }
}

let list = new LinkedList(
);

list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.append(60);
list.append(70);
list.append(80);
list.append(90);
list.prepend(100);
list.insert(0, 1000);
console.log(list.toString());
