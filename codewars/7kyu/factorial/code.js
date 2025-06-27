function factorial(n)
{
  if (n < 0 || n > 12) {
    throw new RangeError()
  }

  let result = 1

  for (let i = 1; i < n + 1; i += 1) {
    result *= i
  }

  return result
}
