function password(str) {
  if (str.length < 8) {
    return false
  }

  if (!str.match(/[A-Z]{1,}/)) {
    return false
  }

  if (!str.match(/[a-z]{1,}/)) {
    return false
  }

  if (!str.match(/[\d]{1,}/)) {
    return false
  }

  return true
}
