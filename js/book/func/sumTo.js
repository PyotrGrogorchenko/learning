const sumToCycle = n => {
  let res = 0
  for (let i = 1; i <= n; i++) {
    res += i
  }
  return res
}

const sumToRecursion = n => {
  if (n === 1) return 1
  return n + sumToRecursion(n - 1)
}

const sumToFunc = n => n * (n + 1) / 2

console.log(sumToCycle(1), sumToRecursion(1), sumToFunc(1))
console.log(sumToCycle(2), sumToRecursion(2), sumToFunc(2))
console.log(sumToCycle(3), sumToRecursion(3), sumToFunc(3))
console.log(sumToCycle(4), sumToRecursion(4), sumToFunc(4))
console.log(sumToCycle(100), sumToRecursion(100), sumToFunc(100))
console.log(sumToCycle(1000), sumToRecursion(1000), sumToFunc(1000))
