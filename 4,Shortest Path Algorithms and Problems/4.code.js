const source = [0, 1];
const destination = [2, 2];
const grid = [
  [1, 1, 1, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0],
  [1, 0, 0, 1],
];
const res = shortestPath(grid, source, destination);
console.log(res);
function tuple(_first, _second, _third) {
  return { first: _first, second: _second, third: _third };
}
function shortestPath(grid, source, destination) {
  // if source and destination are on the same place/location
  if (source[0] === destination[0] && source[1] === destination[1]) return 0;
  //else
  const queue = [];
  const n = grid.length;
  const m = grid[0].length;
  const dist = [];
  for (let i = 0; i < n; i++) {
    const row = Array(m).fill(1e9);
    dist.push(row);
  }
  dist[source[0]][source[1]] = 0;
  queue.push(tuple(0, source[0], source[1]));
  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];
  while (queue.length !== 0) {
    const it = queue.shift();
    const dis = it.first;
    const r = it.second;
    const c = it.third;
    for (let i = 0; i < 4; i++) {
      const newr = r + dr[i];
      const newc = c + dc[i];
      if (
        newr >= 0 &&
        newr < n &&
        newc >= 0 &&
        newc < m &&
        grid[newr][newc] === 1 &&
        dis + 1 < dist[newr][newc]
      ) {
        dist[newr][newc] = 1 + dis;
        if (newr === destination[0] && newc === destination[1]) return dis + 1;
        queue.push(tuple(1 + dis, newr, newc));
      }
    }
  }
  return -1;
}
