class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoublylinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

//insert at first or creation phase
DoublylinkedList.prototype.insertAtStart = function (data) {
  const newNode = new Node(data);
  if (this.head == null && this.tail == null) {
    this.head = newNode;
    this.tail = newNode;
    return;
  }
  this.head.prev = newNode;
  newNode.next = this.head;
  this.head = newNode;
};

//traversal head to tail
DoublylinkedList.prototype.traversal = function () {
  let current = this.head;
  let st = "";
  st += "null<-";
  while (current.next) {
    st += String(current.data) + "<->";
    current = current.next;
  }
  st += String(current.data);
  st += "->null";
  console.log(st);
};

//traversal tail to head
DoublylinkedList.prototype.Reversetraversal = function () {
  let current = this.tail;
  let st = "";
  st += "null<-";
  while (current.prev) {
    st += String(current.data) + "<->";
    current = current.prev;
  }
  st += String(current.data);
  st += "->null";
  console.log(st);
};

DoublylinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);
  if (this.head == null && this.tail == null) {
    this.insertAtStart(data);
    return;
  }
  this.tail.next = newNode;
  newNode.prev = this.tail;
  this.tail = newNode;
};

//search node
DoublylinkedList.prototype.search = function (key) {
  if (this.tail == null && this.head == null) {
    return null;
  }
  let current = this.head;
  while (current) {
    if (current.data == key) {
      return current;
    }
    current = current.next;
  }
  return null;
};

//insert at given node after
DoublylinkedList.prototype.insertGiveNodeAfter = function (prevNode, data) {
  const newNode = new Node(data);
  if (prevNode == null) {
    console.log("Node is not found in the list !");
    return;
  }
  if (prevNode.next == null) {
    this.tail = newNode;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    return;
  }
  newNode.next = prevNode.next;
  newNode.prev = prevNode.next.prev;
  prevNode.next.prev = newNode;
  prevNode.next = newNode;
};
//delete first
DoublylinkedList.prototype.deleteFirst=function(){
  if(this.head==null && this.tail==null){
    console.log("List is empty !");
    return
  }
  if(this.head==this.tail){
    this.head=null
    this.tail=null
    return
  }
  this.head=this.head.next
  this.head.prev=null
  // this.head.next.prev=null
}
//delete last
DoublylinkedList.prototype.deleteLast=function(){
  if(this.head==null && this.tail==null){
    console.log("List is empty !");
    return
  }
  if(this.head==this.tail){
    this.head=null
    this.tail=null
    return
  }
  this.tail=this.tail.prev
  this.tail.next=null

}
//reverse linkedlist

DoublylinkedList.prototype.reverse=function(){
  let current = this.head;
  let temp = null

  while(current != null){
    //swapping
    temp = current.prev
    current.prev = current.next
    current.next = temp;
    //move to next node
    current = current.prev
  }
  if (temp != null) {
    this.tail = this.head
    this.head = temp.prev
  }
}


const dl = new DoublylinkedList();

// dl.insertAtStart(10);
// dl.insertAtStart(12);
dl.insertAtEnd(10);
dl.insertAtEnd(12);
dl.insertAtEnd(13);
// dl.traversal();
// dl.Reversetraversal();
let prevNode = dl.search(13);
// console.log(prevNode);
dl.insertGiveNodeAfter(prevNode, 90);
dl.traversal();
dl.deleteFirst()
dl.traversal()
dl.deleteLast()
dl.traversal()
dl.reverse()
dl.traversal()
// dl.Reversetraversal()
