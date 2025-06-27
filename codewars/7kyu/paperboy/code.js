function cheapestQuote(newspapers) {
  const prices = new Map()

  prices.set(40, 3.85)
  prices.set(20, 1.93)
  prices.set(10, 0.97)
  prices.set(5, 0.49)
  prices.set(1, 0.10)

  let amount = newspapers
  let result = 0

  for (const [priceAmount, price] of prices) {
    if (amount === 0) {
      break
    }

    const multiplier = Math.floor(amount / priceAmount)

    amount -= multiplier * priceAmount
    result += multiplier * price
  }

  return Number(result.toFixed(2))
}
