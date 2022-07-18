function makeCounter() {
  let count = 0
  const counter = () => count++
  counter.set = val => count = val
  counter.decrease = () => count--

  return counter
}

const counter = makeCounter()
console.log(counter())
console.log(counter())
console.log(counter())
counter.set(5)
console.log(counter())
console.log(counter.decrease())
console.log(counter())

