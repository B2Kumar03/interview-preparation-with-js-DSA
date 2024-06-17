// import breadthFirstSearch from "./bfs.js";

class BST_NODE {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new BST_NODE(data);
    if (this.root == null) {
      this.root = newNode;
      return;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }
  
  deleteNode(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        let temp = this.minNode(node.right);
        node.key = temp.key;
        node.right = this.deleteNode(node.right, temp.key);
      }
    }
    return node;
  }
  
  minNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
  

  inOrderTraversal() {
    let result = [];
    this.inorder(this.root, result);
    return result;
  }
  inorder(node, result) {
    if (node == null) {
      return;
    }

    this.inorder(node.left, result);
    result.push(node.key);
    this.inorder(node.right, result);
  }
}

Bst.prototype.breadthFirstSearch =function () {
  const root=this.root
  if (root === null) {
    return null// return empty array or message
  }
  // console.log(root);
  const values = []
  const queue = []
  queue.push(root)
  // console.log("After pushed",queue);
  // console.log(queue.shift());
  while(queue.length > 0){
    const node = queue.shift() // point of optimization
    // console.log(node);
    values.push(node.key)

    if (node.left !== null) {
      queue.push(node.left)
    }
    if (node.right !== null) {
      queue.push(node.right)
    }
  }

  return values

}

Bst.prototype.depthFirstTraversal = function() {
  const root=this.root
  if (root === null) {
    return // return a message or empty
  }
  const values = []
  const stack = [root]
  // console.log(stack);

  while(stack.length > 0){
    const node = stack.pop()
    values.push(node.key)

    if (node.right !== null) {
      stack.push(node.right)
    }
    if (node.left !== null) {
      stack.push(node.left)
    }
  }
  return values;
}


const recursiveDepthFirstTraversal = (root) => {
  if (root === null) {
    return [];
  }

  const leftValues = recursiveDepthFirstTraversal(root.left);
  const rightValues = recursiveDepthFirstTraversal(root.right);

  return [root.key, ...leftValues, ...rightValues];
};








const BinaryTree = new Bst();

BinaryTree.insert(50);
BinaryTree.insert(11);
BinaryTree.insert(30);
BinaryTree.insert(43);
BinaryTree.insert(24);
BinaryTree.insert(78);
BinaryTree.insert(77);
BinaryTree.insert(79);
BinaryTree.insert(80);
BinaryTree.insert(91);
console.log(BinaryTree.inOrderTraversal());
// BinaryTree.delete(4)
console.log(BinaryTree.inOrderTraversal());
// const root=new Bst()
// console.log(BinaryTree.root);
console.log(BinaryTree.breadthFirstSearch());
console.log(BinaryTree.depthFirstTraversal());
console.log(recursiveDepthFirstTraversal(BinaryTree.root));


