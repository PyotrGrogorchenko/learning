function Calculator() {
  this.methods = {}
  this.addMethod = (action, fn) => {
    this.methods[action] = fn
  },
  this.calculate = (expression) => {
    const values = expression.split(' ')
    
    if (values.length < 3) return 'expression is not correct'

    const a = +values[0]
    const b = +values[2]

    if (Number.isNaN(a) || Number.isNaN(b)) return 'expression is not correct'
    const method = this.methods[values[1]]
    if (!method) return 'expression is not correct'
    return method(a, b)
  }
}

const calculator = new Calculator()
calculator.addMethod('*', (a, b) => a * b)
calculator.addMethod('/', (a, b) => a / b)
calculator.addMethod('**', (a, b) => a ** b)


console.log(calculator.calculate(''))
console.log(calculator.calculate('2 * 4'))
console.log(calculator.calculate('4 / 0'))
