function plusMinus(arr: number[]): void {
  const n = arr.length
  const [positive, negative, zero] = arr.reduce(
    ([positive, negative, zero], num) => {
      if (num == 0) zero += 1
      if (num > 0) positive += 1
      if (num < 0) negative += 1
      return [positive, negative, zero]
    },
    [0, 0, 0]
  )

  const positives = (positive / n).toFixed(6)
  const negatives = (negative / n).toFixed(6)
  const zeros = (zero / n).toFixed(6)

  console.log(positives)
  console.log(negatives)
  console.log(zeros)
}

const array = [-4, 3, -9, 0, 4, 1]
plusMinus(array)
