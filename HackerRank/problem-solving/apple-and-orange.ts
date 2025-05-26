function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
  const isInsideLand = (fruit: number) => fruit >= s && fruit <= t
  let applesInsideLand = apples.filter((apple) => isInsideLand(a + apple)).length
  let orangesInsideLand = oranges.filter((orange) => isInsideLand(b + orange)).length

  console.log(applesInsideLand)
  console.log(orangesInsideLand)
}


countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]) 