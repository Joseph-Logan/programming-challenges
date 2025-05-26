function gradingStudents(grades: number[]): number[] {
  return grades.map(grade => {
    if (grade < 38) return grade

    const nextMultipleOfFive = Math.ceil(grade / 5) * 5

    return nextMultipleOfFive - grade < 3 ? nextMultipleOfFive : grade
  })
}

const grades = [73, 67, 38, 33]
console.log(gradingStudents(grades))