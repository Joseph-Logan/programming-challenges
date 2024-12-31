function miniMaxSum(arr: number[]): void {
  let totalSum = arr.reduce((sum, num) => sum + num, 0)
  let minValue = Math.min(...arr)
  let maxValue = Math.max(...arr)
  
  console.log(totalSum - maxValue, totalSum - minValue)
}

const numbers: number[] = [1, 2, 3, 4, 5]
miniMaxSum(numbers)