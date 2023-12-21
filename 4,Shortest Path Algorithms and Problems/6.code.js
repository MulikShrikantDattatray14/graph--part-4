// let n = 3;
// let flights = [
//   [0, 1, 100],
//   [1, 2, 100],
//   [0, 2, 500],
// ];
// let src = 0;
// let dst = 2;
// let K = 1;
//////////////////////////////////////////////
let n = 4;
let flights = [
  [0, 1, 100],
  [1, 2, 100],
  [2, 0, 100],
  [1, 3, 600],
  [2, 3, 200],
];
let src = 0;
let dst = 3;
let K = 1;
// 700;
const ans = CheapestFlight(n, flights, src, dst, K);
console.log(ans);
function CheapestFlight(n, flights, src, dst, K) {
  const adj = [];
  for (let i = 0; i < n; i++) {
    adj.push([]);
  }
  for (let i = 0; i < flights.length; i++) {
    const [start, end, cost] = flights[i];
    adj[start].push({ first: end, second: cost });
  }
  const q = []; // no need of priority queue
  q.push({ first: 0, second: src, third: 0 }); //[stop, nodes, distance]
  const dist = new Array(n).fill(1e9);
  dist[src] = 0;
  while (q.length > 0) {
    const it = q.shift();
    const stops = it.first;
    const node = it.second;
    const cost = it.third;
    if (stops > K) continue;
    for (let i = 0; i < adj[node].length; i++) {
      const iter = adj[node][i];
      const adjNode = iter.first;
      const edW = iter.second;

      if (cost + edW < dist[adjNode] && stops <= K) {
        dist[adjNode] = cost + edW;
        q.push({ first: stops + 1, second: adjNode, third: cost + edW });
      }
    }
  }
  if (dist[dst] === 1e9) return -1;
  return dist[dst];
}
