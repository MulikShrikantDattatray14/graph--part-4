class Stack {
  constructor() {
    this.items = [];
  }

  // Push element onto the stack
  push(element) {
    this.items.push(element);
  }

  // Pop element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // Peek at the top element of the stack without removing it
  peek() {
    return this.isEmpty()
      ? "Stack is empty"
      : this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }

  // Print the elements of the stack
  print() {
    console.log(this.items.join(" "));
  }

  // Clear the stack
  clear() {
    this.items = [];
  }
}
const n = 6;
const m = 7;
const edge = [
  [0, 1, 2],
  [0, 4, 1],
  [4, 5, 4],
  [4, 2, 2],
  [1, 2, 3],
  [2, 3, 6],
  [5, 3, 1],
];
const res = shortestPath(n, m, edge);
for (let i = 0; i < n; i++) {
  process.stdout.write(res[i] + " ");
}
console.log();
function shortestPath(N, M, edges) {
  const adj = [];
  for (let i = 0; i < N; i++) {
    adj.push([]);
  }
  for (let i = 0; i < M; i++) {
    const u = edges[i][0];
    const v = edges[i][1];
    const wt = edges[i][2];
    adj[u].push({ first: v, second: wt });
  }
  const vis = new Array(N).fill(0);
  const st = new Stack(); // follows LIFO

  for (let i = 0; i < N; i++) {
    if (vis[i] === 0) {
      topoSort(i, adj, vis, st);
    }
  }

  const dist = new Array(N).fill(1e9);

  dist[0] = 0;
  while (st.size() !== 0) {
    const node = st.pop(); // remove last one

    for (let i = 0; i < adj[node].length; i++) {
      const v = adj[node][i].first;
      const wt = adj[node][i].second;

      if (dist[node] + wt < dist[v]) {
        // update to smallest
        dist[v] = wt + dist[node];
      }
    }
  }

  for (let i = 0; i < N; i++) {
    if (dist[i] === 1e9) dist[i] = -1;
  }

  return dist;
}

function topoSort(node, adj, vis, st) {
  vis[node] = 1;
  for (let i = 0; i < adj[node].length; i++) {
    const v = adj[node][i].first;
    if (vis[v] === 0) {
      topoSort(v, adj, vis, st);
    }
  }
  st.push(node);
}
