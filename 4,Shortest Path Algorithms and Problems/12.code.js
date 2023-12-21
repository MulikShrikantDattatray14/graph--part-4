let n = 4;
let m = 4;
let edges = [[0, 1, 3], [1, 2, 1], [1, 3, 4], [2, 3, 1]];
let distanceThreshold = 4;//3
//////////////////////////////////////////////////
// let n = 4;
// let m = 4;
// let edges = [
//   [0, 1, 3],
//   [1, 2, 1],
//   [1, 3, 4],
//   [2, 3, 1],
// ];
// let distanceThreshold = 4; //3
//////////////////////////////////////////////////////////
// let n=3;let m=2;let edges = [[0,1,3],[1,2,1]]; let distanceThreshold = 2;//2

let cityNo = findCity(n, m, edges, distanceThreshold);
console.log("The answer is node: " + cityNo);

function findCity(n, m, edges, distanceThreshold) {
  let dist = [];
  for (let i = 0; i < n; i++) {
    dist[i] = [];
    for (let j = 0; j < n; j++) {
      dist[i][j] = Number.MAX_VALUE;
    }
  }
  for (let i = 0; i < m; i++) {
    let u = edges[i][0];
    let v = edges[i][1];
    let wt = edges[i][2];
    dist[u][v] = wt;
    dist[v][u] = wt;
  }
 
  for (let i = 0; i < n; i++) dist[i][i] = 0;
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][k] === Number.MAX_VALUE || dist[k][j] === Number.MAX_VALUE)
          continue;
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }
  let cntCity = n;
  let cityNo = -1;
  for (let city = 0; city < n; city++) {
    let cnt = 0;
    for (let adjCity = 0; adjCity < n; adjCity++) {
      if (dist[city][adjCity] <= distanceThreshold) cnt++;
    }

    if (cnt <= cntCity && cnt !==1) {
      cntCity = cnt;
      cityNo = city;
    }

  }
  return cityNo;
}

//let n=3;let m=2;let edges = [[0,1,3],[1,2,1]]; let distanceThreshold = 2;
// const V = 3;
// let distanceThreshold = 2;//2
// let n=V;
// const matrix = [];
// for (let i = 0; i < V; i++) {
//   matrix[i] = [];
//   for (let j = 0; j < V; j++) {
//     matrix[i][j] = -1;
//   }
// }
// matrix[0][1] = 3;
// matrix[1][0] = 3;
// matrix[1][2] = 1;
// matrix[2][1] = 1;

// //output :
// // [[0 ,2, 5, -1]
// // [1 ,0, 3, -1 ]
// // [-1, -1, 0, -1]
// // [3, 5 ,4, 0 ]]

// shortestDistance(matrix);
// function shortestDistance(matrix) {
//   const n = matrix.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] === -1) {
//         matrix[i][j] = 1e9;
//       }
//       if (i === j) matrix[i][j] = 0;
//     }
//   }

//   for (let k = 0; k < n; k++) {
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);
//       }
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] === 1e9) {
//         matrix[i][j] = -1;
//       }
//     }
//   }
// }
// console.log(matrix);
// let cntCity = n;
//   let cityNo = -1;
//   for (let city = 0; city < n; city++) {
//     let cnt = 0;
//     for (let adjCity = 0; adjCity < n; adjCity++) {
//       if (matrix[city][adjCity] <= distanceThreshold) cnt++;
//     }

//     if (cnt <= cntCity && cnt !==1) {
//       cntCity = cnt;
//       cityNo = city;
//     }

//   }
//  console.log(cityNo);

