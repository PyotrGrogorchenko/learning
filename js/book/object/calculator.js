const calculator = {
  init(a, b) {
    this.a = a
    this.b = b
  },
  sum() {
    return this.a + this.b
  },
  mul() {
    return this.a * this.b
  }
}

calculator.init(2, 3)
console.log(calculator.sum())
console.log(calculator.mul())
