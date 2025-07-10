class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new TreeNode(data);

    if (this.root === null) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = node;
          return;
        }

        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          return;
        }

        current = current.right;
      }
    }
  }

  traverse() {
    const preOrder = (root = this.root, result = []) => {
      if (root === null) return result;
      result.push(root.data);
      preOrder(root.left, result);
      preOrder(root.right, result);
      return result;
    };

    const inOrder = (root = this.root, result = []) => {
      if (root === null) return result;
      inOrder(root.left, result);
      result.push(root.data);
      inOrder(root.right, result);
      return result;
    };

    const postOrder = (root = this.root, result = []) => {
      if (root === null) return result;
      postOrder(root.left, result);
      postOrder(root.right, result);
      result.push(root.data);
      return result;
    };

    return { preOrder, inOrder, postOrder };
  }

  isBalanced() {
    function check(root) {
      if (root === null) return 0;

      const leftHeight = check(root.left);
      if (leftHeight === -1) return -1;

      const rightHeight = check(root.right);
      if (rightHeight === -1) return -1;

      if (Math.abs(leftHeight - rightHeight) > 1) return -1;

      return Math.max(leftHeight, rightHeight) + 1;
    }

    return {
      balanced: check(this.root) !== -1,
      "tree height": check(this.root),
    };
  }
}

const tree = new BinarySearchTree();
tree.insert(50);
tree.insert(31);
tree.insert(68);
tree.insert(70);

console.log(JSON.stringify(tree, null, 2));

console.log(tree.traverse().inOrder());
console.log(tree.traverse().preOrder());
console.log(tree.traverse().postOrder());
console.log(tree.isBalanced());
