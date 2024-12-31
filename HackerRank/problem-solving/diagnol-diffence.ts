function diagonalDifference(arr: number[][]): number {
  let diagonal1 = 0, diagonal2 = 0, n = arr.length

  for(let i = 0; i < n; i++) {
    diagonal1 += arr[i][i]
    diagonal2 += arr[i][n - 1 - i]
  }

  return Math.abs(diagonal1 - diagonal2)
}

const matrix = [
  [11, 2 ,4],
  [4, 5, 6],
  [10, 8, -12]
]

const matrix2 = [
  [11, 2 , 4, 5],
  [4, 5, 6, 8],
  [10, 8, -12, 1],
  [4, 5, 6, 8],
]

console.log(diagonalDifference(matrix2))