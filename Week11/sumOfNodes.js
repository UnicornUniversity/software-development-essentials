class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;                
    }    
}

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

//var sum = 0;

function summarizeTree(node){
    let sum = node.value;
    if (node.left != null){
        sum = sum + summarizeTree(node.left);
    }
    if (node.right != null){
        sum += summarizeTree(node.right);        
    }
    return sum;
}

console.log("Sum: " + summarizeTree(root));
//summarizeTree(root);
//console.log("Sum: " + sum);



