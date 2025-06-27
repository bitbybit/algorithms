// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  const result = ages

  result.sort((a, b) => a - b)

  return [result.at(-2), result.at(-1)]
}
