const arr = [2, 5, 7];
const start = 3;
const end = 30;
const ans = minimumMultiplications(arr, start, end);
console.log(ans);

function minimumMultiplications(arr, start, end) {
  const q = []; //[start, steps]
  q.push({ first: start, second: 0 });
  const dist = new Array(100000).fill(1e9);
  dist[start] = 0;
  const mod = 100000;
  const n = arr.length;
  while (q.length > 0) {
    const { first, second } = q.shift();
    const node = first;
    const steps = second;

    for (let i = 0; i < n; i++) {
      const num = (arr[i] * node) % mod;
      if (steps + 1 < dist[num]) {
        // initially dist[num] is infinity
        dist[num] = steps + 1;
        if (num === end) return steps + 1;
        q.push({ first: num, second: steps + 1 });
      }
    }
  }
  return -1;
}
