function stray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const i1 = i === 0 ? i + 2 : i - 1
    const i2 = i === numbers.length - 1 ? i - 2 : i + 1

    if (
      numbers[i1] !== numbers[i] &&
      numbers[i2] !== numbers[i]
    ) {
      return numbers[i]
    }
  }
}
