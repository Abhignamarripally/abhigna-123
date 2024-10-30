class Node{
    constructor(value){
        this.value = value;
        this.adjacents=[];
    }
}

class Graph{
    constructor(edgeDirection=Graph.DIRECTED){
        this.nodes=new Map();
        this.edgeDirection=edgeDirection;
    }

    addVertex(value){
        if(this.nodes.has(value)){
            return this.nodes.get(value);
        } else{
            const vertex = new Node();
            this.nodes.set(value,vertex);
            return vertex;
        }
    }

    addEdge(source,destination){
        const sourceNode=this.addVertex(source);
        const destinationNode=this.addVertex(destination);

        sourceNode.addAdjacent(destinationNode);

        if(this.edgeDirection==Graph.UNDIRECTED){
            destinationNode.addAdjacent(sourceNode);
        }

        return[sourceNode,destinationNode];
    }

    removeVertex(value){
        const current = this.nodes.get(value);
        if(current){
            this.nodes.removeAdjacent(current);
        }
    }
    return this.nodes.delete(value);
}

removeEdge(source,destination){
    const sourceNode=this.nodes.get(source);
    const destinationNode=this.nodes.get(destination);

    if(sourceNode&&destinationNode){
        sourceNode.removeAdjacent(destinationNode);

        if(this.edgeDirection==Graph.UNDIRECTED){
            destinationNode.removeAdjacent(sourceNode);
        }
    }

    return[sourceNode,destinationNode];
}

*bfs(first){
    const visited = new Map();
    const visitList = new Queue();

    visitList.add(first);

    while(!visitList.isEmpty()){
        const node=visitList.dequque();
        if(node && !visited.has(node)){
            yield node;
            visited.set(node,true);
            node.getAdjacents().forEach((adj)->visitList.add(adj));
        }

        *dfs(first){
            const visited = new Map();
            const visitList = new Stack();
        
            visitList.add(first);

            while(!visitList.isEmpty()){
                const node=visitList.pop();
                if(node && !visited.has(node)){
                    yield node;
                    visited.set(node);
                    node.getAdjacents().forEach((adj)->visitList.add(adj));
                }
            }    
    }
}

Graph.UNDIRECTED = symbol("directed graph");
Graph.DIRECTED = symbol("undirected graph");

const graph = new Graph(Graph.UNDIRECTED);

const [first]=graph.addEdge(1,2);
graph.addEdge(1,3);
graph.addEdge(1,4);
graph.addEdge(5,2);
graph.addEdge(6,3);
graph.addEdge(7,3);
graph.addEdge(8,4);
graph.addEdge(9,5);
graph.addEdge(10,6);

bfsFromFirst = graph.bfs(first);
bfsFromFirst.next().value.value;
bfsFromFirst.next().value.value;
bfsFromFirst.next().value.value;
bfsFromFirst.next().value.value;

dfsFromFirst = graph.dfs(first);
visitedOrder=Array.from(dfsFromFirst);
const values=visitedOrder.map((node->node.value));
console.log(values);