// Breadth-first Search (BFS) starts by pushing all of the direct children to a queue (first-in, first-out). 
// It then visits each item in queue and adds the next layer of children to the back of the queue. 
// This example uses a Set to keep track of nodes that have already been visited.
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

var adjacencyList = new Map();

const addNode = airport => {
    adjacencyList.set(airport, []);
};

const addEdge = (origin, destination) => {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
};

airports.forEach(addNode); 
routes.forEach(route => addEdge(...route))

function bfs(start){
    const visited = new Set();
    var queue = [start];

    while (queue.length > 0){
        const airport = queue.shift(); //remove first element and return it;
        const destinations = adjacencyList.get(airport);

        for (destination of destinations){
            // console.log(destination);
            if(destination == 'BKK'){
                return console.log('BKK found');
            }

            if(!visited.has(destination)){
                console.log(destination)
                visited.add(destination);
                queue.push(destination);
                console.log(queue)
            }
        }
    }
}

bfs('PHX');

