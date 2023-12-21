// let V = 2;
// let edges = [[0, 1, 9]];
// let S = 0;
let V = 6;
let edges = [
  [3, 2, 6],
  [5, 3, 1],
  [0, 1, 5],
  [1, 5, -3],
  [1, 2, -2],
  [3, 4, -2],
  [2, 4, 3],
];
let S = 0;
const dist = bellmanFord(V, edges, S);
console.log(dist.join(" "));
function bellmanFord(V, edges, S) {
  const dist = new Array(V).fill(1e8);
  dist[S] = 0;
 //Inside that loop, we will try to relax every given edge.
//For example, one of the given edge information is like (u, v, wt), where u = starting node of the edge, v = ending node, and wt = edge weight. For all edges like this we will be checking if node u is reachable and if the distance to reach v through u is less than the distance to v found until now(i.e. dist[u] and dist[u]+ wt < dist[v]).
//After repeating the 3rd step for N-1 times, we will apply the same step one more time to check if the negative cycle exists. If we found further relaxation is possible, we will conclude the graph has a negative cycle and from this step, we will return a distance array of -1(i.e. minimization of distances is not possible).
//Otherwise, we will return the distance array which contains all the minimized distances.
  for (let i = 0; i < V - 1; i++) {
    //n-1 times
    for (let j = 0; j < edges.length; j++) {
      const u = edges[j][0];
      const v = edges[j][1];
      const wt = edges[j][2];
      if (dist[u] !== 1e8 && dist[u] + wt < dist[v]) {
        dist[v] = dist[u] + wt;
      }
    }
  }
  for (let j = 0; j < edges.length; j++) {
    const u = edges[j][0];
    const v = edges[j][1];
    const wt = edges[j][2];
    if (dist[u] !== 1e8 && dist[u] + wt < dist[v]) {
      return [-1];
    }
  }
  return dist;
}
