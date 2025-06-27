function factory(x){
  return function (nums) {
    return nums.map((num) => num * x)
  }
}
