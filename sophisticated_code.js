/* filename: sophisticated_code.js */

/* This code is a custom implementation of a linked list data structure,
   with various methods for manipulating and traversing the list */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  push(data) {
    const newNode = new Node(data);
    
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    let current = this.head;
    let previous = null;

    while (current.next !== null) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    this.tail = previous;
    this.length--;

    return current.data;
  }

  insertAtIndex(data, index) {
    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else if (index > 0 && index < this.length) {
      let current = this.head;
      let previous = null;

      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }

      previous.next = newNode;
      newNode.next = current;
    } else if (index === this.length) {
      this.push(data);
    } else {
      throw new Error("Invalid index.");
    }

    this.length++;
  }

  removeAtIndex(index) {
    if (index === 0) {
      const removedNode = this.head;
      this.head = this.head.next;
      this.length--;
      return removedNode.data;
    } else if (index > 0 && index < this.length - 1) {
      let current = this.head;
      let previous = null;

      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
      this.length--;

      return current.data;
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      throw new Error("Invalid index.");
    }
  }

  search(data) {
    let current = this.head;

    while (current !== null) {
      if (current.data === data) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  toArray() {
    const array = [];
    let current = this.head;

    while (current !== null) {
      array.push(current.data);
      current = current.next;
    }

    return array;
  }

  reverse() {
    let current = this.head;
    let previous = null;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.tail = this.head;
    this.head = previous;
  }
}

// Example usage:

const linkedList = new LinkedList();
linkedList.push(10);
linkedList.push(20);
linkedList.push(30);
linkedList.insertAtIndex(15, 1);
linkedList.pop();
linkedList.reverse();

console.log(linkedList.toArray());