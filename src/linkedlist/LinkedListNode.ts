export class LinkedListNode {
  public data: any;
  public next: LinkedListNode | null;
  constructor(data: any, next: LinkedListNode | null = null) {
    this.data = data;
    this.next = next;
  }
}
