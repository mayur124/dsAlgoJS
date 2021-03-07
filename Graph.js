console.clear();

class GraphMatrix {
    constructor(nodeCount) {
        this.nodeCount = nodeCount;
        this.adjMatrix = [];
        for (let i = 0; i < this.nodeCount; i++) {
            this.adjMatrix[i] = Array(this.nodeCount).fill(0);
        }
    }
    addEdge(src, dest) {
        this.adjMatrix[src][dest] = 1;
        this.adjMatrix[dest][src] = 1;
    }
    bfs(start) {
        let queue = [start];
        let visited = Array(this.nodeCount).fill(false);
        visited[start] = true;
        while (queue.length > 0) {
            let current = queue.shift();
            console.log(current);
            let currentRow = this.adjMatrix[current];
            for (let i = 0; i < currentRow.length; i++) {
                if (currentRow[i] == 1 && !visited[i]) {
                    queue.push(i);
                    visited[i] = true;
                }
            }
        }
    }
    dfs(start, visited=Array(this.nodeCount).fill(false)) {
        console.log(start);
        visited[start] = true;
        for (let i = 0; i < this.adjMatrix[start].length; i++) {
            if (this.adjMatrix[start][i] == 1 && !visited[i]) {
                this.dfs(i, visited);
            }
        }
    }
}

class GraphList {
    constructor(nodes) {
        this.nodes = nodes;
        this.adjList = new Map();
        this.nodes.forEach(node=>this.adjList.set(node, []));
    }
    addEdge(src, dest) {
        this.adjList.get(src).push(dest);
        this.adjList.get(dest).push(src);
    }
    bfs(start) {
        let visited = new Set();
        visited.add(start);
        let queue = [start];
        while (queue.length > 0) {
            let current = queue.shift();
            console.log(current);
            let connectedList = this.adjList.get(current);
            for (let connectedNode of connectedList) {
                if (!visited.has(connectedNode)) {
                    visited.add(connectedNode);
                    queue.push(connectedNode);
                }
            }
        }
    }
    dfs(start, visited=new Set()) {
        console.log(start);
        visited.add(start);
        let connectedList = this.adjList.get(start);
        for (let connectedNode of connectedList) {
            if (!visited.has(connectedNode)) {
                this.dfs(connectedNode, visited);
            }
        }
    }
}

let gm = new GraphMatrix(5);
gm.addEdge(0, 1);
gm.addEdge(0, 2);
gm.addEdge(1, 3);
gm.addEdge(1, 4);
gm.bfs(1);
console.log('\n');
gm.dfs(0);

console.log('\n');

let gl = new GraphList('PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' '));
gl.addEdge('PHX', 'LAX');
gl.addEdge('PHX', 'JFK');
gl.addEdge('JFK', 'OKC');
gl.addEdge('JFK', 'HEL');
gl.addEdge('JFK', 'LOS');
gl.addEdge('MEX', 'LAX');
gl.addEdge('MEX', 'BKK');
gl.addEdge('MEX', 'LIM');
gl.addEdge('MEX', 'EZE');
gl.addEdge('LIM', 'BKK');
gl.bfs('PHX');
console.log('\n');
gl.dfs('PHX');

