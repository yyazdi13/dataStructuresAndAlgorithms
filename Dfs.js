// A graph can be represented as an adjacency matrix or adjacency list. In most cases, 
// it is more efficient to use the latter because it requires less memory and offers 
// better time-complexity when performing search algorithms.

// Imagine we have a dataset that contains airports and routes. We can represent the graph as a Map 
// where each key (node) is an airport and the value (edges) is an array airports that it can connect to.

// DATA
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

// The graph
const adjacencyList = new Map();

// Add node
function addNode(airport){
    adjacencyList.set(airport, []);
}

// add edge
function addEdge(origin,destination){
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// create the graph
airports.forEach(addNode);
routes.forEach(route => {
    addEdge(...route);
});


// Depth-first Search (DFS) will go as far into the graph as possible until 
// it reaches a node without any children, at which point it backtracks and continues the process. 
// The algorithm can be implemented with a recursive function that keeps track of previously visited nodes. 
// If a node has not been visited, we call the function recursively.
let count = 0;
let visited = new Set();
function Dfs(start, visited){

    visited.add(start);

    const destinations = adjacencyList.get(start);

    for (const destination of destinations){
        if(destination === 'BKK'){
            count++;
            // console.log(`Dfs found Bangkok in ${count} steps`);
            return;
        }
        if (!visited.has(destination)){
            console.log(destination)
            count++;
            Dfs(destination, visited);
        }
    }
}

Dfs('PHX', visited);