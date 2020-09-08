import { LinkedList } from '../linkedlist/LinkedList';
import { LinkedListNode } from '../linkedlist/LinkedListNode';

describe('LinkedList', () => {
  describe('Class instantiation', () => {
    test('LinkedList should exist', () => {
      expect(LinkedList).toBeDefined();
    });

    test('calling "new LinkedList" should create an instance of LinkedList', () => {
      const ll = new LinkedList();
      expect(ll).toBeInstanceOf(LinkedList);
    });
  });

  describe('addHead', () => {
    test('addHead should exist', () => {
      const ll = new LinkedList();
      expect(ll).toHaveProperty('addHead');
    });

    test('addHead should be a function', () => {
      const ll = new LinkedList();
      expect(typeof ll.addHead).toBe('function');
    });

    test('addHead should return itself for chaining', () => {
      const ll = new LinkedList();
      expect(ll.addHead(1)).toBe(ll);
    });

    test('addHead should add a node to head', () => {
      const ll = new LinkedList();
      ll.addHead(1);
      expect(ll.head).toBeTruthy();
    });

    test('addHead should create an instance of LinkedListNode', () => {
      const ll = new LinkedList();
      ll.addHead(1);
      expect(ll.head).toBeInstanceOf(LinkedListNode);
    });

    test('addHead should store the argument as the value in head.data', () => {
      const ll = new LinkedList();
      ll.addHead(1);
      expect(ll.head).not.toBe(null);
      expect(ll.head?.data).toBe(1);
    });

    test('addHead should assign tail equal to head if LinkedList is empty', () => {
      const ll = new LinkedList();
      ll.addHead(1);
      expect(ll.tail).toBe(ll.head);
    });

    test('addHead should assign next property pointing to previous head', () => {
      const ll = new LinkedList();
      ll.addHead(1);
      const head = ll.head;
      ll.addHead(2);
      expect(ll.head).not.toBe(null);
      expect(ll.head?.next).toBe(head);
    });

    test('addHead should not alter tail if a LinkedList is not empty', () => {
      const ll = new LinkedList();
      ll.addHead(1);
      const tail = ll.tail;
      ll.addHead(2);
      expect(ll.tail).toBe(tail);
    });
  });

  describe('addTail', () => {
    test('addTail should exist', () => {
      const ll = new LinkedList();
      expect(ll).toHaveProperty('addTail');
    });

    test('addTail should be a function', () => {
      const ll = new LinkedList();
      expect(typeof ll.addTail).toBe('function');
    });

    test('addTail should return itself for chaining', () => {
      const ll = new LinkedList();
      expect(ll.addTail(1)).toBe(ll);
    });

    test('addTail should add a node to tail', () => {
      const ll = new LinkedList();
      ll.addTail(1);
      expect(ll.tail).toBeTruthy();
    });

    test('addTail should create an instance of LinkedListNode', () => {
      const ll = new LinkedList();
      ll.addTail(1);
      expect(ll.tail).toBeInstanceOf(LinkedListNode);
    });

    test('addTail should store the argument as the value in tail.data', () => {
      const ll = new LinkedList();
      ll.addTail(1);
      expect(ll.tail?.data).toBe(1);
    });

    test('addTail should assign head equal to tail if LinkedList is empty', () => {
      const ll = new LinkedList();
      ll.addTail(1);
      expect(ll.head).toBe(ll.tail);
    });

    test('addTail should assign next property pointing to new tail', () => {
      const ll = new LinkedList();
      ll.addTail(1);
      const tail = ll.tail;
      ll.addTail(2);
      expect(tail?.next).toBe(ll.tail);
    });

    test('addTail should not alter head if a LinkedList is not empty', () => {
      const ll = new LinkedList();
      ll.addTail(1);
      const head = ll.head;
      ll.addTail(2);
      expect(ll.head).toBe(head);
    });
  });

  describe('removeHead', () => {
    test('removeHead should exist', () => {
      const ll = new LinkedList();
      expect(ll).toHaveProperty('removeHead');
    });

    test('removeHead should be a function', () => {
      const ll = new LinkedList();
      expect(typeof ll.removeHead).toBe('function');
    });

    test('removeHead should return null if LinkedList is empty', () => {
      const ll = new LinkedList();
      expect(ll.removeHead()).toBe(null);
    });

    test('removeHead should return the data from head if head exists', () => {
      const ll = new LinkedList();
      ll.addHead(1);
      expect(ll.removeHead()).toBe(1);
    });

    test('removeHead should remove the node  head points to', () => {
      const ll = new LinkedList();
      ll.addHead(1);
      const head = ll.head;
      ll.removeHead();
      expect(ll.head).toBeFalsy();
    });

    test('removeHead should change point head to the next node in the LinkedList', () => {
      const ll = new LinkedList();
      ll.addHead(1).addHead(2).addHead(3);
      const next = ll.head?.next;
      ll.removeHead();
      expect(ll.head).toBe(next);
    });

    test('removeHead should assign head to null if it removes the last node from the list', () => {
      const ll = new LinkedList();
      ll.addHead(1);
      ll.removeHead();
      expect(ll.head).toBe(null);
    });

    test('removeHead should assign tail to null if it removes the last node from the list', () => {
      const ll = new LinkedList();
      ll.addHead(1);
      ll.removeHead();
      expect(ll.tail).toBe(null);
    });
  });

  describe('removeTail', () => {
    test('removeTail should exist', () => {
      const ll = new LinkedList();
      expect(ll).toHaveProperty('removeTail');
    });

    test('removeTail should be a function', () => {
      const ll = new LinkedList();
      expect(typeof ll.removeTail).toBe('function');
    });

    test('removeTail should return null if LinkedList is empty', () => {
      const ll = new LinkedList();
      expect(ll.removeTail()).toBe(null);
    });

    test('removeTail should return the data from tail if tail exists', () => {
      const ll = new LinkedList();
      ll.addTail(1);
      expect(ll.removeTail()).toBe(1);
    });

    test('removeTail should remove the node tail points to', () => {
      const ll = new LinkedList();
      ll.addTail(1);
      const tail = ll.tail;
      ll.removeTail();
      expect(ll.tail).toBeFalsy();
    });

    test('removeTail should point tail to the previous node in the LinkedList', () => {
      const ll = new LinkedList();
      ll.addTail(1);
      ll.addTail(2);
      const prev = ll.tail;
      ll.addTail(3);
      ll.removeTail();
      expect(ll.tail).toBe(prev);
    });

    test('removeTail should assign tail to null if it removes the last node from the list', () => {
      const ll = new LinkedList();
      ll.addTail(1);
      ll.removeTail();
      expect(ll.tail).toBe(null);
    });

    test('removeTail should assign head to null if it removes the last node from the list', () => {
      const ll = new LinkedList();
      ll.addTail(1);
      ll.removeTail();
      expect(ll.head).toBe(null);
    });
  });

  describe('isEmpty', () => {
    test('isEmpty should exist', () => {
      const ll = new LinkedList();
      expect(ll).toHaveProperty('isEmpty');
    });

    test('isEmpty should be a function', () => {
      const ll = new LinkedList();
      expect(typeof ll.isEmpty).toBe('function');
    });

    test('isEmpty should return a boolean', () => {
      const ll = new LinkedList();
      expect(typeof ll.isEmpty()).toBe('boolean');
    });

    test('isEmpty should return true for a new LinkedList', () => {
      const ll = new LinkedList();
      expect(ll.isEmpty()).toBe(true);
    });

    test('isEmpty should return false for a LinkedList containing a node', () => {
      const ll = new LinkedList();
      ll.addTail(1);
      expect(ll.isEmpty()).toBe(false);
    });

    test('isEmpty should return true when all nodes are removed', () => {
      const ll = new LinkedList();
      ll.addTail(1);
      while (ll.head) {
        ll.removeHead();
      }
      expect(ll.isEmpty()).toBe(true);
    });
  });
});
