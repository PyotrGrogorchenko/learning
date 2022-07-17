const getMaxSubSum = (arr) => {
  if (!arr.length) return 0
  let maxSum = 0
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    maxSum = Math.max(maxSum, sum)
    if (sum < 0) sum = 0
  }
  return maxSum
}

console.log(getMaxSubSum([-1, 2, 3, -9])) // 5
console.log(getMaxSubSum([2, -1, 2, 3, -9])) // 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])) // 11
console.log(getMaxSubSum([-2, -1, 1, 2])) // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])) // 100
console.log(getMaxSubSum([1, 2, 3])) // 6
