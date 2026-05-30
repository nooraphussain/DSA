class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
  
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      let current = this.root;
  
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
    }

    search(val){
      let current = this.root;
      
      while(current){
        if(val == current.value) return true;
        if(val < current.value){
          current = current.left;
        }else{
          current = current.right;
        }
      }
      return false;
    }

    inorder(node = this.root){
      if(!node) return;
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }

  const tree = new BST();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);

console.log(tree.search(7)); // true
console.log(tree.search(20)); // false

tree.inorder();