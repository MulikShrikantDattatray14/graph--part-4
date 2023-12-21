const V = 4;
const matrix = [];
for (let i = 0; i < V; i++) {
    matrix[i] = [];
    for (let j = 0; j < V; j++) {
        matrix[i][j] = -1;
    }
}
matrix[0][1] = 2;
matrix[1][0] = 1;
matrix[1][2] = 3;
matrix[3][0] = 3;
matrix[3][1] = 5;
matrix[3][2] = 4;
//output : 
// [[0 ,2, 5, -1] 
// [1 ,0, 3, -1 ]
// [-1, -1, 0, -1] 
// [3, 5 ,4, 0 ]]

shortestDistance(matrix);
function shortestDistance(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === -1) {
                matrix[i][j] = 1e9;
            }
            if (i === j) matrix[i][j] = 0;
        }
    }

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 1e9) {
                matrix[i][j] = -1;
            }
        }
    }
}

for (let i = 0; i < V; i++) {
    for (let j = 0; j < V; j++) {
        process.stdout.write(matrix[i][j] + " ");
    }
    console.log("");
}
