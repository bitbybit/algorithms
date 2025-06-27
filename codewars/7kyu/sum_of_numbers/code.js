function getSum(a, b)
{
  if (a === b) {
    return a
  }

  const start = a < b ? a : b
  const end = start === a ? b : a

  let result = 0

  for (let i = start; i <= end; i += 1) {
    result += i
  }

  return result
}
