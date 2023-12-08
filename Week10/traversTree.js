class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;                
    }    
}

/*
let root = new Node(2);
let node1 = new Node(1);
let node2 = new Node(3);

root.left = node1;
root.right = node2;
*/


let root = new Node(4);
let node2 = new Node(2);
let node5 = new Node(5);
let node1 = new Node(1);
let node3 = new Node(3);
let node6 = new Node(6);
let node7 = new Node(7);

node2.left = node1;
node2.right = node3;

node5.left = node6;
node5.right = node7;

root.left = node2;
root.right = node5;


function traverseTree(node){
    console.log(node.value);
    if (node.left != null){
        traverseTree(node.left);
    }
    if (node.right != null){
        traverseTree(node.right);
    }
}

function invertBinaryTree(node){
    //const tmp = node.right;
    if (node == null){
        return null;
    }
    const newRightNode = invertBinaryTree(node.left);
    const newLeftNode = invertBinaryTree(node.right);
    node.right = newRightNode;
    node.left = newLeftNode;
    return node;
}

console.log("before:");
traverseTree(root);

const invertedRoot = invertBinaryTree(root);

console.log("after:");
traverseTree(invertedRoot);



