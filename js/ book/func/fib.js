const fibRecursion = n => n <= 1 ? n : fibRecursion(n - 1) + fibRecursion(n - 2) 

console.log(fibRecursion(3))
console.log(fibRecursion(7))
//console.log(fibRecursion(77))

const fibCycle = n => {
  let a = 1
  let b = 1
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b]
  }
  return b
}

console.log(fibCycle(3))
console.log(fibCycle(7))
console.log(fibCycle(77))
