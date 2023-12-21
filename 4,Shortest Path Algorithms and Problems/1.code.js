function Queue() {
  var a = [],
    b = 0;
  this.getLength = function () {
    return a.length - b;
  };
  this.isEmpty = function () {
    return 0 == a.length;
  };
  this.enqueue = function (b) {
    a.push(b);
  };
  this.dequeue = function () {
    if (a.length === 0) return undefined;
    const c = a[b++];
    if (2 * b >= a.length) {
      a = a.slice(b);
      b = 0;
    }
    return c;
  };

  this.peek = function () {
    return 0 < a.length ? a[b] : void 0;
  };
}
const n = 9,
  m = 10;
const edges = [
  [0, 1],
  [0, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [1, 2],
  [2, 6],
  [6, 7],
  [7, 8],
  [6, 8],
];
const res = shortestPath(edges, n, m, 0);
for (let i = 0; i < n; i++) {
  console.log(res[i] + " ");
}
console.log();
function shortestPath(edges, n, m, src) {
  // Create an adjacency list of size N for storing the undirected graph.
  const adj = [];
  for (let i = 0; i < n; i++) {
    adj.push([]);
  }
  for (let i = 0; i < m; i++) {
    adj[edges[i][0]].push(edges[i][1]);
    adj[edges[i][1]].push(edges[i][0]);
  }
  // A dist array of size N initialised with a large number to
  // indicate that initially all the nodes are untraversed.
  const dist = Array(n).fill(Number.MAX_SAFE_INTEGER);
  dist[src] = 0;
  // BFS Implementation
  const q = new Queue();
  q.enqueue(src);
  while (q.getLength() > 0) {
    const node = q.dequeue();
    for (let i = 0; i < adj[node].length; i++) {
      const it = adj[node][i];
      if (dist[node] + 1 < dist[it]) {
        //we want to maintain the minimum distance
        dist[it] = 1 + dist[node];
        q.enqueue(it);
      }
    }
  }
  // Updated shortest distances are stored in the resultant array ‘ans’.
  // Unreachable nodes are marked as -1.
  for (let i = 0; i < n; i++) {
    if (dist[i] === Number.MAX_SAFE_INTEGER) {
      dist[i] = -1;
    }
  }
  return dist;
}
