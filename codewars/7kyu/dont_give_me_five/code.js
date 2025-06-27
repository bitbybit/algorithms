function dontGiveMeFive(start, end)
{
  const result = []

  for (let i = start; i < end + 1; i += 1) {
    if (!String(i).includes('5')) {
      result.push(i)
    }
  }

  return result.length
}
