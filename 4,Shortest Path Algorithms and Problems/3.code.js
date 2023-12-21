V = 2;
adj = [[[1, 9]], [[0, 9]]];
S = 0;
const res = dijkstra(V, adj, S);

console.log(res.join(" "));

function dijkstra(V, adj, S) {
  const pq = new PriorityQueue();
  const dist = new Array(V).fill(Number.MAX_SAFE_INTEGER);
  dist[S] = 0;
  pq.add({ distance: 0, node: S });
  while (pq.size() !== 0) {
    const current = pq.peek(); // top
    const dis = current.distance;
    const node = current.node;
    pq.remove();
    for (let i = 0; i < adj[node].length; i++) {
      const adjNode = adj[node][i][0];
      const edgeWeight = adj[node][i][1];
      if (dis + edgeWeight < dist[adjNode]) {
        dist[adjNode] = dis + edgeWeight;
        pq.add({ distance: dist[adjNode], node: adjNode });
      }
    }
  }
  return dist;
}
function PriorityQueue() {
  this.heap = [];
  this.add = function (element) {
    this.heap.push(element);
    this.heap.sort((a, b) => a.distance - b.distance);
  };
  this.peek = function () {
    return this.heap[0];
  };
  this.remove = function () {
    return this.heap.shift();
  };
  this.size = function () {
    return this.heap.length;
  };
}
