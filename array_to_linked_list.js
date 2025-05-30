// Node class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// LinkedList class
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to convert array to linked list
    fromArray(arr) {
        if (arr.length === 0) return;

        this.head = new Node(arr[0]);
        let current = this.head;

        for (let i = 1; i < arr.length; i++) {
            current.next = new Node(arr[i]);
            current = current.next;
        }
    }

    // Optional: Print the list as an array
    toArray() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
}

// Example usage:
const list = new LinkedList();
list.fromArray([10, 20, 30, 40]);

console.log(list); // [10, 20, 30, 40]
