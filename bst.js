class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(value){
        this.root = new Node(value);
        this.count = 1;
    }

    size (){
        return this.count;
    }

    insert(value){
        this.count++;
        let newNode = new Node(value);

        const searchTree = node => {
            //if value is < node.value, go left
            if (value < node.value) {
                if (!node.left) node.left = newNode;
                else searchTree(node.left);
            }
            // if value is > node.value, gor right
            if(value > node.value){
                if(!node.right) node.right = newNode;
                else searchTree(node.right);
            }
        }
        searchTree(this.root);
    }

    min (){
        let currentNode = this.root;
        while (currentNode.left) currentNode = currentNode.left;
        return currentNode.value;
    }

    max(){
        let currentNode = this.root;
        while (currentNode.right) currentNode = currentNode.right;
        return currentNode.value;
    }

    contains(value){
        let currentNode = this.root;

        while (currentNode){
            if (value === currentNode.value) return true;
            if (value < currentNode.value) currentNode = currentNode.left;
            if (value > currentNode.value) currentNode = currentNode.right;
        }

        return false;
    }
    // DFS - looks branch by branch
    // left, root, right (nums are in order)
    DFSinOrder(){
        let result = [];

        const traverse = node => {
            // if left child exists, keep going left
            if(node.left) traverse(node.left);
            // capture root node value
            result.push(node.value);
            // if right child exists, keep going right
            if(node.right) traverse(node.right)
        }

        traverse(this.root);
        return result;
    }
    // root,left,right
    // [15,3,2,12,36,28,39]
    DFSpreOrder(){
        let result = [];

        const traverse = node => {
            result.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }

        traverse(this.root);
        return result;
    }
    // left,right,root
    // [2,12,3,28,39,36,15]
    DFSpostOrder(){
        let result = [];

        const traverse = node => {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            result.push(node.value);
        }

        traverse(this.root);
        return result;
    }
    // BFS - looks level by level
    // [15,3,36,2,12,28,29]
    BFS(){
        let result = [];
        let queue = [];
        queue.push(this.root);

        while(queue.length){
            let currentNode = queue.shift();
            result.push(currentNode.value);
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
        return result;
    }
}

const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

console.log(bst.BFS());