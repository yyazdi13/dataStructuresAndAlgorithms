function bfs(graph, root){
    var nodesLen = {};

    for (var i = 0; i < graph.length; i++){
        nodesLen[i] = Infinity;
    } // {0: infinity, 1: infinity, 2: infinity, 3: infinity, 4: infinity}
    nodesLen[root] = 0;
    // {0: infinity, 1: 0, 2: infinity, 3: infinity, 4: infinity}
    var queue = [root]; //[1]
    var current;

    while (queue.length != 0){
        current = queue.shift(); // 1, 2, 0, 3

        var curConnected = graph[current]; //[0,0,1,0,0], [1,1,0,0,0], [0,1,1,1,0], [0,0,0,1,0]
        var neighborIdx = [];
        var idx = curConnected.indexOf(1); // 2, 0, 1, 3

        while(idx != -1){
            neighborIdx.push(idx); // [2], [0, 1], [1,2,3], [3]
            idx = curConnected.indexOf(1, idx + 1); // -1, 1
        }

        for (var j = 0; j < neighborIdx.length; j++){
            let nodePointer = neighborIdx[j]; // 2, 0 1, 1 2 3, 3
            if (nodesLen[nodePointer] == Infinity){ // 2: infinity, 0: infinity 1: 0, 1: 0 2: 1 3: infinity
                nodesLen[nodePointer] = nodesLen[current] +1; // 2 = 0 + 1, 0 = 1 + 1, 3 = 2 + 1
            
                queue.push(nodePointer); // [2], [0], [3]
            }
        }
    }
    return nodesLen;
}

var exBFSGraph = [
    [0,1,1,1,0],
    [0,0,1,0,0],
    [1,1,0,0,0],
    [0,0,0,1,0],
    [0,1,0,0,0]
];

console.log(bfs(exBFSGraph, 1));

function bfs(start, graph){
    let nodeDistance = {};
    let queue = [start];

    for (let i = 0; i < graph.length; i++){
        nodeDistance[i] = Infinity;
    }
    nodeDistance[start] = 0;
    let current;

    while (queue.length != 0){
        current = queue.shift();

        let currentNeighbors = graph[current];
        let neighborIdx = currentNeighbors.indexOf(1);
        let neighbors = [];
    
        while (neighborIdx != -1){
            neighbors.push(neighborIdx);
            neighborIdx = currentNeighbors.indexOf(1, neighborIdx + 1);
        }
    
        for (let j = 0; j < neighbors.length; j++){
            let currentNode = neighbors[j];
            if(nodeDistance[currentNode] == Infinity){
                nodeDistance[currentNode] = nodeDistance[current] + 1;
                queue.push(currentNode);
            }
        }
    }

}

var exBFSGraph = [
    [0,1,0,1,0], 0 -> 1 0 -> 3
    [1,0,0,0,1], 1 -> 0 1 -> 4
    [0,0,0,1,1], 2 -> 3 2 -> 4
    [0,0,1,1,0], 3 -> 2 3 -> 3
    [0,0,1,0,0]  4 -> 2  
]