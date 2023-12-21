// const heights = [
//   [1, 2, 2],
//   [3, 8, 2],
//   [5, 3, 5],
// ];//2
let heights = [
  [1, 2, 1, 1, 1],
  [1, 2, 1, 2, 1],
  [1, 2, 1, 2, 1],
  [1, 1, 1, 2, 1],
]; //0

const ans = MinimumEffort(heights);
console.log(ans);
function Tuple(distance, row, col) {
  return { distance, row, col };
}
function MinimumEffort(heights) {
  const n = heights.length;
  const m = heights[0].length;

  const priorityqueue = [];
  const dist = [];
  for (let i = 0; i < n; i++) {
    dist.push(new Array(m).fill(Infinity));
  }
  dist[0][0] = 0;
  priorityqueue.push(Tuple(0, 0, 0));

  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];

  while (priorityqueue.length !== 0) {
    priorityqueue.sort((a, b) => a.distance - b.distance); // acts as min heap
    const { distance, row, col } = priorityqueue.shift(); //remove the first

    if (row === n - 1 && col === m - 1) return distance;

    for (let i = 0; i < 4; i++) {
      const newr = row + dr[i];
      const newc = col + dc[i];
      if (newr >= 0 && newc >= 0 && newr < n && newc < m) {
        const newEffort = Math.max(
          Math.abs(heights[row][col] - heights[newr][newc]),
          distance
        );
        if (newEffort < dist[newr][newc]) {
          // here dist[newr][newc] is infinity
          dist[newr][newc] = newEffort;
          priorityqueue.push(Tuple(newEffort, newr, newc));
        }
      }
    }
  }

  return 0;
}
