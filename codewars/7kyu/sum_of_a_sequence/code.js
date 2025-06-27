const sequenceSum = (begin, end, step) => {
  let result = 0

  for (let i = begin; i <= end; i += step) {
    result += i
  }

  return result
};
