class Node{
    constructor(val){
        this.value = val;
        this.children = [];              
    }    
}

let node4 = new Node(4);
node4.children = [new Node(8), new Node(9)];

let node5 = new Node(5);
node5.children = [new Node(10), new Node(11)];

let node3 = new Node(3);
node3.children = [new Node(6), new Node(7)];

let node2 = new Node(2);
node2.children = [node4, node5];

let node1 = new Node(1);
node1.children = [node2, node3];

function dfs(node){
    console.log(node.value);
    for(let i = 0; i < node.children.length; i++){
        const child = node.children[i];
        dfs(child);
    }
}

dfs(node1);




