export function compareTriplets (a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) throw new Error('Inputs must be arrays of the same length')

  return a.reduce(([firstArr, sencondArr], tempValueA, index) => {
    const tempValueB = b[index]

    if (tempValueA > tempValueB) firstArr += 1
    if (tempValueA < tempValueB) sencondArr += 1

    return [firstArr, sencondArr]
  }, [0, 0])
}

const a = [17, 28, 30]
const b = [99, 16, 8]

console.log(compareTriplets(a, b))
