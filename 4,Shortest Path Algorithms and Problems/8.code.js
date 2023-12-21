// Example usage:
let n=6;
let m=8
let edges= [[0,5,8],[0,2,2],[0,1,1],[1,3,3],[1,2,3],[2,5,6],[3,4,2],[4,5,2]]//3
// let n = 7;
// let m = 10;
// let edges = [
//   [0, 6, 7],
//   [0, 1, 2],
//   [1, 2, 3],
//   [1, 3, 3],
//   [6, 3, 3],
//   [3, 5, 1],
//   [6, 5, 1],
//   [2, 5, 1],
//   [0, 4, 5],
//   [4, 6, 2],
// ];//4
const ans = countPaths(n, edges);
console.log(ans);
function countPaths(n, roads) {
  // Creating an adjacency list for the given graph.
  const adj = [];
  for (let i = 0; i < n; i++) {
    adj.push([]);
  }
  const m = roads.length;
  for (let i = 0; i < m; i++) {
    const road = roads[i];
    // undirected graph
    adj[road[0]].push([road[1], road[2]]);
    adj[road[1]].push([road[0], road[2]]);
  }
  //console.log(adj)
  // Initializing the dist array and the ways array
  // along with their first indices.
  const dist = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  const ways = new Array(n).fill(0);
  dist[0] = 0;
  ways[0] = 1;
  // Defining a priority queue (min heap) manually.
  const pq = [[0, 0]]; //[dist,nodes]
  pq.sort((x, y) => x[0] - y[0]); //ascending order sorting
  // Define modulo value
  const mod = 1e9 + 7;
  // Iterate through the graph with the help of priority queue
  // just as we do in Dijkstra's Algorithm.
  while (pq.length !== 0) {
    const [dis, node] = pq.shift();
    for (let i = 0; i < adj[node].length; i++) {
      const adjNode = adj[node][i][0];
      const edW = adj[node][i][1];
      // This 'if' condition signifies that this is the first
      // time we're coming with this short distance, so we push
      // in PQ and keep the no. of ways the same.
      if (dis + edW < dist[adjNode]) {
        dist[adjNode] = dis + edW;
        pq.push([dis + edW, adjNode]);
        pq.sort((x, y) => x[0] - y[0]);
        ways[adjNode] = ways[node];
      } else if (dis + edW === dist[adjNode]) {
        // If we again encounter a node with the same short distance
        // as before, we simply increment the no. of ways.
        ways[adjNode] = (ways[adjNode] + ways[node]) % mod;
      }
    }
  }
  // Finally, we return the no. of ways to reach
  // (n-1)th node modulo 10^9+7.
  return ways[n - 1] % mod;
}
