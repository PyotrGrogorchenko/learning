function Calculator() {
  this.init = (a, b) => {
    this.a = a
    this.b = b
  }
  this.sum = () => {
    return this.a + this.b
  }
  this.mul = () => {
    return this.a * this.b
  }
}


const calculator = new Calculator()
calculator.init(2, 3)

console.log(calculator.sum())
console.log(calculator.mul())
