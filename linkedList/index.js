class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.insertInBeg = function (data) {
  const newNode = new Node(data);
  newNode.next = this.head;
  this.head = newNode;
};

LinkedList.prototype.traversal = function () {
  let st = "";
  let current = this.head;
  while (current) {
    st += current.data + " ->";
    current = current.next;
  }
  st += "null";
  console.log(st);
};
LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);

  let current = this.head;
  if (current == null) {
    this.insertInBeg(data);
    return;
  }
  while (current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
};

LinkedList.prototype.deleteFromBeg = function () {
  if (this.head == null) {
    console.log("List is empty !");
    return;
  }
  this.head = this.head.next;
};
LinkedList.prototype.deleteFromEnd = function () {
  if (this.head == null) {
    console.log("List is empty");
    return;
  }
  if (this.head.next == null) {
    console.log("hii");
    this.head = null;
    return;
  }
  let current = this.head;
  while (current.next.next != null) {
    current = current.next;
  }
  current.next = null;
  console.log(current);
};

//reverse the linked list
LinkedList.prototype.reverse = function () {
  let current = this.head;
  let prev = null;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  this.head = prev;
};

//find given key
LinkedList.prototype.search = function (key) {
  let current = this.head;
  while (current) {
    if (current.data == key) {
      return current;
    }
    current = current.next;
  }
  return null;
};
//insert given node after
LinkedList.prototype.insertGivenNodeAfter = function (node, data) {
  const newNode = new Node(data);
  let current = this.head;
  let searchedNode = this.search(node);
  if (searchedNode == null) {
    console.log("Given node is not found !");
    return;
  }
  newNode.next = searchedNode.next;
  searchedNode.next = newNode;
};
LinkedList.prototype.insertGivenNodeBefore = function (node, data) {
  let current = this.head;
  const newNode = new Node(data);
  while (current.next != null) {
    if (current.next.data == node) {
      break;
    }
    current = current.next;
  }
  if (current.next == null) {
    console.log("Given node is not found !");
    return;
  }
  newNode.next = current.next;
  current.next = newNode;
};
LinkedList.prototype.deleteGivenKey = function (key) {
  let current = this.head;
  while (current.next != null) {
    if (current.next.data == key) {
      break;
    }
    current = current.next;
  }
  if (current.next == null) {
    console.log("Given key/node is not found !");
    return;
  }
  current.next = current.next.next;
};

const LL = new LinkedList();

LL.insertAtEnd(14);
LL.insertAtEnd(15);
LL.insertAtEnd(13);
LL.insertAtEnd(16);
LL.deleteGivenKey(16);
LL.traversal();
LL.insertGivenNodeAfter(15, 5);
LL.insertGivenNodeBefore(15, 50);
LL.traversal();
LL.deleteFromBeg();
LL.deleteFromBeg();
LL.deleteFromBeg();
LL.traversal();
console.log(LL.search(13).data);
console.log(LL.search(113));
