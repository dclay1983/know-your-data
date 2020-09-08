import { LinkedListNode } from './LinkedListNode';
export class LinkedList {
  head: LinkedListNode | null;
  tail: LinkedListNode | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addHead(data: any): LinkedList {
    this.head = new LinkedListNode(data, this.head);
    if (this.head.next === null) {
      this.tail = this.head;
    }
    return this;
  }

  addTail(data: any): LinkedList {
    const node: LinkedListNode = new LinkedListNode(data);
    if (this.tail) {
      this.tail.next = node;
      this.tail = this.tail.next;
    } else {
      this.tail = this.head = node;
    }
    return this;
  }

  removeHead(): any {
    const node: LinkedListNode | null = this.head;
    if (this.head) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = this.head;
      }
    }
    return node?.data || null;
  }

  removeTail(): any {
    const node = this.tail;
    if (this.tail && this.head) {
      if (this.tail === this.head) {
        this.tail = this.head = null;
      } else {
        let prev: LinkedListNode | null = this.head;
        while (prev.next && prev.next !== this.tail) {
          prev = prev.next;
        }
        this.tail = prev;
        this.tail.next = null;
      }
    }
    return node?.data || null;
  }

  isEmpty(): boolean {
    return !this.head;
  }

  /**
   * Insert a new node after the first instance of a node with the key value and return the depth of the new node. If a depth value is supplied, addAfter will begin searching nodes at that depth and lower, else it will begin at head and look all the way to tail.
   * @param {any} key The data value to search for
   * @param {any} data The data value of the new node to insert
   * @param {number} depth The depth of the first node to begin searching for the key where head = depth of 0
   */

  addAfter(key: any, data: any, depth: number = 0) {
    let node: LinkedListNode | null = this.head;
    let currDepth: number = 0;
    while (node !== null) {
      if (currDepth >= depth) {
        if (node.data === key) {
          break;
        }
      }
      currDepth++;
      node = node.next;
    }
    if (node !== null) {
      node.next = new LinkedListNode(data, node.next);
      if (this.tail === node) {
        this.tail = node.next;
      }
      return ++currDepth;
    }
    return -1;
  }

  addBefore(key: any, data: any) {
    let prev: LinkedListNode | null = null;
    let node: LinkedListNode | null = this.head;
    while (node && node.data !== key) {
      prev = node;
      node = node.next;
    }
    if (node) {
      const newNode: LinkedListNode = new LinkedListNode(data, node);
      if (prev) {
        prev.next = newNode;
      }
      return 1;
    }
    return 0;
  }

  each(iteratee: (node: LinkedListNode, depth: number) => {}, context: any = null) {
    let node: LinkedListNode | null = this.head;
    let depth: number = 0;
    while (node) {
      depth++;
      iteratee.call(context, node, depth);
      node = node.next;
    }
    return this;
  }

  remove(key: any) {
    let prev: LinkedListNode | null = null;
    let node: LinkedListNode | null = this.head;
    while (node && node.data !== key) {
      prev = node;
      node = node.next;
    }
    if (node) {
      if (prev) {
        prev.next = node.next;
      }
      if (node === this.head) {
        this.head = node.next;
      }
      if (node === this.tail) {
        this.tail = prev;
      }
    }
    return node ? node.data : null;
  }

  reverse() {
    let node: LinkedListNode | null = this.head;
    this.tail = node;
    let prev: LinkedListNode | null = null;
    while (node) {
      const next: LinkedListNode | null = node.next;
      node.next = prev;
      prev = node;
      if (!next) break;
      node = next;
    }
    this.head = node;
  }

  copy() {
    const ll: LinkedList = new LinkedList();
    this.each((node: LinkedListNode, depth: number): any => {
      ll.addTail(node.data);
    });
    return ll;
  }
}
