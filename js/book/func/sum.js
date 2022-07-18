function sum(a) {

  let current = a

  function f(b) {
    current += b
    return f
  }

  f[Symbol.toPrimitive] = function(hint) {
    return current
  }

  // f.toString = function() {
  //   return current
  // }

  return f
}

console.log(+sum(1)(2)) // 3
console.log('' + sum(5)(-1)(2)) // 6
console.log(+sum(6)(-1)(-2)(-3)) // 0
console.log('' + sum(0)(1)(2)(3)(4)(5)) // 15
