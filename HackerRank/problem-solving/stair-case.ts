function staircase(n: number): void {
  const stair = '#'
  let result = '', temp = ''

  for (let i = 1; i <= n; i++) {
    temp = stair.repeat(i).padStart(n, ' ')
    result += `${temp}\n`
  }
  console.log(result)
}

staircase(6)