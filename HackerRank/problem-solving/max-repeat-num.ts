function birthdayCakeCandles(candles: number[]): number {
  let maxCount = 0

  const countMap = new Map<number, number>();
  
  for (const candle of candles) {
    countMap.set(candle, (countMap.get(candle) || 0) + 1)
  }

  for (const [value, count] of countMap.entries()) {
    if (count > maxCount) {
      maxCount = count
    }
  }

  return maxCount
}


const candles = [3, 2, 1, 3]

console.log(birthdayCakeCandles(candles))